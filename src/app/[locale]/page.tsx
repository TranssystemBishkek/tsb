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

export const metadata: Metadata = {
  title: metaData.title,
  description: metaData.description,
  openGraph: {
    type: "website",
    url: "https://tsb.kg",
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
};

export default function Home() {
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
