"use client";
import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { useSwipeable } from "react-swipeable";
import { Sun } from "./sun";
import { Dots } from "./dots";
import { Train } from "./train";
import { cn } from "@/lib";
import { v4 as uuidv4 } from "uuid";
import { useTranslations } from "next-intl";

interface CarouselProps {}

const FRAME_LIMIT = 1000;

export const Carousel: React.FC<CarouselProps> = ({}) => {
  const t = useTranslations("Carousel");

  const slideImages = [
    {
      id: uuidv4(),
      url: "/assets/images/bg-cities.svg",
      alt: "cities",
      width: 1200,
      height: 615,
      priority: true,
    },
    {
      id: uuidv4(),
      url: "/assets/images/bg-mountains.svg",
      alt: "mountains",
      width: 1200,
      height: 615,
      priority: false,
    },
    {
      id: uuidv4(),
      url: "/assets/images/bg-villages.svg",
      alt: "villages",
      width: 1200,
      height: 615,
      priority: false,
    },
    {
      id: uuidv4(),
      url: "/assets/images/bg-sea.svg",
      alt: "sea",
      width: 1200,
      height: 615,
      priority: false,
    },
  ];

  const slideTitles = [
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
  const [currentIndex, setCurrentIndex] = useState(0);
  const [headlines, setHeadlines] = useState(slideTitles);
  const [images, setImages] = useState(slideImages);

  const handlers = useSwipeable({
    onSwipedLeft: () => handleNext(),
    trackMouse: true,
  });

  const handleNext = () => {
    if (currentIndex >= FRAME_LIMIT) {
      setCurrentIndex(0);
    }
    setCurrentIndex((prevIndex) =>
      prevIndex + 1 === images.length ? 0 : prevIndex + 1
    );
  };

  useEffect(() => {
    if (currentIndex === images.length - 2) {
      setImages((prev) => [...prev, ...images]);
      setHeadlines((prev) => [...prev, ...headlines]);
    }
  }, [images, currentIndex]);

  const computedIndex = currentIndex % slideImages.length;

  return (
    <section {...handlers} className="relative z-0 container mx-auto">
      <div className="relative overflow-hidden  box-border pb-5 pt-5 ">
        <div className="relative z-0 h-[615px]">
          <div
            style={{
              transform: `translateX(-${currentIndex * 100}%)`,
            }}
            className={cn("relative landscapes frames layer")}
          >
            {images.map((image, idx) => (
              <div key={image.id + idx} className="relative landscape frame">
                <Image
                  className="w-full h-auto"
                  height={image.height}
                  width={image.width}
                  src={image.url}
                  alt={image.alt}
                  priority={image.priority}
                />
              </div>
            ))}
          </div>

          <div
            style={{
              transform: `translateX(-${currentIndex * 100}%)`,
            }}
            className="relative z-[2] headlines frames layer h-[500px]"
          >
            {headlines.map((title, idx) => (
              <div key={title.id + idx} className="  headline frame ">
                <h1 className={title.className}>{title.title}</h1>
                <p>{title.subtitle}</p>
              </div>
            ))}
          </div>
          <div className="relative z-[1]">
            <Sun currentSlide={computedIndex} />
          </div>
          <div>
            <Train currentSlide={currentIndex} />
          </div>
        </div>
        <Dots currentSlide={computedIndex} handleNext={handleNext} />
      </div>
    </section>
  );
};
