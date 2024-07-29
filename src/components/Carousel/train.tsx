import React from "react";
import Image from "next/image";

interface TrainProps {
  currentSlide: number;
}

export const Train: React.FC<TrainProps> = ({ currentSlide }) => {
  return (
    <>
      <div className="rails z-30"></div>
      <div
        className={`the-train z-40 `}
        style={{
          transform: `translateX(${currentSlide}%)`,
        }}
      >
        <Image
          height={135}
          width={1970}
          src={"/assets/images/the-train.svg"}
          alt="it`s moving train"
        />
      </div>
    </>
  );
};
