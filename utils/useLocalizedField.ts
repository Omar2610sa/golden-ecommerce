'use client'

import { useLocale } from "next-intl";
import { useCallback } from "react";

type LocalizedRecord = Record<string, any>

export function useLocalizedField() {
    const locale = useLocale();

    const localizedField = useCallback(
        <T extends LocalizedRecord>(
            item: T | null | undefined,
            field: string,
            fallback = '-',
        ): string => {
            if (!item) return fallback;

            if (typeof item[field] === 'string') {
                return item[field];
            }

            const val = item[locale]?.[field];
            if (val !== undefined && val !== null) return val;

            const altLocale = locale === 'ar' ? 'en' : 'ar';
            const altVal = item[altLocale]?.[field];
            if (altVal !== undefined && altVal !== null) return altVal;

            return fallback;
        },
        [locale]
    );

    return localizedField;
}