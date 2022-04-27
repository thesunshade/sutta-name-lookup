import validateCitation from "./validateCitation.js";
import createWebsiteLink from "./createWebsiteLink.js";
import parseBookName from "./parseBookName";
import parseNumbers from "./parseNumbers";
import { suttasEnglish } from "./suttasEnglish.js";
import { suttas } from "./suttas.js";
import fuzzy from "./fuzzy.js";

export default function ResultList(props) {
  const { searchType, userInput, language } = props;
  let list = [];
  let database;

  if (language === "pali") {
    database = suttas;
  } else if (language === "english") {
    database = suttasEnglish;
  }
  if (userInput && userInput.length > 2) {
    const start = Date.now();
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
    const duration = Date.now() - start;
    console.log(duration);
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
            href={
              createWebsiteLink({
                site: "SC",
                ...validateCitation(parseBookName(item[0]), parseNumbers(item[0])),
              }) + "/en/sujato"
            }
          >
            {item[0]}
          </a>{" "}
          {item[1]}
        </li>
      ))}
    </div>
  );
}
