import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

const GONE_HTML = `<!doctype html>
<html lang="en">
<head>
<meta charset="utf-8" />
<title>410 Gone | FSR Recovery Group</title>
<meta name="robots" content="noindex" />
</head>
<body style="font-family: system-ui, sans-serif; max-width: 40rem; margin: 4rem auto; padding: 0 1.5rem; color: #0b2241;">
<h1>410 &mdash; This page no longer exists</h1>
<p>The page you were looking for has been permanently removed. It is not part of the FSR Recovery Group website.</p>
<p><a href="/" style="color: #dc2626; font-weight: bold;">Return to the FSR Recovery Group homepage</a></p>
</body>
</html>`;

/**
 * The legacy WordPress permalink pattern (?p=<numeric post id>) that
 * preceded this Next.js site has stray/spam-injected post IDs still
 * indexed by search engines. Since Next.js routing only matches on
 * pathname, "/?p=8524" would otherwise silently serve the homepage
 * with a 200 status. Return a genuine 410 Gone for any numeric ?p=
 * value so search engines can crawl and deindex it, without
 * hard-coding individual post IDs.
 */
export function proxy(request: NextRequest) {
  const p = request.nextUrl.searchParams.get("p");

  if (p !== null && /^\d+$/.test(p)) {
    return new NextResponse(GONE_HTML, {
      status: 410,
      headers: { "content-type": "text/html; charset=utf-8" },
    });
  }

  return NextResponse.next();
}

export const config = {
  matcher: [
    {
      source: "/",
      has: [{ type: "query", key: "p" }],
    },
  ],
};
