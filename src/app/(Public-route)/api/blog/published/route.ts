import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { TryCatch } from "@/util/TryCatch";

export async function GET(request: NextRequest) {
  const { Data, Error } = await TryCatch(
    prisma.post.findMany({
      where: {
        Status: "PUBLISHED",
      },
      orderBy: {
        createdAt: "desc",
      },
    })
  );

  if (Error) {
    return NextResponse.json({ error: Error.message }, { status: 500 });
  }

  return NextResponse.json(Data);
}
