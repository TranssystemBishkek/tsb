import { cn } from "@/lib";
import React from "react";

interface DotsProps {
  currentSlide: number;
  handleNext: () => void;
}

export const Dots: React.FC<DotsProps> = ({ handleNext, currentSlide }) => {
  return (
    <div className="parallax-controllers z-40">
      <div className="button-controller">
        <button type="button" className="prev-btn invisible" />
        <button type="button" onClick={handleNext} className="next-btn" />
      </div>

      <div className="radio-controller">
        <div>
          <button
            type="button"
            className={cn("radio-btn ", currentSlide === 0 ? "active" : "")}
          />
        </div>
        <div>
          <button
            type="button"
            className={cn("radio-btn ", currentSlide === 1 ? "active" : "")}
          />
        </div>
        <div>
          <button
            type="button"
            className={cn("radio-btn ", currentSlide === 2 ? "active" : "")}
          />
        </div>
        <div>
          <button
            type="button"
            className={cn(
              "radio-btn remove-line",
              currentSlide === 3 ? "active" : ""
            )}
          />
        </div>
      </div>
    </div>
  );
};
