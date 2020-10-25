export const getShadowStyleByPlatform = (iosStyle, androidStyle) => {
  return Platform.OS === "ios" ? iosStyle : androidStyle;
};
