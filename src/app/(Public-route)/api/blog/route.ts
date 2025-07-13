import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { TryCatch } from "@/util/TryCatch";
export async function GET(request: NextRequest) {
  const { Data, Error } = await TryCatch(prisma.post.findMany());
  if (Error) {
    return NextResponse.json({ error: Error.message }, { status: 500 });
  }
  return NextResponse.json(Data);
}
export async function POST(request: NextRequest) {
  if (request.body === null) {
    throw new Error("No body found");
  }

  const body = await request.json();

  const { Data, Error: PostError } = await TryCatch(
    prisma.post.create({
      data: {
        slug: body.slug,
        title: body.title,
        content: body.content,
        Status: body.Status || "DRAFT",
      },
    })
  );
  if (PostError) {
    return NextResponse.json({ error: PostError.message }, { status: 500 });
  }
  return NextResponse.json(Data);
}
export async function DELETE(request: NextRequest) {
  if (request.body === null) {
    throw new Error("No body found");
  }
  const body = await request.json();
  const {Data, Error: DeleteError} = await TryCatch(prisma.post.delete({
    where: {
      slug: body.slug,
      },
    })
  );
  if (DeleteError) {
    return NextResponse.json({ error: DeleteError.message }, { status: 500 });
  }
  return NextResponse.json(Data);
}
export async function PUT(request: NextRequest) {
  if (request.body === null) {
    throw new Error("No body found");
  }
  const body = await request.json();
  const {Data, Error: PutError} = await TryCatch(prisma.post.update({
    where: {
      slug: body.slug,
    },
    data: {
      title: body.title,
      content: body.content,
      Status: body.Status || "DRAFT",
    },
  }));
  if (PutError) {
    return NextResponse.json({ error: PutError.message }, { status: 500 });
  }
  return NextResponse.json(Data);
}
export async function GET_BY_SLUG(request: NextRequest) {
  const {Data, Error} = await TryCatch(prisma.post.findUnique({
    where: {
      slug: request.nextUrl.searchParams.get("slug"),
    },
  }));
  if (Error) {
    return NextResponse.json({ error: Error.message }, { status: 500 });
  }
  return NextResponse.json(Data);
}
export async function GET_ALL_PUBLISHED(request: NextRequest) {
  const {Data, Error} = await TryCatch(prisma.post.findMany({
    where: {
      Status: "PUBLISHED",
    },
  }));
}