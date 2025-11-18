import { NextRequest, NextResponse } from "next/server";
import { db } from "@/lib/drizzle";
import { NewletterPost } from "@/lib/schema";
import { eq } from "drizzle-orm";

export async function GET() {
  try {
    const posts = await db.select().from(NewletterPost);
    return NextResponse.json(posts);
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
    const post = await db.insert(NewletterPost).values({
      title: body.title,
      content: body.content,
      status: body.status,
    });
    return NextResponse.json(post);
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
    const post = await db.update(NewletterPost).set({
      title: body.title,
      content: body.content,
      status: body.status,
    }).where(eq(NewletterPost.id, body.id));
    return NextResponse.json(post);
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
    const post = await db.delete(NewletterPost).where(eq(NewletterPost.id, body.id));
    return NextResponse.json(post);
  } catch (error: unknown) {
    if (error instanceof Error) {
        return NextResponse.json({ error: error.message }, { status: 500 });
    }
    return NextResponse.json({ error: "An unknown error occurred" }, { status: 500 });
  }
}
