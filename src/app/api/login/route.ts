import { NextResponse } from "next/server";
import { cookies } from "next/headers";

import { users } from "../register/route";

export async function POST(req: Request) {
  const { username, password } = await req.json();

  const user = users.find(
    (user) => user.username === username && user.password === password
  );

  if (user) {
    const response = NextResponse.json({ success: true });
    cookies().set("auth", "true", { httpOnly: true });
    return response;
  }

  return NextResponse.json(
    { success: false },
    { status: 401, statusText: "Invalid username or password" }
  );
}
