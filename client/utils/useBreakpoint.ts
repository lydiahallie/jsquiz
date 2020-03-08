import { createBreakpoint } from "react-use";

const dimensions = {
  large: 992,
  medium: 500,
  small: 400
};

export const useBreakpoint = createBreakpoint(dimensions);
