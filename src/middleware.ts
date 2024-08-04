// middleware.ts

import createMiddleware from "next-intl/middleware";
import { locales } from "./lib";

export default createMiddleware({
  defaultLocale: "ru",
  locales,
  localeDetection: true,
});

export const config = {
  matcher: ["/((?!api|_next|_vercel|.*\\..*).*)"],
};
