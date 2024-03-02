import { NextResponse } from 'next/server';
import jwtDecode from 'jwt-decode';
import { cookies } from 'next/cookie';

export function middleware(request) {
  console.log("Middleware invoked");
  const cookie = cookies(request.headers).get('cookie');

  if (!cookie) {
    return NextResponse.redirect('/');
  } else {
    const authToken = cookie.authToken; // Assuming authToken is the name of the cookie
    const decodedToken = jwtDecode(authToken);
    const userRole = decodedToken.role;
    if (userRole !== 'entrepreneur') {
      return NextResponse.redirect('/unauthorized');
    }
  }
  return NextResponse.next();
}

export const config = {
  matcher: '/',
};
