import { NextResponse } from "next/server";
import { cookies } from "next/headers";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import { PrismaClient } from "@prisma/client";
import { z } from "zod";
import rateLimit from "@/lib/rate-limiter";

const prisma = new PrismaClient();

const limiter = rateLimit({
  interval: 60 * 1000, // 60 seconds
  uniqueTokenPerInterval: 500, // Max 500 users per interval
});

const loginSchema = z.object({
  username: z.string(),
  password: z.string(),
});

export async function POST(req: Request) {
  try {
    await limiter.check(5, req.headers.get("x-forwarded-for") as string);
    const body = await req.json();
    const { username, password } = loginSchema.parse(body);

    const user = await prisma.user.findUnique({ where: { username } });

    if (user && (await bcrypt.compare(password, user.password))) {
      const token = jwt.sign({ username }, process.env.JWT_SECRET!, {
        expiresIn: "1h",
      });
      const response = NextResponse.json({ success: true });
      cookies().set("auth", token, {
        httpOnly: true,
        secure: process.env.NODE_ENV === "production",
      });
      return response;
    }

    return NextResponse.json(
      { message: "Invalid username or password" },
      { status: 401 }
    );
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
