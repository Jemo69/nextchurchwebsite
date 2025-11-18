import { NextRequest, NextResponse } from "next/server";
import { db } from "@/lib/drizzle";
import { Post } from "@/lib/schema";
import { eq } from "drizzle-orm";
import { TryCatch } from "@/util/TryCatch";

export async function PUT(request: NextRequest) {
  if (request.body === null) {
    throw new Error("No body found");
  }
  const body = await request.json();
  const { Data, Error: PutError } = await TryCatch(
    db.update(Post).set({
      title: body.title,
      content: body.content,
      Status: body.Status || "DRAFT",
    }).where(eq(Post.slug, body.slug))
  );
  if (PutError) {
    return NextResponse.json({ error: PutError.message }, { status: 500 });
  }
  return NextResponse.json(Data);
}

interface Params {
  slug: string;
}

export async function GET(
  request: NextRequest,
  { params }: { params: Promise<Params> }
) {
  const { slug } = await params;
  const { Data, Error: PostError } = await TryCatch(
    db.select().from(Post).where(eq(Post.slug, slug))
  );
  if (PostError) {
    return NextResponse.json({ error: PostError?.message }, { status: 500 });
  }
  return NextResponse.json(Data);
}
