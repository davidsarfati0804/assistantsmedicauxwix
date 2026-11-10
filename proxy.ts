import { createHash, timingSafeEqual } from 'node:crypto';
import { NextResponse, type NextRequest } from 'next/server';

function matches(value: string, expected: string) {
  return timingSafeEqual(createHash('sha256').update(value).digest(), createHash('sha256').update(expected).digest());
}

export function proxy(request: NextRequest) {
  const username = process.env.DASHBOARD_USERNAME;
  const password = process.env.DASHBOARD_PASSWORD;
  const headers = { 'X-Robots-Tag': 'noindex, nofollow', 'Cache-Control': 'no-store' };
  // Internal tools remain unavailable until dedicated access is configured.
  if (!username || !password) return new NextResponse(null, { status: 404, headers });
  const authorization = request.headers.get('authorization') || '';
  if (authorization.startsWith('Basic ')) {
    const decoded = Buffer.from(authorization.slice(6), 'base64').toString('utf8');
    const colon = decoded.indexOf(':');
    if (colon > -1 && matches(decoded.slice(0, colon), username) && matches(decoded.slice(colon + 1), password)) {
      // Browser's Basic authentication is reused by same-origin API requests.
      const origin = request.headers.get('origin');
      if (!['GET', 'HEAD', 'OPTIONS'].includes(request.method) && origin !== request.nextUrl.origin) return new NextResponse(null, { status: 403, headers });
      const response = NextResponse.next();
      for (const [key, value] of Object.entries(headers)) response.headers.set(key, value);
      return response;
    }
  }
  return new NextResponse(null, { status: 401, headers: { ...headers, 'WWW-Authenticate': 'Basic realm="Mesdocs administration", charset="UTF-8"' } });
}

export const config = { matcher: ['/dashboard/:path*', '/api/brevo/:path*'] };
