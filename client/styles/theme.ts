import dimensions from "./dimensions";
import colors from "./colors";
import fonts from "./fonts";

const theme = (breakpoint: string) => ({
  dim: { ...dimensions.default, ...dimensions[breakpoint] },
  colors,
  fonts: { ...dimensions.default, ...fonts[breakpoint] }
});

export default theme;
