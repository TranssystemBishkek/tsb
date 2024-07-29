import {
  AboutUs,
  Calculator,
  Carousel,
  Footer,
  Header,
  Services,
} from "@/components";
import { v4 as uuidv4 } from "uuid";
import { useTranslations } from "next-intl";
export default function Home() {
  const t = useTranslations("Carousel");

  const images = [
    {
      id: uuidv4(),
      url: "/assets/images/bg-cities.svg",
      alt: "cities",
      width: 1200,
      height: 615,
    },
    {
      id: uuidv4(),
      url: "/assets/images/bg-mountains.svg",
      alt: "mountains",
      width: 1200,
      height: 615,
    },
    {
      id: uuidv4(),
      url: "/assets/images/bg-villages.svg",
      alt: "villages",
      width: 1200,
      height: 615,
    },
    {
      id: uuidv4(),
      url: "/assets/images/bg-sea.svg",
      alt: "sea",
      width: 1200,
      height: 615,
    },
  ];

  const titles = [
    {
      id: uuidv4(),
      title: t("title0"),
      subtitle: t("subtitle0"),
      className: "title primary",
    },
    {
      id: uuidv4(),
      title: t("title1"),
      subtitle: t("subtitle1"),
      className: "title secondary",
    },
    {
      id: uuidv4(),
      title: t("title2"),
      subtitle: t("subtitle2"),
      className: "title secondary",
    },
    {
      id: uuidv4(),
      title: t("title3"),
      subtitle: t("subtitle3"),
      className: "title secondary",
    },
  ];
  return (
    <div>
      <Header />
      <Carousel slides={images} titles={titles} />
      <AboutUs />
      <Services />
      <Calculator />
      <Footer />
    </div>
  );
}
