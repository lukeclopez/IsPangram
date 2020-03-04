import React, { useState } from "react";

import PangramField from "./pangramField";
import MissingLetters from "./missingLetters";
import { isPangram } from "./utils";

import "./style.scss";

function App() {
  const [sentence, setSentence] = useState("");
  const [isPg, setIsPg] = useState(null);

  const isPgMessage = "This sentence is a pangram.";

  const handleChange = newSentence => {
    setSentence(newSentence);
    setIsPg(isPangram(newSentence));
  };

  return (
    <>
      <PangramField handleChange={handleChange} />
      {isPg ? isPgMessage : <MissingLetters sentence={sentence} />}
    </>
  );
}

export default App;
