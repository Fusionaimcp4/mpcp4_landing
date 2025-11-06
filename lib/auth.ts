import { NextRequest } from 'next/server';

export function checkAuth(request: NextRequest): boolean {
  const authHeader = request.headers.get('authorization');
  
  if (!authHeader?.startsWith('Basic ')) {
    return false;
  }

  const base64Credentials = authHeader.split(' ')[1];
  const credentials = Buffer.from(base64Credentials, 'base64').toString('utf-8');
  const [username, password] = credentials.split(':');

  const validUsername = process.env.PAGE_AUTH_USER || 'admin';
  const validPassword = process.env.PAGE_AUTH_PASS || 'pass';

  return username === validUsername && password === validPassword;
}

export function unauthorizedResponse() {
  return new Response('Unauthorized', {
    status: 401,
    headers: {
      'WWW-Authenticate': 'Basic realm="Admin Area"',
    },
  });
}

