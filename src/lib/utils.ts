import clsx, { ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const cleanPhoneNumber = (number: string) => {
  return number.replace(/[^\d+]/g, "");
};
