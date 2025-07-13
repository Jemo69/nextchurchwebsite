import { NextResponse } from "next/server";
import { users } from "../store";

export async function GET(
  req: Request,
  { params }: { params: { username: string } }
) {
  const user = users.find((user) => user.username === params.username);

  if (user) {
    return NextResponse.json(user);
  }

  return NextResponse.json({ message: "User not found" }, { status: 404 });
}
