import { NextRequest, NextResponse } from "next/server";
import { db } from "@/lib/drizzle";
import { PrayerRequest } from "@/lib/schema";
import { eq } from "drizzle-orm";
import { TryCatch } from "@/util/TryCatch";

export async function GET() {
  const { Data, Error } = await TryCatch(db.select().from(PrayerRequest));

  if (Error) {
    return NextResponse.json({ error: Error.message }, { status: 500 });
  }
  return NextResponse.json(Data);
}

export async function POST(request: NextRequest) {
  const body = await request.json();

  const { Data, Error } = await TryCatch(
    db.insert(PrayerRequest).values({
      name: body.name,
      email: body.email,
      message: body.message,
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
    db.delete(PrayerRequest).where(eq(PrayerRequest.id, body.id))
  );

  if (Error) {
    return NextResponse.json({ error: Error.message }, { status: 500 });
  }
  return NextResponse.json(Data);
}
