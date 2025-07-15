import { NextResponse } from "next/server";
import { cookies } from "next/headers";

export async function POST() {
  const cookiestore =  await cookies()
   cookiestore.delete("auth");
  return NextResponse.json({ success: true });
}
