import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

export async function GET() {
  try {
    const questions = await prisma.questions.findMany();
    return NextResponse.json(questions);
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
    const question = await prisma.questions.create({
      data: {
        question: body.question,
      },
    });
    return NextResponse.json(question);
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
    const question = await prisma.questions.update({
      where: { id: body.id },
      data: {
        question: body.question,
      },
    });
    return NextResponse.json(question);
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
    const question = await prisma.questions.delete({
      where: { id: body.id },
    });
    return NextResponse.json(question);
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
