import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/server/db";

export async function GET() {
  try {
    const aboutMe = await prisma.aboutme.findMany();
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
    const aboutMe = await prisma.aboutme.create({
      data: {
        name: body.name,
        message: body.message,
      },
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
    const aboutMe = await prisma.aboutme.update({
      where: { id: body.id },
      data: {
        name: body.name,
        message: body.message,
      },
    });
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
    const aboutMe = await prisma.aboutme.delete({
      where: { id: body.id },
    });
    return NextResponse.json(aboutMe);
  } catch (error: unknown) {
    if (error instanceof Error) {
        return NextResponse.json({ error: error.message }, { status: 500 });
    }
    return NextResponse.json({ error: "An unknown error occurred" }, { status: 500 });
  }
}
