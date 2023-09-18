import colors from "@/theme/base/colors";
import pxToRem from "@/helpers/pxToRem";

const { dark } = colors;

const fontFamilyProperties = {
  fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
  fontFamily2: '"Roboto Slab", sans-serif',
};

const fontWeightProperties = {
  fontWeightLighter: 100,
  fontWeightLight: 300,
  fontWeightRegular: 400,
  fontWeightMedium: 600,
  fontWeightBold: 700,
};

const fontSizeProperties = {
  fontSizeXXS: pxToRem(10.4),
  fontSizeXS: pxToRem(12),
  fontSizeSM: pxToRem(14),
  fontSizeMD: pxToRem(16),
  fontSizeLG: pxToRem(18),
  fontSizeXL: pxToRem(20),
  fontSize2XL: pxToRem(24),
  fontSize3XL: pxToRem(30),
};

const baseHeadingProperties = {
  color: dark.main,
  fontWeight: fontWeightProperties.fontWeightBold,
};

const typography = {
  fontFamily: fontFamilyProperties.fontFamily,

  body1: {
    fontFamily: fontFamilyProperties.fontFamily,
    fontSize: fontSizeProperties.fontSizeXL,
    fontWeight: fontWeightProperties.fontWeightRegular,
    lineHeight: 1.625,
  },

  h1: {
    fontFamily: fontFamilyProperties.fontFamily2,
    fontSize: pxToRem(48),
    lineHeight: 1.25,
    ...baseHeadingProperties,
  },

  size: {
    xxs: fontSizeProperties.fontSizeXXS,
    xs: fontSizeProperties.fontSizeXS,
    sm: fontSizeProperties.fontSizeSM,
    md: fontSizeProperties.fontSizeMD,
    lg: fontSizeProperties.fontSizeLG,
    xl: fontSizeProperties.fontSizeXL,
    "2xl": fontSizeProperties.fontSize2XL,
    "3xl": fontSizeProperties.fontSize3XL,
  },
};

export default typography;
