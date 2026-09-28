export const sizes = {
  mobile: 0,
  tabletVertical: 600,
  tabletHorizontal: 900,
  desktop: 1250,
  bigScreen: 1650,
};

const mediaQueries = {
  mobile: `(min-width: ${sizes.mobile}px)`,
  tabletVertical: `(min-width: ${sizes.tabletVertical}px)`,
  tabletHorizontal: `(min-width: ${sizes.tabletHorizontal}px)`,
  desktop: `(min-width: ${sizes.desktop}px)`,
  bigScreen: `(min-width: ${sizes.bigScreen}px)`,
};

export default mediaQueries;
