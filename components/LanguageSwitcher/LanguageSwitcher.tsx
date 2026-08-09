'use client';
import { useRouter, usePathname } from 'next/navigation';
import { useState } from 'react';
import Cookies from "js-cookie"

import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
} from '@/components/ui/dropdown-menu';
import { ChevronDownIcon } from 'lucide-react';
import Image from 'next/image';

import flagAr from '@/assets/icons/saudia.png';
import flagEn from '@/assets/icons/english(3-5).svg';

const languages = [
  { code: 'ar', label: 'العربية', flag: flagAr },
  { code: 'en', label: 'English', flag: flagEn },
];

export function LanguageSwitcher() {
  const router = useRouter();
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  // Get current locale from pathname instead of useLocale()
  const segments = pathname.split('/').filter(Boolean);
  const currentLocale = languages.some(l => l.code === segments[0]) ? segments[0] : 'ar';

  const currentLanguage = languages.find(lang => lang.code === currentLocale);

  const handleLanguageChange = (newLocale: string) => {
    let newPathname: string;

    if (languages.some(l => l.code === segments[0])) {
      // Already has a locale prefix -> replace it
      const rest = segments.slice(1).join('/');
      newPathname = `/${newLocale}/${rest}`;
    } else {
      // No locale prefix -> add it
      newPathname = `/${newLocale}${pathname}`;
    }

    router.push(newPathname);
    Cookies.set("NEXT_LOCALE", newLocale);
    setIsOpen(false);
  };

  return (
    <DropdownMenu open={isOpen} onOpenChange={setIsOpen} modal={false}>
      <DropdownMenuTrigger className="flex items-center gap-1 cursor-pointer hover:text-primary duration-200 text-white">
        <Image
          src={currentLanguage?.flag}
          alt="flag"
          className="size-7 ml-2 object-contain rounded-xs"
        />
        <span className='hidden md:block'>
          {currentLanguage?.label}
        </span>
        <ChevronDownIcon className="size-3.5" />
      </DropdownMenuTrigger>
      <DropdownMenuContent align="center" className='mt-2'>
        <DropdownMenuGroup>
          {languages.map((lang) => (
            <DropdownMenuItem
              key={lang.code}
              onClick={() => handleLanguageChange(lang.code)}
            >
              <Image
                src={lang.flag}
                alt={`flag-${lang.code}`}
                className="size-7 ml-2 object-contain rounded-xs"
              />
              {lang.label}
            </DropdownMenuItem>
          ))}
        </DropdownMenuGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}