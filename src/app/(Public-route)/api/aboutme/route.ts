import { NextRequest, NextResponse } from "next/server";
import { db } from "@/lib/drizzle";
import { Aboutme } from "@/lib/schema";
import { eq } from "drizzle-orm";

export async function GET() {
  try {
    const aboutMe = await db.select().from(Aboutme);
    return NextResponse.json(aboutMe);
  } catch (error: unknown) {
    if (error instanceof Error) {
        return NextResponse.json({ error: error.message }, { status: 500 });
    }
    return NextResponse.json({ error: "An unknown error occurred" }, { status: 500 });
  }
}

export async function POST(request: NextRequest) {
  if (request.body === null) {
    throw new Error("No body found");
  }

  const body = await request.json();

  try {
    const aboutMe = await db.insert(Aboutme).values({
      name: body.name,
      message: body.message,
    });
    return NextResponse.json(aboutMe);
  } catch (error: unknown) {
    if (error instanceof Error) {
        return NextResponse.json({ error: error.message }, { status: 500 });
    }
    return NextResponse.json({ error: "An unknown error occurred" }, { status: 500 });
  }
}

export async function PUT(request: NextRequest) {
  if (request.body === null) {
    throw new Error("No body found");
  }

  const body = await request.json();

  try {
    const aboutMe = await db.update(Aboutme).set({
      name: body.name,
      message: body.message,
    }).where(eq(Aboutme.id, body.id));
    return NextResponse.json(aboutMe);
  } catch (error: unknown) {
    if (error instanceof Error) {
        return NextResponse.json({ error: error.message }, { status: 500 });
    }
    return NextResponse.json({ error: "An unknown error occurred" }, { status: 500 });
  }
}

export async function DELETE(request: NextRequest) {
  if (request.body === null) {
    throw new Error("No body found");
  }

  const body = await request.json();

  try {
    const aboutMe = await db.delete(Aboutme).where(eq(Aboutme.id, body.id));
    return NextResponse.json(aboutMe);
  } catch (error: unknown) {
    if (error instanceof Error) {
        return NextResponse.json({ error: error.message }, { status: 500 });
    }
    return NextResponse.json({ error: "An unknown error occurred" }, { status: 500 });
  }
}
