import { NextResponse } from "next/server";
import { cookies } from "next/headers";

export async function POST(req: Request) {
  const { password } = await req.json();

  if (password === "admin") {
    const response = NextResponse.json({ success: true });
    cookies().set("auth", "true", { httpOnly: true });
    return response;
  }

  return NextResponse.json(
    { success: false },
    { status: 401, statusText: "Invalid password" }
  );
}
