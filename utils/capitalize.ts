export const capitalize = (str: string) => {
  const firstLetter = str[0].toUpperCase();
  const restWord = str.slice(1).toLowerCase();

  return `${firstLetter}${restWord}`;
};
