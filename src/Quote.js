// src/Quote.js
import React from "react";

const Quote = ({ quote, onSave }) => {
  return (
    <div className="quote-card">
      <p className="quote-text">{quote}</p>
      <button className="save-button" onClick={onSave}>
        Save to List
      </button>
    </div>
  );
};

export default Quote;
