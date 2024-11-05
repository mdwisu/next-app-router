/* eslint-disable @typescript-eslint/no-explicit-any */
import dbConnect from "@/lib/mongodb/db";
import Product from "@/lib/mongodb/models/Product";
import { NextResponse } from "next/server";

export async function GET() {
  if (process.env.NODE_ENV !== "production") {
    await dbConnect();
  }
  try {
    const products = await Product.find({});
    return NextResponse.json({ success: true, data: products });
  } catch (error: any) {
    return NextResponse.json(
      { success: false, error: error.message },
      { status: 500 }
    );
  }
}
