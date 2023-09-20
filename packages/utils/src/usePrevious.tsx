"use client";

import * as React from "react";

/**
 * The usePrevious function in TypeScript React returns the previous value of a given value.
 * @param {T} value - The `value` parameter is the current value that you want to track and get the
 * previous value of. It can be of any type, as indicated by the generic type `<T>`.
 * @returns The previous value of the input value.
 */
function usePrevious<T>(value: T) {
  // The ref object is a generic container whose current property is mutable ...
  // ... and can hold any value, similar to an instance property on a class
  const ref = React.useRef<T>(value);

  // Store current value in ref
  React.useEffect(() => {
    ref.current = value;
  }, [value]); // Only re-run if value changes

  // Return previous value (happens before update in useEffect above)
  return ref.current;
}

export { usePrevious };
