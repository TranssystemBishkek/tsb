import { Carousel } from "@/components";
import { v4 as uuidv4 } from "uuid";

export default function Home() {
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
      title: "Мы с Вами более 20 лет!",
      className: "title primary",
      subtitle:
        "Мы стремимся помочь нашему большому миру стать немного меньше и роднее за счет путей сообщения.",
    },
    {
      id: uuidv4(),
      title: "Индивидуальный подход к клиенту",
      className: "title secondary",
      subtitle:
        "Понимая, что каждый бизнес ведется по-своему, мы оцениваем Ваши требования и нужды и предлагаем индивидуальные решения.",
    },
    {
      id: uuidv4(),
      title: "Гибкие тарифные ставки",
      className: "title secondary",
      subtitle:
        "Тарифные ставки меняются, в зависимости от того, как долго и прочно мы с Вами сотрудничаем.",
    },
    {
      id: uuidv4(),
      title: "Перспективные схемы перевозки грузов",
      className: "title secondary",
      subtitle:
        "Мы поможем разработать эффективные и удобные направления и схемы транспортировки Ваших грузов.",
    },
  ];
  return <Carousel slides={images} titles={titles} />;
}
