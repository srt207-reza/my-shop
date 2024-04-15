import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

export function middleware(request: NextRequest) {
  const allCookies = request.cookies.getAll()
 
  if(!allCookies?.[2]?.value && request.url === "http://localhost:3000/store"){
    return NextResponse.redirect(new URL("/",request.url))
  }
//  console.log(cookie?.userToken);
  return NextResponse.next()
}




