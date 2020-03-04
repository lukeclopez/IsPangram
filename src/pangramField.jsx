import React, { useState } from "react";

const PangramField = () => {
  const [sentence, setSentence] = useState("");
  const [isPg, setIsPg] = useState(null);

  const handleChange = e => {
    setSentence(e.target.value);
    setIsPg(isPangram(e.target.value));
  };

  return (
    <div className="form__group">
      <input
        className="form__field test"
        placeholder="placeholder"
        type="input"
        onChange={handleChange}
        required
      />
      <label htmlFor="sentence" className="form__label">
        Sentence
      </label>
      {isPg && "This sentence is a pangram!"}
      {!isPg &&
        findMissingLetters(sentence).map(lett => (
          <span className="missing__letter">{lett}</span>
        ))}
    </div>
  );
};

export default PangramField;

const alphabet = "abcdefghijklmnopqrstuvwxyz".split("");

export const findMissingLetters = sentence =>
  alphabet.filter(letter => !sentence.toLowerCase().includes(letter));

export const isPangram = sentence => findMissingLetters(sentence).length === 0;
