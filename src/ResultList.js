import { allSuttasEnglish } from "./allSuttasEnglish.js";
import { allSuttasPali } from "./allSuttasPali.js";
import { blurbs } from "./data/blurbs.js";
import fuzzy from "./fuzzy.js";
import copyMdIcon from "./images/copy-markdown-lightPurple.png";

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

  function clean(item) {
    return item.replace(/[-\s]/g, "");
  }

  if (language === "pali") {
    database = allSuttasPali;
  } else if (language === "english") {
    database = allSuttasEnglish;
  }

  if (userInput && userInput.length > 2) {
    if (searchType === "exact") {
      let regex = new RegExp(clean(userInput).replace("sutta", ""), "i");
      for (let i = 0; i < database.length; i++) {
        if (regex.test(clean(database[i][1]))) {
          list.push(database[i]);
        }
      }
    } else {
      let strippedUserInput = new RegExp(fuzzy(clean(userInput).replace("sutta", "")), "i");
      for (let i = 0; i < database.length; i++) {
        if (strippedUserInput.test(fuzzy(clean(database[i][1])))) {
          list.push(database[i]);
        }
      }
    }
  }

  return (
    <div id="result-list" className="result-list">
      <div>
        <span className="result-count">
          {userInput.length > 2 ? "results: " + list.length : "Enter a search above"}
        </span>
      </div>
      {list.map((item, index) => (
        <li key={index}>
          <a
            title={`Open on: ${siteName}${blurbs[makeSlug(item[0])] ? "\nSummary: " + blurbs[makeSlug(item[0])] : ""}`}
            target="_blank"
            rel="noreferrer"
            href={`${linkBeginning}${makeSlug(item[0])}${
              /sn/.test(makeSlug(item[0])) && !/:/.test(makeSlug(item[0])) ? "" : linkEnd
            }`}
          >
            <span className="citation">{item[0]}</span> {item[1]}
          </a>
          <img
            alt="copy icon"
            className="icon copy-icon"
            height="14"
            src={copyMdIcon}
            title={`Copy Markdown link to ${siteName}`}
            onClick={e => {
              e.preventDefault();
              const mdText = `[${item[0]} ${item[1]}](${`${linkBeginning}${makeSlug(item[0])}${
                /sn/.test(makeSlug(item[0])) && !/:/.test(makeSlug(item[0])) ? "" : linkEnd
              }`})`;
              navigator.clipboard.writeText(mdText);
            }}
          />
        </li>
      ))}
    </div>
  );
}
