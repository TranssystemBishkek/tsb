"use client";
import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { useSwipeable } from "react-swipeable";
import { Sun } from "./sun";
import { Dots } from "./dots";
import { Train } from "./train";
import { cn } from "@/lib";

interface CarouselProps {
  slides: {
    id: string;
    url: string;
    alt: string;
    width: number;
    height: number;
  }[];
  titles: {
    id: string;
    title: string;
    subtitle: string;
    className: string;
  }[];
}

export const Carousel: React.FC<CarouselProps> = ({ slides, titles }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [headlines, setHeadlines] = useState(titles);
  const [images, setImages] = useState(slides);

  const handlers = useSwipeable({
    onSwipedLeft: () => handleNext(),
    trackMouse: true,
  });

  const handleNext = () => {
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

  const computedIndex = currentIndex % slides.length;

  return (
    <section {...handlers} className="container mx-auto">
      <div className="overflow-hidden relative box-border pb-5 pt-5 ">
        <div className="h-[615px] z-10">
          <div
            style={{
              transform: `translateX(-${currentIndex * 100}%)`,
            }}
            className={cn("landscapes frames layer z-20")}
          >
            {images.map((image, idx) => (
              <div key={image.id + idx} className="landscape frame">
                <Image
                  className="w-full h-auto"
                  height={image.height}
                  width={image.width}
                  src={image.url}
                  alt={image.alt}
                />
              </div>
            ))}
          </div>

          <div
            style={{
              transform: `translateX(-${currentIndex * 100}%)`,
            }}
            className="headlines frames layer h-[500px] z-50"
          >
            {headlines.map((title, idx) => (
              <div key={title.id + idx} className="headline frame ">
                <h1 className={title.className}>{title.title}</h1>
                <p>{title.subtitle}</p>
              </div>
            ))}
          </div>
          <Sun currentSlide={computedIndex} />
          <Train currentSlide={currentIndex} />
        </div>
        <Dots currentSlide={computedIndex} handleNext={handleNext} />
      </div>
    </section>
  );
};
