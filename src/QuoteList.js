// src/QuoteList.js
import React from "react";

const QuoteList = ({ quotes }) => {
  return (
    <div className="quote-list">
      <h2>Saved Quotes</h2>
      <ul>
        {quotes.map((quote, index) => (
          <li key={index}>{quote}</li>
        ))}
      </ul>
    </div>
  );
};

export default QuoteList;
