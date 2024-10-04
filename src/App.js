// src/App.js
import React, { useState, useEffect } from "react";
import axios from "axios";
import Quote from "./Quote";
import QuoteList from "./QuoteList";
import "./style.css";

const App = () => {
  const [quote, setQuote] = useState("");
  const [savedQuotes, setSavedQuotes] = useState([]);

  useEffect(() => {
    axios
      .get("https://ron-swanson-quotes.herokuapp.com/v2/quotes")
      .then((response) => {
        setQuote(response.data[0]);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  const handleSaveQuote = () => {
    setSavedQuotes([...savedQuotes, quote]);
  };

  return (
    <div className="app">
      <Quote quote={quote} onSave={handleSaveQuote} />
      <QuoteList quotes={savedQuotes} />
    </div>
  );
};

export default App;
