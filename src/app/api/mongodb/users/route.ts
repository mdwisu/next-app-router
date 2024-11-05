import { NextResponse } from "next/server";
import dbConnect from "@/lib/mongodb/db";
import User from "@/lib/mongodb/models/User";

export async function GET() {
  if (process.env.NODE_ENV !== "production") {
    await dbConnect();
  }
  try {
    const users = await User.find({});
    return NextResponse.json({ success: true, data: users });
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
  } catch (error: any) {
    return NextResponse.json(
      { success: false, error: error.message },
      { status: 500 }
    );
  }
}
