import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

interface EmailContactBody {
  id?: string;
  name: string;
  email: string;
  is_subscriber: boolean;
}

export async function GET() {
  try {
    const contacts = await prisma.emailContact.findMany();
    return NextResponse.json(contacts);
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

  const body: EmailContactBody = await request.json();

  try {
    const contact = await prisma.emailContact.create({
      data: {
        name: body.name,
        email: body.email,
        is_subscriber: body.is_subscriber,
      },
    });
    return NextResponse.json(contact);
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

  const body: EmailContactBody = await request.json();

  try {
    const contact = await prisma.emailContact.update({
      where: { id: body.id ? parseInt(body.id) : undefined },
      data: {
        name: body.name,
        email: body.email,
        is_subscriber: body.is_subscriber,
      },
    });
    return NextResponse.json(contact);
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
    const contact = await prisma.emailContact.delete({
      where: { id: parseInt(body.id) },
    });
    return NextResponse.json(contact);
  } catch (error: unknown) {
    return NextResponse.json(
      { error: (error as Error).message },
      { status: 500 }
    );
  }
}
