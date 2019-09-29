const normalize = (name: string): string =>
  name
    .toLowerCase()
    .trim()
    .normalize('NFD') // decompose: è => e`
    .replace(/[\u0300-\u036f]/g, '') // remove special characters
    .replace(/[^a-zA-Z ]/g, '') // remove non-numbers and non-letters
    .replace(/\s{2,}/g, ' '); // remove extra spaces

export const nicknames = (name: string) => {
  let suggestions: string[] = [];
  const normalizedName = normalize(name);
  const parts: string[] = normalizedName.split(' ');
  const firstAndLastName = [parts[0], parts[parts.length - 1]];
  if (firstAndLastName.includes('')) {
    suggestions = [];
  } else {
    const firstNameFirstChar = firstAndLastName[0][0];
    const lastNameFirst5Chars = firstAndLastName[1].substring(0, 5);
    const firstNameFirst3Chars = firstAndLastName[0].substring(0, 3);
    const lastNameFirst3Chars = firstAndLastName[1].substring(0, 3);
    suggestions = Array.from(
      new Set(
        [
          firstNameFirstChar + lastNameFirst5Chars,
          lastNameFirst5Chars + firstNameFirstChar,
          firstNameFirst3Chars + lastNameFirst3Chars,
          lastNameFirst3Chars + firstNameFirst3Chars,
        ].filter(suggestion => suggestion.length >= 3)
      ).values()
    );
  }
  return suggestions;
};

export default nicknames;
