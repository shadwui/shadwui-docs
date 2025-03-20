import { NextResponse, NextRequest } from "next/server";
import { getToken } from "next-auth/jwt";

export async function middleware(request: NextRequest) {
  const token = await getToken({
    req: request,
    secret: process.env.NEXTAUTH_SECRET,
  });
  const url = request.nextUrl;

  // Extract role from token
  const role = token?.role || "user"; // Default to "user" if no role is found

  // 🛑 Prevent authenticated users from accessing auth pages
  if (token && ["/sign-in", "/sign-up", "/verify"].includes(url.pathname)) {
    return NextResponse.redirect(new URL("/", request.url));
  }

  // 🔒 Restrict dashboard access to authenticated users only
  if (!token && url.pathname.startsWith("/dashboard")) {
    return NextResponse.redirect(new URL("/sign-in", request.url));
  }

  // 🔒 Restrict admin pages (`/admin`) to users with the "admin" role
  if (url.pathname.startsWith("/admin") && role !== "admin") {
    return NextResponse.redirect(new URL("/", request.url)); // Redirect non-admin users to home
  }

  return NextResponse.next(); // Continue to the requested page
}

export const config = {
  matcher: [
    "/sign-in",
    "/sign-up",
    "/verify",
    "/dashboard/:path*",
    "/admin/:path*",
  ],
};
