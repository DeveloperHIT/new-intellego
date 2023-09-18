/**
 * Generate a CSS linear-gradient property value.
 *
 * @param {string} color - The starting color of the gradient.
 * @param {string} colorState - The ending color of the gradient.
 * @param {number} [angle=195] - The angle (in degrees) of the gradient direction. Default is 195 degrees.
 * @returns {string} - Returns the CSS linear-gradient property value.
 */
function linearGradient(
  color: string,
  colorState: string,
  angle: number = 195,
): string {
  return `linear-gradient(${angle}deg, ${color}, ${colorState})`;
}

export default linearGradient;
