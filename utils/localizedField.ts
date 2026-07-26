import { getLocale } from "next-intl/server";

type LocalizedRecord = Record<string, any>

export async function localizedField<T extends LocalizedRecord>(
    item: T | null | undefined,
    field: string,
    fallback = '-',
): Promise<string> {
        const locale = await getLocale();
    
    if (!item) return fallback

    if (typeof item[field] === 'string') {
        return item[field]
    }

    const val = item[locale]?.[field]
    if (val !== undefined && val !== null) return val
    const altLocale = locale === 'ar' ? 'en' : 'ar'
    const altVal = item[altLocale]?.[field]
    if (altVal !== undefined && altVal !== null) return altVal

    return fallback
}