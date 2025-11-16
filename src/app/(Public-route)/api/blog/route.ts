import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { TryCatch } from "@/util/TryCatch";

interface PostBody {
  slug: string;
  title: string;
  content: string;
  Status?: "PUBLISHED" | "DRAFT";
}

interface DeleteBody {
  slug: string;
}

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
      return NextResponse.json(
        { error: (error as Error).message },
        { status: 500 }
      );
    }
  } else {
    // Get all posts
    try {
      const posts = await prisma.post.findMany();
      return NextResponse.json(posts);
    } catch (error: unknown) {
      return NextResponse.json(
        { error: (error as Error).message },
        { status: 500 }
      );
    }
  }
}
export async function POST(request: NextRequest) {
  if (request.body === null) {
    throw new Error("No body found");
  }

  const body: PostBody = await request.json();

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
  const body: DeleteBody = await request.json();
  const { Data, Error: DeleteError } = await TryCatch(
    prisma.post.delete({
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
  const body: PostBody = await request.json();
  const { Data, Error: PutError } = await TryCatch(
    prisma.post.update({
      where: {
        slug: body.slug,
      },
      data: {
        title: body.title,
        content: body.content,
        Status: body.Status || "DRAFT",
      },
    })
  );
  if (PutError) {
    return NextResponse.json({ error: PutError.message }, { status: 500 });
  }
  return NextResponse.json(Data);
}
