import { NextResponse } from "next/server";
import bcrypt from "bcrypt";
import { PrismaClient } from "@prisma/client";
import { z } from "zod";
import rateLimit from "@/lib/rate-limiter";

const prisma = new PrismaClient();

const limiter = rateLimit({
  interval: 60 * 1000, // 60 seconds
  uniqueTokenPerInterval: 500, // Max 500 users per interval
});

const registerSchema = z.object({
  username: z.string().min(3),
  password: z.string().min(6),
  securityCode: z.string(),
});

export async function POST(req: Request) {
  try {
    await limiter.check(5, req.headers.get("x-forwarded-for") as string);
    const body = await req.json();
    const { username, password, securityCode } = registerSchema.parse(body);

    if (securityCode !== process.env.SECURITY_CODE) {
      return NextResponse.json(
        { message: "Invalid security code" },
        { status: 401 }
      );
    }

    const existingUser = await prisma.user.findUnique({ where: { username } });
    if (existingUser) {
      return NextResponse.json(
        { message: "User already exists" },
        { status: 409 }
      );
    }

    const hashedPassword = await bcrypt.hash(password, 10);
    await prisma.user.create({
      data: {
        username,
        password: hashedPassword,
      },
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    if (error instanceof z.ZodError) {
      return NextResponse.json({ message: error.issues }, { status: 400 });
    }
    return NextResponse.json(
      { message: "An unexpected error occurred." },
      { status: 500 }
    );
  }
}
