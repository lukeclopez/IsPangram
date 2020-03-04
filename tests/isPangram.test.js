import { findMissingLetters, isPangram } from "../src/isPangram";

const pangram = "Sphinx of black quartz, judge my vow.";

describe("findMissingLetters", () => {
  it("shouldn't find any missing letters in a pangram", () => {
    const result = findMissingLetters(pangram);
    expect(result).toHaveLength(0);
  });

  it("should return `z` if missing letter `z`", () => {
    const missingZ = pangram.replace("z", "");
    const onlyMissingLetter = findMissingLetters(missingZ)[0];
    expect(onlyMissingLetter).toBe("z");
  });
});

describe("isPangram", () => {
  it("should say a pangram is a pangram", () => {
    expect(isPangram(pangram)).toBe(true);
  });

  it("shouldn't say `hi` is a pangram", () => {
    expect(isPangram("hi")).toBe(false);
  });
});
