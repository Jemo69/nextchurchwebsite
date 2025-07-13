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
export async function GET_BY_SLUG(request: NextRequest) {
  const slug = request.nextUrl.searchParams.get("slug")
  if(slug === null){
    throw new Error("no slug")
  }
  const {Data, Error:PostError} = await TryCatch(prisma.post.findUnique({
    where: {
      slug: slug,
    },
  }));
  if (PostError) {
    return NextResponse.json({ error: PostError?.message }, { status: 500 });
  }
  return NextResponse.json(Data);
}
