import { NextResponse } from "next/server";
import { cookies } from "next/headers";
import bcrypt from "bcrypt";
import { SignJWT } from "jose";
import { PrismaClient } from "../../../../../some/generated/prisma";
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
    console.log("1")
    const body = await req.json();

    console.log("2")
    const { username, password } = loginSchema.parse(body);
    console.log("3")

    const user = await prisma.user.findUnique({ where: { username } });
    console.log("4")

    if (user && (await bcrypt.compare(password, user.password))) {
    //   const secret = new TextEncoder().encode(process.env.JWT_SECRET!);
      const secret = new TextEncoder().encode("e3ff5f077839c1331b1d893a728246685cb7dba9e3a77bffe7d52eaccf660988");

    console.log("5")
      const token = await new SignJWT({ username })
        .setProtectedHeader({ alg: "HS256" })
        .setExpirationTime("1h")
        .sign(secret);

    console.log("6")
      const response = NextResponse.json({ success: true });
      const cookieStore = await cookies()
      cookieStore.set("auth", token, {
        httpOnly: true,
        secure: process.env.NODE_ENV === "production",
      });

    console.log("7")
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
      { message: `An unexpected error occurred.${error}` },
      { status: 500 }
    );
  }
}
