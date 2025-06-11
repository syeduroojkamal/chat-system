import { clerkMiddleware, createRouteMatcher } from "@clerk/nextjs/server";
import { NextResponse } from "next/server";

const isPublicRoute = createRouteMatcher(["/welcome(.*)"]);

export default clerkMiddleware(async (auth, req) => {
  const session = await auth();

  if (!isPublicRoute(req)) {
    if (!session.userId) {
      const url = req.nextUrl.clone();
      url.pathname = "/welcome";
      return NextResponse.redirect(url);
    }
  }

  return NextResponse.next();
});

export const config = {
  matcher: [
    // Skip Next.js internals and all static files, unless found in search params
    "/((?!_next|[^?]*\\.(?:html?|css|js(?!on)|jpe?g|webp|png|gif|svg|ttf|woff2?|ico|csv|docx?|xlsx?|zip|webmanifest|mp4|webm)).*)",
    // Always run for API routes
    "/(api|trpc)(.*)",
  ],
};
