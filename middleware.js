import { NextResponse } from "next/server";
import { jwtDecode } from "jwt-decode";
import { cookies } from "next/headers";

export function middleware(request) {
  const url = request.nextUrl.clone();
  const pathname = request.nextUrl.pathname;
  const cookieValue = cookies().get("cookie");
  if (
    pathname === "/" ||
    pathname === "/entredashboard" ||
    pathname === "/idealist" ||
    pathname === "/form" ||
    pathname === "/ideaview"
  ) {
    if (!cookieValue) {
      url.pathname = "/";
      return NextResponse.rewrite(url);
    } else {
      const authToken = cookieValue.value;
      const decodedToken = jwtDecode(
        authToken,
        "jkdajkdhakjhdkjahkjdahjkdhkajhadkjhkjdhjkh"
      );
      const userRole = decodedToken.role;
      if (userRole === "entrepreneur") {
        if (
          pathname === "/idealist" ||
          pathname === "/" ||
          pathname === "/login" ||
          pathname === "/signup" ||
          pathname === "/sign_enterpreneur" ||
          pathname === "/forgotpass" ||
          pathname === "/getstarted"
        ) {
          url.pathname = "/entredashboard";
          return NextResponse.rewrite(url);
        }
      }

      if (userRole === "investor") {
        if (
          pathname === "/entredashboard" ||
          pathname === "/form" ||
          pathname === "/" ||
          pathname === "/login" ||
          pathname === "/signup" ||
          pathname === "/sign_enterpreneur" ||
          pathname === "/forgotpass" ||
          pathname === "/getstarted"
        ){url.pathname = "/idealist";
        return NextResponse.rewrite(url);
      }
      }
    }
  }
  // if (pathname === '/entredashboard' || pathname === '/profile') {
  //    {
  //     const authToken = cookieValue.value;
  //     const decodedToken = jwtDecode(authToken,'jkdajkdhakjhdkjahkjdahjkdhkajhadkjhkjdhjkh');
  //     const userRole = decodedToken.role;
  //     if (userRole === 'entrepreneur') {
  //       url.pathname = '/entredashboard'
  //       return NextResponse.rewrite(url);
  //     }

  //     if (userRole === 'investor') {
  //       url.pathname = '/idealist'
  //       return NextResponse.redirect(url);
  //     }
  //   }
  // }

  return NextResponse.next();
}
