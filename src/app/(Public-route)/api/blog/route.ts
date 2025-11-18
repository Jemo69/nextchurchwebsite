import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { TryCatch } from "@/util/TryCatch";
export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url);
  const slug = searchParams.get("slug");

  if (slug) {
    // Get specific post by slug
    try {
      const post = await prisma.post.findUnique({
        where: { slug: slug },
      });

      if (!post) {
        return NextResponse.json({ error: "Post not found" }, { status: 404 });
      }

      return NextResponse.json(post);
    } catch (error: unknown) {
      if (error instanceof Error) {
        return NextResponse.json({ error: error.message }, { status: 500 });
      }
      return NextResponse.json(
        { error: "An unknown error occurred" },
        { status: 500 },
      );
    }
  } else {
    // Get all posts
    try {
      const posts = await prisma.post.findMany();
      return NextResponse.json(posts);
    } catch (error: unknown) {
      if (error instanceof Error) {
        return NextResponse.json({ error: error.message }, { status: 500 });
      }
      return NextResponse.json(
        { error: "An unknown error occurred" },
        { status: 500 },
      );
    }
  }
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
    }),
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
  const { Data, Error: DeleteError } = await TryCatch(
    prisma.post.delete({
      where: {
        slug: body.slug,
      },
    }),
  );
  if (DeleteError) {
    return NextResponse.json({ error: DeleteError.message }, { status: 500 });
  }
  return NextResponse.json(Data);
}
