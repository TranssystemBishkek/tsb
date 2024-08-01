"use client";
import {
  AboutUs,
  AppWrapper,
  Calculator,
  Carousel,
  Drawer,
  DrawerContent,
  Footer,
  Header,
  Services,
} from "@/components";
import { useTranslations } from "next-intl";
import { useState } from "react";

export default function Home() {
  return (
    <AppWrapper>
      <Carousel />
      <AboutUs />
      <Services />
      <Calculator />
      <Footer />
    </AppWrapper>
  );
}
