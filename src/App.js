import "./App.css";
import React from "react";
import { useState } from "react";
import favicon from "./favicon.png";
import setFaviconAndTitle from "./setFaviconAndTitle.js";
import ResultList from "./ResultList.js";
import Instructions from "./instructions.js";

function App() {
  let [userInput, setUserInput] = useState("");
  let [searchType, setSearchType] = useState(localStorage.searchType ? localStorage.searchType : "fuzzy");
  let [language, setLanguage] = useState(localStorage.language ? localStorage.language : "pali");
  let [destination, setDestination] = useState(localStorage.destination ? localStorage.destination : "sc");

  setFaviconAndTitle(favicon, "Sutta Finder: ReadingFaithfully.org");

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
        <div
          className="radiobuttonarea"
          onChange={e => {
            setDestination(e.target.value);
            localStorage.destination = e.target.value;
          }}
        >
          <div>
            <span className="button-title">Open in:</span>
            <label>
              <input
                type="radio"
                name="destination"
                value="sc"
                defaultChecked={destination === "sc" ? "checked" : ""}
              />
              SuttaCentral
            </label>
            <label>
              <input
                type="radio"
                name="destination"
                value="citation"
                defaultChecked={destination === "citation" ? "checked" : ""}
              />
              Citation Helper
            </label>
            <label>
              <input
                type="radio"
                name="destination"
                value="light"
                defaultChecked={destination === "light" ? "checked" : ""}
              />
              SC Light
            </label>
          </div>
        </div>
        <div
          className="radiobuttonarea"
          value={searchType}
          onChange={e => {
            setSearchType(e.target.value);
            localStorage.searchType = e.target.value;
          }}
        >
          <label>
            <input type="radio" name="search" value="exact" defaultChecked={searchType === "exact" ? "checked" : ""} />
            Exact
          </label>
          <label>
            <input type="radio" name="search" value="fuzzy" defaultChecked={searchType === "fuzzy" ? "checked" : ""} />{" "}
            Ignore diacritics, double/aspirated letters
          </label>
        </div>

        <div
          id="language-button-area"
          className="radiobuttonarea"
          value={language}
          onChange={e => {
            setLanguage(e.target.value);
            localStorage.language = e.target.value;
          }}
        >
          <span className="button-title">Search by</span>
          <label>
            <input type="radio" name="language" value="pali" defaultChecked={language === "pali" ? "checked" : ""} />
            Pāli Titles
          </label>
          <label>
            <input
              type="radio"
              name="language"
              value="english"
              defaultChecked={language === "english" ? "checked" : ""}
            />{" "}
            English Titles
          </label>
        </div>
      </div>
      <ResultList searchType={searchType} userInput={userInput} language={language} destination={destination} />
      <Instructions />
    </div>
  );
}

export default App;
