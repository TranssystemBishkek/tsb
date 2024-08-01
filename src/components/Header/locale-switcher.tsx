"use client";

import {
  cn,
  Locale,
  localeNames,
  locales,
  usePathname,
  useRouter,
} from "@/lib";

interface LocalSwitcherProps {
  locale: Locale;
  shouldHideOnMobileView?: boolean;
}

import React, { FC, useState } from "react";

export const LocaleSwitcher: FC<LocalSwitcherProps> = ({
  locale,
  shouldHideOnMobileView = false,
}) => {
  const [isOpen, setIsOpen] = useState(false);

  const pathname = usePathname();
  const router = useRouter();

  const withoutCurrentLocale = locales.filter((loc) => loc !== locale);

  const handleToggle = () => setIsOpen(!isOpen);
  const handleSelect = (locale: string) => {
    setIsOpen(false);
    router.replace(pathname, { locale });
  };

  return (
    <div className="relative inline-block text-left ">
      <div className={cn({ "hidden lg:block": shouldHideOnMobileView })}>
        <button
          type="button"
          className="inline-flex items-center px-4 py-2 text-sm font-medium text-gray-700 bg-white hover:bg-blue-600 border border-gray-300 rounded-md shadow-sm  focus:outline-none "
          onClick={handleToggle}
        >
          {localeNames[locale]}
        </button>

        {isOpen && (
          <div className="absolute right-0 w-18 mt-2 origin-top-rightborder rounded bg-white focus:outline-none">
            <div className="py-1">
              {withoutCurrentLocale.map((loc) => (
                <button
                  key={loc}
                  onClick={() => handleSelect(loc)}
                  className="block w-full px-4 py-2 mt-1 text-sm hover:font-bold text-white-700 hover:bg-gray-100 hover:text-blue-700 focus:outline-none"
                >
                  {localeNames[loc]}
                </button>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
