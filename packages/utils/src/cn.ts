import { clsx } from "clsx";
import type { ClassValue } from "clsx";

import { twMerge } from "tailwind-merge";

/**
 * The `cn` function is a TypeScript function that merges multiple class values into a single string.
 * @param {ClassValue[]} inputs - The `inputs` parameter is a rest parameter that allows you to pass in
 * multiple arguments of type `ClassValue`. The `ClassValue` type represents a class name or an object
 * with class names as keys and boolean values as values.
 * @returns The `cn` function is returning the result of calling the `twMerge` function with the result
 * of calling the `clsx` function with the `inputs` array as its argument.
 */
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
