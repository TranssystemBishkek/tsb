"use client";

import { Locale, localeNames, locales, usePathname, useRouter } from "@/lib";
import { Menu, MenuButton, MenuItem, MenuItems } from "@headlessui/react";

interface LocalSwitcherProps {
  locale: Locale;
}

export const LocaleSwitcher: React.FC<LocalSwitcherProps> = ({ locale }) => {
  const pathname = usePathname();
  const router = useRouter();

  const changeLocale = (locale: string) => {
    router.replace(pathname, { locale });
  };

  const withoutCurrentLocale = locales.filter((loc) => loc !== locale);

  return (
    <>
      <Menu as={"a"}>
        <MenuButton className="p-1 !rounded-[4px]">
          {localeNames[locale]}
        </MenuButton>
        <MenuItems
          anchor="bottom"
          className="mt-1 p-2 transition duration-500 bg-[#F1F1F1] rounded-[4px]"
        >
          {withoutCurrentLocale.map((loc) => (
            <MenuItem key={loc}>
              <a
                className="block data-[focus]:bg-blue-100"
                onClick={() => changeLocale(loc)}
              >
                {localeNames[loc]}
              </a>
            </MenuItem>
          ))}
        </MenuItems>
      </Menu>
    </>
  );
};
