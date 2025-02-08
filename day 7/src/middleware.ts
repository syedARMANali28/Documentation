import { clerkMiddleware } from "@clerk/nextjs/server";
import { NextResponse } from "next/server";
import type { NextRequest, NextFetchEvent } from "next/server";

export default function middleware(req: NextRequest, event: NextFetchEvent) {
  // Skip Clerk authentication for Sanity Studio (/y)
  if (req.nextUrl.pathname.startsWith("/y")) {
    return NextResponse.next();
  }

  // Correctly apply Clerk middleware with both arguments
  return clerkMiddleware()(req, event);
}

export const config = {
  matcher: [
    // Exclude Next.js internals and static files
    '/((?!_next|[^?]*\\.(?:html?|css|js(?!on)|jpe?g|webp|png|gif|svg|ttf|woff2?|ico|csv|docx?|xlsx?|zip|webmanifest)).*)',

    // Include API routes
    '/(api|trpc)(.*)',

    // Explicitly include Sanity Studio
    '/y(.*)',
  ],
};
