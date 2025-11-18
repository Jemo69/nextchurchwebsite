import { NextRequest, NextResponse } from "next/server";
import { db } from "@/lib/drizzle";
import { EmailContact } from "@/lib/schema";
import { eq } from "drizzle-orm";

export async function GET() {
  try {
    const contacts = await db.select().from(EmailContact);
    return NextResponse.json(contacts);
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
    const contact = await db.insert(EmailContact).values({
      name: body.name,
      email: body.email,
      is_subscriber: body.is_subscriber,
    });
    return NextResponse.json(contact);
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
    const contact = await db.update(EmailContact).set({
      name: body.name,
      email: body.email,
      is_subscriber: body.is_subscriber,
    }).where(eq(EmailContact.id, body.id));
    return NextResponse.json(contact);
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
    const contact = await db.delete(EmailContact).where(eq(EmailContact.id, body.id));
    return NextResponse.json(contact);
  } catch (error: unknown) {
    if (error instanceof Error) {
        return NextResponse.json({ error: error.message }, { status: 500 });
    }
    return NextResponse.json({ error: "An unknown error occurred" }, { status: 500 });
  }
}
