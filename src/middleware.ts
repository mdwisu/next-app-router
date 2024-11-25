import { NextResponse } from "next/server";
import withAuth from "./middlewares/withAuth";

// This function can be marked `async` if using `await` inside
export function mainMiddleware() {
  const res = NextResponse.next();
  return res;
}

export default withAuth(mainMiddleware, [
  "/dashboard",
  "/profile",
  "/login",
  "/register",
]);
