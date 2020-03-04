import React from "react";
import { findMissingLetters } from "./utils";

const MissingLetters = ({ sentence }) => {
  const letters = findMissingLetters(sentence);

  return (
    <div className="missing__letters">
      {letters.map(c => (
        <span>{c}</span>
      ))}
    </div>
  );
};

export default MissingLetters;
