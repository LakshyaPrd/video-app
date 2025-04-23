import { getToken } from "next-auth/jwt";
import { NextResponse } from "next/server";

export async function middleware(req){
    const token = getToken({req, secret: process.env.NEXTAUTH_SECRET});
    //if user try to go to user-auth page and already logged in then redirect to home page
    if(req.nextUrl.pathname === '/user-auth' && token){
        return NextResponse.redirect(new URL('/', req.url));
    }
    //if user is not logged in and trying to access any page other than user-auth page then redirect to user-auth page
    if(!token && req.nextUrl.pathname !== '/user-auth'){
        return NextResponse.redirect(new URL('/user-auth', req.url));
    }

    return NextResponse.next(); 

}
export const config = {
    matcher: ['/','/user-auth']
}