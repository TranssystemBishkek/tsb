import { useMediaQuery } from "usehooks-ts";

type ElementPosition = {
  coordinates: { x: number; y: number };
};
export type ElementPositionWithoutY = {
  coordinates: Omit<ElementPosition["coordinates"], "y">;
};

export type ElementPositionsWithoutY = {
  mobile: ElementPositionWithoutY[];
  tablet: ElementPositionWithoutY[];
  desktop: ElementPositionWithoutY[];
};
type elementPositions =
  | {
      mobile: ElementPosition[];
      tablet: ElementPosition[];
      desktop: ElementPosition[];
    }
  | {
      mobile: ElementPositionWithoutY[];
      tablet: ElementPositionWithoutY[];
      desktop: ElementPositionWithoutY[];
    };

export const useElementPosition = (
  positions: elementPositions,
  currentSlide?: number
) => {
  const isMobile = useMediaQuery("(max-width: 768px)");
  const isTablet = useMediaQuery("(min-width: 769px) and (max-width: 1024px)");
  const isDesktop = useMediaQuery("(min-width: 1025px)");
  //@ts-ignore
  let screenSize: keyof elementPositions = "";
  if (isMobile) {
    screenSize = "mobile";
  }

  if (isTablet) {
    screenSize = "tablet";
  }

  if (isDesktop) {
    screenSize = "desktop";
  }

  if (!currentSlide) {
    currentSlide = 0;
  }

  const currentPosition = positions[screenSize][currentSlide].coordinates;
  if ("y" in currentPosition) {
    return { x: currentPosition.x, y: currentPosition.y };
  } else {
    return { x: currentPosition.x };
  }
};
