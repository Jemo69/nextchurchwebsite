import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { jwtVerify } from "jose";

export async function middleware(request: NextRequest) {
  const token = request.cookies.get("auth")?.value;

  if (
    request.nextUrl.pathname.startsWith("/admin") &&
    !request.nextUrl.pathname.startsWith("/admin/register") &&
    !request.nextUrl.pathname.startsWith("/admin/login")
  ) {
    if (!token) {
      return NextResponse.redirect(new URL("/admin/login", request.url));
    }

    try {
    //   const secret = new TextEncoder().encode(process.env.JWT_SECRET!);
      const secret = new TextEncoder().encode("e3ff5f077839c1331b1d893a728246685cb7dba9e3a77bffe7d52eaccf660988");
      await jwtVerify(token, secret);
      return NextResponse.next();
    } catch (error) {
      return NextResponse.redirect(new URL("/admin/login", request.url));
    }
  }

  return NextResponse.next();
}

export const config = {
  matcher: "/admin/:path*",
};
