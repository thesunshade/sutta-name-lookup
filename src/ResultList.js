import { allSuttasEnglish } from "./allSuttasEnglish.js";
import { allSuttasPali } from "./allSuttasPali.js";
import fuzzy from "./fuzzy.js";

export default function ResultList(props) {
  const { searchType, userInput, language, destination } = props;
  let list = [];
  let database;
  let linkBeginning, linkEnd, siteName;

  switch (destination) {
    case "sc":
      linkBeginning = "https://suttacentral.net/";
      linkEnd = "/en/sujato";
      siteName = "SuttaCentral.net";
      break;
    case "citation":
      linkBeginning = "https://sutta.readingfaithfully.org/?q=";
      linkEnd = "";
      siteName = "Citation Helper";
      break;
    case "light":
      linkBeginning = "https://sc.readingfaithfully.org/?q=";
      linkEnd = "";
      siteName = "SuttaCentral Light";
      break;
    default:
      console.error("problem with destination setting");
      break;
  }

  function makeSlug(citation) {
    return citation.toLowerCase().replace(" ", "");
  }

  if (language === "pali") {
    database = allSuttasPali;
  } else if (language === "english") {
    database = allSuttasEnglish;
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
            title={"Open link on " + siteName}
            target="_blank"
            rel="noreferrer"
            href={`${linkBeginning}${makeSlug(item[0])}${
              /sn/.test(makeSlug(item[0])) && !/:/.test(makeSlug(item[0])) ? "" : linkEnd
            }`}
          >
            <span className="citation">{item[0]}</span> {item[1]}
          </a>
        </li>
      ))}
    </div>
  );
}
