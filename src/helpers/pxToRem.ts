/**
 * Convert pixel values to rem units.
 *
 * @param {number} number - The pixel value to be converted.
 * @param {number} [baseNumber=16] - The base number for the conversion (default is 16 for the typical browser default font-size).
 * @returns {string} - Returns the value in rem units.
 */
function pxToRem(number: number, baseNumber: number = 16): string {
  return `${number / baseNumber}rem`;
}

export default pxToRem;
