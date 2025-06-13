const ASPECT_RATIO = 3 / 4;

export const SliderConfig = {
  calcTransforms({
    imageHeight,
    imageWidth,
    count,
    isTablet,
    isPhone,
    isDesctop,
  }: {
    windowWidth: number;
    windowHeight: number;
    imageWidth: number;
    imageHeight: number;
    count: number;
    isTablet: boolean;
    isPhone: boolean;
    isDesctop: boolean;
  }) {
    let columns = 6;
    let paddingX = 90;
    let paddingY = 80;

    if (isDesctop) {
      columns = 5;
      paddingX = 100;
      paddingY = 80;
    }

    if (isTablet) {
      columns = 3;
      paddingX = 50;
      paddingY = 10;
    }
    if (isPhone) {
      columns = 2;
      paddingX = 20;
      paddingY = 10;
    }

    const rows = Math.ceil(count / columns);
    const transforms = [];

    const totalWidth = columns * imageWidth + (columns - 1) * paddingX;
    const totalHeight = rows * imageHeight + (rows - 1) * paddingY;

    const startX = -totalWidth / 2 + imageWidth / 2;
    const startY = -totalHeight / 2 + imageHeight / 2;

    for (let i = 0; i < count; i++) {
      const col = i % columns;
      const row = Math.floor(i / columns);

      const x = startX + col * (imageWidth + paddingX);
      const y = startY + row * (imageHeight + paddingY);

      transforms.push({
        x,
        y,
        width: imageWidth,
        height: imageHeight,
      });
    }

    return transforms;
  },

  clampWidth({
    windowWidth,
    maxWidth,
    minWidth,
  }: {
    windowWidth: number;
    minWidth: number;
    maxWidth: number;
  }) {
    const ratio = 0.5;
    return Math.ceil(
      Math.max(Math.min(maxWidth, windowWidth * ratio), minWidth)
    );
  },

  aspectRatio(width: number) {
    return Math.ceil(width / ASPECT_RATIO);
  },
};
