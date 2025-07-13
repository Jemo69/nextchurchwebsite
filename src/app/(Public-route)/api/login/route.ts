import { NextResponse } from "next/server";
import { cookies } from "next/headers";

import { users } from "../users/store";

export async function POST(req: Request) {
  try {
    const { username, password } = await req.json();

    if (!username || !password) {
      return NextResponse.json(
        { message: "Missing username or password" },
        { status: 400 }
      );
    }

    const user = users.find(
      (user) => user.username === username && user.password === password
    );

    if (user) {
      const response = NextResponse.json({ success: true });
      cookies().set("auth", "true", { httpOnly: true });
      return response;
    }

    return NextResponse.json(
      { message: "Invalid username or password" },
      { status: 401 }
    );
  } catch (error) {
    return NextResponse.json(
      { message: "An unexpected error occurred." },
      { status: 500 }
    );
  }
}
