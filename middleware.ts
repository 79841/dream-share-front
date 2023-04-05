import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

const passingPath = ["/login", "/signup"];
const homePath = ["/"];
const checkingPath = ["/diary"];

export function middleware(req: NextRequest) {
  const { pathname, origin } = req.nextUrl;
  const token = req.cookies.get("Authorization")?.value;

  if (token && passingPath.includes(pathname)) {
    return NextResponse.redirect(origin);
  }

  if (
    !token &&
    (homePath.includes(pathname) ||
      checkingPath.some((path) => pathname.startsWith(path)))
  ) {
    return NextResponse.redirect(`${origin}/login`);
  }

  return NextResponse.next();
}
