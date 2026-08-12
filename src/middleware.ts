import NextAuth from "next-auth";
import { NextResponse } from "next/server";
import { authConfig } from "@/lib/auth.config";

// Uses the edge-safe base config only, not the full one in auth.ts, so
// this middleware never pulls in Prisma or bcrypt. It only needs to check
// whether a valid session cookie exists, not run the sign-in flow itself.
const { auth } = NextAuth(authConfig);

// Internal-only gate: every /leads route requires a signed-in AutoSutra
// team member. No dealer or client accounts exist in this system at all.
export default auth((req) => {
  const isLoggedIn = !!req.auth;
  const isLeadsRoute = req.nextUrl.pathname.startsWith("/leads");

  if (isLeadsRoute && !isLoggedIn) {
    const loginUrl = new URL("/login", req.nextUrl.origin);
    loginUrl.searchParams.set("from", req.nextUrl.pathname);
    return NextResponse.redirect(loginUrl);
  }

  return NextResponse.next();
});

export const config = {
  matcher: ["/leads/:path*"],
};
