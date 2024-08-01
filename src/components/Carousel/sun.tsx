"use client";

import React, { useEffect, useState } from "react";
import { useMediaQuery } from "usehooks-ts";
import Image from "next/image";

interface SunProps {
  currentSlide: number;
}
type ElementPosition = {
  coordinates: { x: number; y: number };
};
type elementPositions = {
  mobile: ElementPosition[];
  tablet: ElementPosition[];
  desktop: ElementPosition[];
};

const sunPosition: elementPositions = {
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
  const isMobile = useMediaQuery("(max-width: 768px)");
  const isTablet = useMediaQuery("(min-width: 769px) and (max-width: 1024px)");
  const isDesktop = useMediaQuery("(min-width: 1025px)");
  const [screenSize, setSize] = useState<keyof elementPositions>("mobile");

  useEffect(() => {
    if (isMobile) {
      setSize("mobile");
    }

    if (isTablet) {
      setSize("tablet");
    }

    if (isDesktop) {
      setSize("desktop");
    }
  }, [isMobile, isTablet, isDesktop]);

  const { x, y } = sunPosition[screenSize][currentSlide].coordinates;
  return (
    <div
      style={{
        transform: `translate(${x}%,${y}%)`,
      }}
      className="the-sun max-w-[95px] h-auto"
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
