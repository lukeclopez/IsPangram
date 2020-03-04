const alphabet = "abcdefghijklmnopqrstuvwxyz".split("");

export const findMissingLetters = sentence =>
  alphabet.filter(letter => !sentence.toLowerCase().includes(letter));

export const isPangram = sentence => findMissingLetters(sentence).length === 0;
