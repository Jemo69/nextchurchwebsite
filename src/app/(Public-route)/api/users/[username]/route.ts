import { NextResponse } from "next/server";
import { users } from "../store";

interface Params {
  username: string;
}

export async function GET(
  req: Request,
  { params }: { params: Promise<Params> },
) {
  const { username } = await params;
  const user = users.find((user) => user.username === username);

  if (user) {
    return NextResponse.json(user);
  }

  return NextResponse.json({ message: "User not found" }, { status: 404 });
}
