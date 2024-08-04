import {
  AboutUs,
  AppShell,
  Calculator,
  Carousel,
  Footer,
  Services,
} from "@/components";
import { metaData } from "@/lib/contents";
import { Metadata } from "next";
import { unstable_setRequestLocale } from "next-intl/server";

export const metadata: Metadata = {
  title: metaData.title,
  description: metaData.description,
  openGraph: {
    type: "website",
    url: metaData.url,
    title: metaData.title,
    description: metaData.description,
    siteName: metaData.title,
    images: [
      {
        url: `${metaData.url}/assets/images/logo-hd.png`,
        alt: "Company logo",
        width: 1200,
        height: 630,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: metaData.url,
    title: metaData.title,
    description: metaData.description,
    creator: metaData.title,
    images: {
      url: `${metaData.url}/assets/images/logo-hd.png`,
      alt: "Company logo",
    },
  },
};

export default function Home({
  params: { locale },
}: {
  params: { locale: string };
}) {
  unstable_setRequestLocale(locale);
  return (
    <AppShell>
      <Carousel />
      <AboutUs />
      <Services />
      <Calculator />
      <Footer />
    </AppShell>
  );
}
