import {
  AboutUs,
  AppShell,
  Carousel,
  ContactUs,
  Footer,
  Services,
} from "@/components";
import { metaData } from "@/lib/contents";
import { Metadata } from "next";
import { unstable_setRequestLocale } from "next-intl/server";

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
      <ContactUs />
      <Footer />
    </AppShell>
  );
}
