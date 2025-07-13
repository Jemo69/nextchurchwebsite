import { NextResponse } from "next/server";

const users = [
  {
    username: "admin",
    password: "admin",
  },
];
const SECURITY_CODE = "0213";

export async function POST(req: Request) {
  const { username, password, securityCode } = await req.json();

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
}
