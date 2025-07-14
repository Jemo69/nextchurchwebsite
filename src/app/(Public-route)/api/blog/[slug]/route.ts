import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { TryCatch } from "@/util/TryCatch";
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
export async function GET(
  request: NextRequest,
  { params }: { params: { slug: string } }
) {
  const {Data, Error:PostError} = await TryCatch(prisma.post.findUnique({
    where: {
      slug: params.slug,
    },
  }));
  if (PostError) {
    return NextResponse.json({ error: PostError?.message }, { status: 500 });
  }
  return NextResponse.json(Data);
}
