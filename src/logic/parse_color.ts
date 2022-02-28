import Color from "color";

/**
 * returns a color object from a string
 * if passed value is invalid, returns null
 */
export const parseColor = (colorString: string): Color | null => {
  try {
    return Color(colorString);
  } catch (e) {
    return null;
  }
};

export const convertToStyle = (params: {
  textColor: Color | null;
  backgroundColor: Color | null;
}): { color: string; backgroundColor: string } => {
  const { textColor, backgroundColor } = params;
  return {
    color: textColor ? textColor.hex() : "",
    backgroundColor: backgroundColor ? backgroundColor.hex() : "",
  };
};
