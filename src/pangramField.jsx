import React from "react";

const PangramField = ({ handleChange }) => {
  return (
    <div className="form__group">
      <input
        className="form__field test"
        placeholder="placeholder"
        type="input"
        onChange={e => handleChange(e.target.value)}
        required
      />
      <label htmlFor="sentence" className="form__label">
        Sentence
      </label>
    </div>
  );
};

export default PangramField;
