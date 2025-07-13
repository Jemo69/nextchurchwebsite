import { NextResponse } from "next/server";
import { users } from "./store";

export async function GET() {
  return NextResponse.json(users);
}
