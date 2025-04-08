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

export const isEmpty = (args: unknown): boolean => {
  return (
    args === '' ||
    args === null ||
    args === undefined ||
    (typeof args === 'object' && Object.keys(args).length === 0)
  );
};

export function formatJson(args: string) {
  try {
    return JSON.stringify(JSON.parse(args), null, 2);
  } catch {
    return args;
  }
}