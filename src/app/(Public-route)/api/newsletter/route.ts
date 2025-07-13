import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

export async function GET() {
  try {
    const posts = await prisma.newletterPost.findMany();
    return NextResponse.json(posts);
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}

export async function POST(request: NextRequest) {
  if (request.body === null) {
    throw new Error("No body found");
  }

  const body = await request.json();

  try {
    const post = await prisma.newletterPost.create({
      data: {
        title: body.title,
        content: body.content,
        status: body.status,
      },
    });
    return NextResponse.json(post);
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}

export async function PUT(request: NextRequest) {
  if (request.body === null) {
    throw new Error("No body found");
  }

  const body = await request.json();

  try {
    const post = await prisma.newletterPost.update({
      where: { id: body.id },
      data: {
        title: body.title,
        content: body.content,
        status: body.status,
      },
    });
    return NextResponse.json(post);
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}

export async function DELETE(request: NextRequest) {
  if (request.body === null) {
    throw new Error("No body found");
  }

  const body = await request.json();

  try {
    const post = await prisma.newletterPost.delete({
      where: { id: body.id },
    });
    return NextResponse.json(post);
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
