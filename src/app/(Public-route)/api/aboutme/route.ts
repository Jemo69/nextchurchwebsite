import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

export async function GET() {
  try {
    const aboutMe = await prisma.aboutme.findMany();
    return NextResponse.json(aboutMe);
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
    const aboutMe = await prisma.aboutme.create({
      data: {
        name: body.name,
        message: body.message,
      },
    });
    return NextResponse.json(aboutMe);
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
    const aboutMe = await prisma.aboutme.update({
      where: { id: body.id },
      data: {
        name: body.name,
        message: body.message,
      },
    });
    return NextResponse.json(aboutMe);
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
    const aboutMe = await prisma.aboutme.delete({
      where: { id: body.id },
    });
    return NextResponse.json(aboutMe);
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
