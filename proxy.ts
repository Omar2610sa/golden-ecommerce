import createMiddleware from 'next-intl/middleware'
import { NextRequest, NextResponse } from 'next/server'
import { v4 as uuidv4 } from 'uuid'
import { routing } from './i18n/routing'

const protectedRoutes = ['/profile', '/CheckOut']

const intlMiddleware = createMiddleware(routing)

export default function middleware(request: NextRequest) {
    const { pathname } = request.nextUrl

    const pathWithoutLocale = pathname.replace(/^\/(ar|en)(?=\/|$)/, '') || '/'

    const isProtected = protectedRoutes.some(route =>
        pathWithoutLocale.startsWith(route)
    )
    const token = request.cookies.get('token_golden')?.value

    if (isProtected && !token) {
        return NextResponse.redirect(new URL('/', request.url))
    }

    const response = intlMiddleware(request)

    const guestToken = request.cookies.get('guest_token')?.value
    if (!guestToken) {
        response.cookies.set('guest_token', uuidv4())
    }

    return response
}

export const config = {
    matcher: [
        '/',
        '/(ar|en)/:path*',
        '/((?!_next|favicon.ico|api).*)',
    ],
}