import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

interface NewsletterPostBody {
  id?: string;
  title: string;
  content: string;
  status?: "PUBLISHED" | "DRAFT";
}

export async function GET() {
  try {
    const posts = await prisma.newletterPost.findMany();
    return NextResponse.json(posts);
  } catch (error: unknown) {
    return NextResponse.json(
      { error: (error as Error).message },
      { status: 500 }
    );
  }
}

export async function POST(request: NextRequest) {
  if (request.body === null) {
    throw new Error("No body found");
  }

  const body: NewsletterPostBody = await request.json();

  try {
    const post = await prisma.newletterPost.create({
      data: {
        title: body.title,
        content: body.content,
        status: body.status || "DRAFT",
      },
    });
    return NextResponse.json(post);
  } catch (error: unknown) {
    return NextResponse.json(
      { error: (error as Error).message },
      { status: 500 }
    );
  }
}

export async function PUT(request: NextRequest) {
  if (request.body === null) {
    throw new Error("No body found");
  }

  const body: NewsletterPostBody = await request.json();

  try {
    const post = await prisma.newletterPost.update({
      where: { id: body.id ? parseInt(body.id) : undefined },
      data: {
        title: body.title,
        content: body.content,
        status: body.status || "DRAFT",
      },
    });
    return NextResponse.json(post);
  } catch (error: unknown) {
    return NextResponse.json(
      { error: (error as Error).message },
      { status: 500 }
    );
  }
}

export async function DELETE(request: NextRequest) {
  if (request.body === null) {
    throw new Error("No body found");
  }

  const body: { id: string } = await request.json();

  try {
    const post = await prisma.newletterPost.delete({
      where: { id: parseInt(body.id) },
    });
    return NextResponse.json(post);
  } catch (error: unknown) {
    return NextResponse.json(
      { error: (error as Error).message },
      { status: 500 }
    );
  }
}
