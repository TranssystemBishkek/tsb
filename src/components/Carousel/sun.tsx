"use client";

import React from "react";
import { useMediaQuery } from "usehooks-ts";
import Image from "next/image";
import { useElementPosition } from "@/lib";

interface SunProps {
  currentSlide: number;
}

const sunPosition = {
  mobile: [
    {
      coordinates: {
        x: 110,
        y: 250,
      },
    },
    {
      coordinates: {
        x: 190,
        y: 225,
      },
    },
    {
      coordinates: {
        x: 210,
        y: 245,
      },
    },
    {
      coordinates: {
        x: 280,
        y: 245,
      },
    },
  ],
  tablet: [
    {
      coordinates: {
        x: 400,
        y: 40,
      },
    },
    {
      coordinates: {
        x: 580,
        y: 25,
      },
    },
    {
      coordinates: {
        x: 650,
        y: 40,
      },
    },
    {
      coordinates: {
        x: 780,
        y: 50,
      },
    },
  ],
  desktop: [
    {
      coordinates: {
        x: 650,
        y: 130,
      },
    },
    {
      coordinates: {
        x: 820,
        y: 50,
      },
    },
    {
      coordinates: {
        x: 900,
        y: 40,
      },
    },
    {
      coordinates: {
        x: 1000,
        y: 70,
      },
    },
  ],
};

export const Sun: React.FC<SunProps> = ({ currentSlide }) => {
  const currentPosition = useElementPosition(sunPosition, currentSlide);

  return (
    <div
      style={{
        transform: `translate(${currentPosition.x}%,${currentPosition.y}%)`,
      }}
      className="the-sun z-20 max-w-[95px] h-auto"
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
