import { retrieveData, retrieveDataById } from "@/lib/firebase/service";
import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url);
  const id = searchParams.get("id");
  if (id) {
    const product = await retrieveDataById("products", id);
    return NextResponse.json({
      status: 200,
      message: "success",
      data: product,
    });
  }

  const products = await retrieveData("products");

  return NextResponse.json({ status: 200, message: "success", data: products });
}
