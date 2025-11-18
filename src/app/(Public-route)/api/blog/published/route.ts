import { NextResponse } from "next/server";
import { db } from "@/lib/drizzle";
import { Post } from "@/lib/schema";
import { eq, desc } from "drizzle-orm";
import { TryCatch } from "@/util/TryCatch";

export async function GET() {
  const { Data, Error } = await TryCatch(
    db.select().from(Post).where(eq(Post.Status, "PUBLISHED")).orderBy(desc(Post.createdAt))
  );

  if (Error) {
    return NextResponse.json({ error: Error.message }, { status: 500 });
  }

  return NextResponse.json(Data);
}
