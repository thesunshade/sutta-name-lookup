import "./App.css";
import React from "react";
import { useState } from "react";
import favicon from "./favicon.png";
import faviconTitle from "./faviconTitle.js";
import ResultList from "./ResultList.js";
import { instructions } from "./instructions.js";

function App() {
  let [userInput, setUserInput] = useState("");
  let [searchType, setSearchType] = useState("fuzzy");
  let [language, setLanguage] = useState("pali");
  faviconTitle(favicon, "Sutta Finder");

  return (
    <div className="App">
      <div id="input-field-container">
        <label id="user-input-label" htmlFor="user-input">
          Enter sutta name (omitting "sutta")
        </label>
        <input
          id="user-input"
          autoFocus
          type="text"
          value={userInput}
          onChange={event => setUserInput(event.target.value)}
          placeholder="ex. dhamma"
        />
        <p className="instructions">Regex is allowed</p>
        <div className="radiobuttonarea" value={searchType} onChange={e => setSearchType(e.target.value)}>
          <label>
            <input type="radio" name="search" value="exact" />
            Exact search
          </label>
          <label>
            <input type="radio" defaultChecked name="search" value="fuzzy" /> Ignore diacritics, & double/aspirated
            consonants
          </label>
        </div>
        <div
          id="language-button-area"
          className="radiobuttonarea"
          value={language}
          onChange={e => setLanguage(e.target.value)}
        >
          <label>
            <input type="radio" defaultChecked name="language" value="pali" />
            Pali
          </label>
          <label>
            <input type="radio" name="language" value="english" /> English (from Wisdom Publications)
          </label>
        </div>
      </div>
      <ResultList searchType={searchType} userInput={userInput} language={language} />
      {instructions()}
    </div>
  );
}

export default App;
