import { NextRequest, NextResponse } from 'next/server'
import { v4 as uuidv4 } from 'uuid'

const protectedRoutes = ['/profile', '/CheckOut']


export function middleware(request: NextRequest) {
    const { pathname } = request.nextUrl

    const isProtected = protectedRoutes.some(route => pathname.startsWith(route))
    const token = request.cookies.get('token_golden')?.value

    if (isProtected && !token) {
        return NextResponse.redirect(new URL('/', request.url))
    }

    // // Remove /ar prefix -> /
    // if (pathname.startsWith('/ar')) {
    //     const segments = pathname.split('/').filter(Boolean)
    //     const [, ...rest] = segments
    //     const cleanedPath = '/' + rest.join('/')
    //     const url = new URL(cleanedPath, request.url)
    //     return NextResponse.redirect(url)
    // }

    const response = NextResponse.next()

    // Set locale cookie
    // const currentLocale = (request.cookies.get('NEXT_LOCALE')?.value || 'ar') as Lang
    // response.cookies.set('NEXT_LOCALE', currentLocale)

    // Set guest token if not present
    const guestToken = request.cookies.get('guest_token')?.value
    if (!guestToken) {
        response.cookies.set('guest_token', uuidv4())
    }

    return response
}

export const config = {
    matcher: ['/((?!_next|favicon.ico|api).*)'],
}