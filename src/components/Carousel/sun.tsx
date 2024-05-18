"use client";

import React from "react";
import { useMediaQuery } from "usehooks-ts";
import Image from "next/image";

interface SunProps {
  currentSlide: number;
}

const sunPosition: {
  small: { x: number; y: number }[];
  medium: { x: number; y: number }[];
  large: { x: number; y: number }[];
} = {
  small: [
    {
      x: 110,
      y: 250,
    },
    {
      x: 190,
      y: 225,
    },
    {
      x: 210,
      y: 245,
    },
    {
      x: 280,
      y: 245,
    },
  ],
  medium: [
    {
      x: 400,
      y: 40,
    },
    {
      x: 580,
      y: 25,
    },
    {
      x: 650,
      y: 40,
    },
    {
      x: 780,
      y: 50,
    },
  ],
  large: [
    {
      x: 650,
      y: 130,
    },
    {
      x: 820,
      y: 50,
    },
    {
      x: 900,
      y: 40,
    },
    {
      x: 1000,
      y: 70,
    },
  ],
};

export const Sun: React.FC<SunProps> = ({ currentSlide }) => {
  const screenSize = useMediaQuery("(min-width: 768px)") ? "large" : "small";

  const currentPosition = sunPosition[screenSize][currentSlide];
  return (
    <div
      style={{
        transform: `translate(${currentPosition.x}%,${currentPosition.y}%)`,
      }}
      className="the-sun z-20"
    >
      <Image
        className="w-full h-auto"
        height={95}
        width={95}
        src={"/assets/images/the-sun.png"}
        alt="the sun"
      />
    </div>
  );
};
