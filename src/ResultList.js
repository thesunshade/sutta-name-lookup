import validateCitation from "./validateCitation.js";
import createWebsiteLink from "./createWebsiteLink.js";
import parseBookName from "./parseBookName";
import parseNumbers from "./parseNumbers";
import { suttasEnglish } from "./suttasEnglish.js";
import { suttas } from "./suttas.js";
import fuzzy from "./fuzzy.js";

export default function ResultList(props) {
  const { searchType, userInput, language, destination } = props;
  console.log(destination);
  let list = [];
  let database;
  let linkBeginning, linkEnd;

  switch (destination) {
    case "sc":
      linkBeginning = "https://suttacentral.net/";
      linkEnd = "/en/sujato";
      break;
    case "citation":
      linkBeginning = "https://sutta.readingfaithfully.org/?q=";
      linkEnd = "";
      break;
    case "light":
      linkBeginning = "https://sc.readingfaithfully.org/?";
      linkEnd = "";
      break;
  }

  function makeSlug(citation) {
    return citation.toLowerCase().replace(" ", "").replace(":", ".");
  }

  if (language === "pali") {
    database = suttas;
  } else if (language === "english") {
    database = suttasEnglish;
  }

  if (userInput && userInput.length > 2) {
    if (searchType === "exact") {
      let regex = new RegExp(userInput.replace("sutta", ""), "i");
      for (let i = 0; i < database.length; i++) {
        if (regex.test(database[i][1])) {
          list.push(database[i]);
        }
      }
    } else {
      let strippedUserInput = new RegExp(fuzzy(userInput.replace("sutta", "")), "i");
      for (let i = 0; i < database.length; i++) {
        if (strippedUserInput.test(fuzzy(database[i][1]))) {
          list.push(database[i]);
        }
      }
    }
  }

  return (
    <div id="result-list">
      <div>
        <span className="result-count">{userInput.length > 2 ? "results: " + list.length : ""}</span>
      </div>
      {list.map((item, index) => (
        <li key={index}>
          <a
            title="Open link on SuttaCentral.net"
            target="_blank"
            rel="noreferrer"
            href={`${linkBeginning}${makeSlug(item[0])}${linkEnd}`}
          >
            <span className="citation">{item[0]}</span> {item[1]}
          </a>
        </li>
      ))}
    </div>
  );
}
