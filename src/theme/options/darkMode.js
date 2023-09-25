import { palette } from "../palette";
import { shadows } from "../shadows";
import { customShadows } from "../customShadows";

export function darkMode(mode) {
  return {
    palette: palette(mode),
    shadows: shadows(mode),
    customShadows: customShadows(mode),
  };
}
