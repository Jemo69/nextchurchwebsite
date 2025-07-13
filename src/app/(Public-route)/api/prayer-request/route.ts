
import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { TryCatch } from "@/util/TryCatch";
export async function GET(request: NextRequest) {
  const {Data, Error} = await TryCatch(prisma.prayerRequest.findMany());
  if (Error) {
    return NextResponse.json({ error: Error.message }, { status: 500 });
  }
  return NextResponse.json(Data);
}
export async function POST(request: NextRequest) {
    if (request.body === null) {
        throw new Error("No body found");
    }
    const body = await request.json();
    const {Data, Error: PostError} = await TryCatch(prisma.prayerRequest.create({
        data: {
            name: body.name,
            email: body.email,
            message: body.message,
        }
    }));
    if (PostError) {
        return NextResponse.json({ error: PostError.message }, { status: 500 });
    }
    return NextResponse.json(Data);
}