import { NextResponse } from "next/server";

import { users } from "../users/store";

const SECURITY_CODE = "0213";

export async function POST(req: Request) {
  try {
    const { username, password, securityCode } = await req.json();

    if (!username || !password || !securityCode) {
      return NextResponse.json(
        { message: "Missing required fields" },
        { status: 400 }
      );
    }

    if (securityCode !== SECURITY_CODE) {
      return NextResponse.json(
        { message: "Invalid security code" },
        { status: 401 }
      );
    }

    if (users.find((user) => user.username === username)) {
      return NextResponse.json(
        { message: "User already exists" },
        { status: 409 }
      );
    }

    users.push({ username, password });

    return NextResponse.json({ success: true });
  } catch (error) {
    return NextResponse.json(
      { message: "An unexpected error occurred." },
      { status: 500 }
    );
  }
}
