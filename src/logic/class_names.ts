export const classNames = (classNames: Array<string | undefined | null>): string =>
  classNames.filter(Boolean).join(" ").trim();
