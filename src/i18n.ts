import { getRequestConfig } from "next-intl/server";
import { notFound } from "next/navigation";
import { Locale, locales } from "./lib";

// Load the translation file for the active locale
// on each request and make it available to our
// pages, components, etc.
export default getRequestConfig(async ({ locale }) => {
  if (!locales.includes(locale as Locale)) {
    return notFound();
  }

  const messages = (await import(`./lib/locales/${locale}.json`)).default;
  console.log(messages);
  return {
    messages,
  };
});
