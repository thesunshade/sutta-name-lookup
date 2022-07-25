import "./App.css";
import React from "react";
import { useState } from "react";
import favicon from "./favicon.png";
import faviconTitle from "./faviconTitle.js";
import ResultList from "./ResultList.js";
import Instructions from "./Instructions.js";

function App() {
  let [userInput, setUserInput] = useState("");
  let [searchType, setSearchType] = useState("fuzzy");
  let [language, setLanguage] = useState("pali");
  let [destination, setDestination] = useState("sc");

  // dynamically sets page favicon and title
  faviconTitle(favicon, "Sutta Finder: ReadingFaithfully.org");

  return (
    <div className="App">
      <div id="input-field-container">
        <label id="user-input-label" htmlFor="user-input">
          Enter sutta name, omitting “sutta”. Regex is allowed.
        </label>
        <input
          id="user-input"
          autoFocus
          type="text"
          value={userInput}
          onChange={event => setUserInput(event.target.value)}
          placeholder="ex. dhamma"
        />
        <div className="radiobuttonarea" onChange={e => setDestination(e.target.value)}>
          <div>
            <span className="button-title">Open in:</span>
            <label>
              <input type="radio" name="destination" value="sc" defaultChecked /> SuttaCentral
            </label>
            <label>
              <input type="radio" name="destination" value="citation" /> Citation Helper
            </label>
            <label>
              <input type="radio" name="destination" value="light" /> SC Light
            </label>
          </div>
        </div>
        <div className="radiobuttonarea" value={searchType} onChange={e => setSearchType(e.target.value)}>
          <label>
            <input type="radio" name="search" value="exact" />
            Exact
          </label>
          <label>
            <input type="radio" defaultChecked name="search" value="fuzzy" /> Ignore diacritics, double/aspirated
            letters
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
            <input type="radio" name="language" value="english" /> English
          </label>
        </div>
      </div>
      <ResultList searchType={searchType} userInput={userInput} language={language} destination={destination} />
      <Instructions />
    </div>
  );
}

export default App;
