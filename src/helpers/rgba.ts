import hexToRgb from "./hexToRgb";

/**
 * Convert a HEX color value to an RGBA string.
 *
 * @param {string} color - The HEX color value to be converted.
 * @param {number} opacity - The opacity value for the RGBA color.
 * @returns {string} - Returns the color value in the "rgba(R, G, B, opacity)" format.
 */
function rgba(color: string, opacity: number): string {
  return `rgba(${hexToRgb(color)}, ${opacity})`;
}

export default rgba;
