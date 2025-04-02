export const createLinearGradient = (
  colors: string[],
  angle: number,
): string => {
  if (colors.length < 2) {
    throw new Error(
      'At least two colors are required to create a linear gradient.',
    );
  }

  const gradientColors = colors.join(', ');
  return `linear-gradient(${angle}deg, ${gradientColors})`;
};
