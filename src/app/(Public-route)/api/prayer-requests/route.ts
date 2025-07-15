import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { TryCatch } from "@/util/TryCatch";

export async function GET() {
  const { Data, Error } = await TryCatch(prisma.prayerRequest.findMany());

  if (Error) {
    return NextResponse.json({ error: Error.message }, { status: 500 });
  }
  return NextResponse.json(Data);
}

export async function POST(request: NextRequest) {

  const body = await request.json();

  const { Data, Error } = await TryCatch(
    prisma.prayerRequest.create({
      data: {
        name: body.name,
        email: body.email,
        message: body.message,
      },
    })
  );

  if (Error) {
    return NextResponse.json({ error: Error.message }, { status: 500 });
  }
  return NextResponse.json(Data);
}

export async function DELETE(request: NextRequest) {

  const body = await request.json();

  const { Data, Error } = await TryCatch(
    prisma.prayerRequest.delete({
      where: { id: body.id },
    })
  );

  if (Error) {
    return NextResponse.json({ error: Error.message }, { status: 500 });
  }
  return NextResponse.json(Data);
}
