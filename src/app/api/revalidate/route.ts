import { revalidateTag } from "next/cache";
import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  const tag = request.nextUrl.searchParams.get("tag");
  const secret = request.nextUrl.searchParams.get("secret");

  if (secret !== "123") {
    return NextResponse.json({ message: "invalid secret" }, { status: 401 });
  }

  if (!tag) {
    return NextResponse.json({ message: "tag is required" }, { status: 400 });
  }

  revalidateTag(tag);

  return NextResponse.json({
    revalidate: true,
    now: Date.now(),
  });
}
