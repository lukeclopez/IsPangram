import React from "react";
import { findMissingLetters } from "./utils";

const MissingLetters = ({ sentence }) => {
  const letters = findMissingLetters(sentence);

  return (
    <>
      <span className="missing">Missing: </span>
      <span className="missing__letters">
        {letters.map(c => (
          <span key={c}>{c}</span>
        ))}
      </span>
    </>
  );
};

export default MissingLetters;
