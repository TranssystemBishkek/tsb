import { cn } from "@/lib";

interface DotsProps {
  currentSlide: number;
  handleNext: () => void;
}

export const Dots: React.FC<DotsProps> = ({ handleNext, currentSlide }) => {
  return (
    <div className="parallax-controllers">
      <div className="hidden lg:block ml-14">
        <button
          type="button"
          className={cn(
            " lg:flex py-4 px-3 mr-4 rounded-md transform rotate-180"
          )}
          onClick={handleNext}
        >
          <svg
            width="31"
            height="23"
            viewBox="0 0 31 23"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M29.384 11.4996L2.93676 11.4996"
              stroke="white"
              strokeWidth="2"
              strokeLinecap="square"
            />
            <path
              d="M11.546 20.903L2.03239 11.3894L11.546 1.87573"
              stroke="white"
              strokeWidth="2"
              strokeLinecap="square"
            />
          </svg>
        </button>
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
