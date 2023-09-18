import chroma from "chroma-js";

/**
 * Convert a HEX color value to an RGB string.
 *
 * @param {string} color - The HEX color value to be converted.
 * @returns {string} - Returns the color value in the "R, G, B" format.
 */
function hexToRgb(color: string): string {
  return chroma(color).rgb().join(", ");
}

export default hexToRgb;
