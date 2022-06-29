import dppnIcon from "./images/favicon-dppn-lightpurple.png";
import citationHelper from "./images/favicon-citaton-helper-lightpurple.png";
import pedIcon from "./images/favicon-ped-lightpurple.png";
import scLight from "./images/favicon-sc-light-lightpurple.png";
import rfIcon from "./images/favicon-rf-lightpurple.png";
import drfIcon from "./images/favicon-drf-lightpurple.png";
import rIcon from "./images/favicon-r-lightpurple.png";
import githubIcon from "./images/favicon-GitHub-lightpurple.png";

export default function Instructions() {
  return (
    <div className="full-instructions">
      <h2>Instructions</h2>
      Use RegEx for wildcards. For example:
      <ul className="instructions-list">
        <li>
          <span className="code">^dham</span>&nbsp;&nbsp;&nbsp;&nbsp;<i>starts</i> with “dham”
        </li>
        <li>
          <span className="code">^..dr</span>&nbsp;&nbsp;&nbsp;<i>starts</i> with 2 letters before “dr”
        </li>
        <li>
          <span className="code">am$</span>&nbsp;&nbsp;&nbsp;&nbsp;<i>ends</i> with “am”
        </li>
        <li>
          <span className="code">^ab.*ka$</span>&nbsp;&nbsp;&nbsp;&nbsp;<i>starts</i> with “ab” <i>ending</i> with “ka”
        </li>
        <li>
          <span className="code">dh*am</span>&nbsp;&nbsp;&nbsp;&nbsp;has <i>either</i> “dham” or “dam”
        </li>
        <li>
          <span className="code">su[pv]a</span>&nbsp;&nbsp;&nbsp;&nbsp;with <i>either</i> “supa” or “suva”
        </li>
      </ul>
      <p>For best results, disable fuzzy mode when using wildcards.</p>
      {/* <p>
        | <a href="https://discourse.suttacentral.net/t/a-mini-interface-for-the-ped/24432">Feedback</a> |{" "}
        <a href="https://archive.org/search.php?query=pali%20english%20dictionary">PDF on Archive.org</a> |
      </p> */}
      <h3>Names included:</h3>
      <div className="included-lists">
        <div>
          <ul>
            <li>
              <b>DN</b> Dīgha Nikāya
            </li>
            <li>
              <b>MN</b> Majjhima Nikāya
            </li>
            <li>
              <b>SN</b> Saṁyutta Nikāya
            </li>
            <li>
              <b>AN</b> Aṅguttara Nikāya
            </li>
            <li>
              <b>Khp</b> Khuddakapāṭha
            </li>
            <li>
              <b>Dhp</b> Dhammapada
            </li>
            <li>
              <b>Ud</b> Udāna
            </li>
          </ul>
        </div>
        <div>
          <ul>
            <li>
              <b>Iti</b> Itivuttaka
            </li>
            <li>
              <b>Snp</b> Sutta Nipāta
            </li>
            <li>
              <b>Vv</b> Vimānavatthu
            </li>
            <li>
              <b>Pv</b> Petavatthu
            </li>
            <li>
              <b>Thag</b> Theragātha
            </li>
            <li>
              <b>Thig</b> Therīgāthā
            </li>
            <li>
              <b>Ja</b> Jātaka
            </li>
          </ul>
        </div>
      </div>
      <div className="links-area">
        <a
          href="http://readingfaithfully.org"
          title="Support for your sutta readng practice"
          rel="noreferrer"
          target="_blank"
        >
          <img width="20px" src={rfIcon} alt="ReadingFaithfully.org icon" />
        </a>
        <a href="http://daily.readingfaithfully.org" title="Daily Sutta" rel="noreferrer" target="_blank">
          <img width="20px" src={drfIcon} alt="Daily.ReadingFaithfully.org icon" />
        </a>

        <a href="https://sutta.readingfaithfully.org" title="Citation Lookup Tool" rel="noreferrer" target="_blank">
          <img width="20px" src={citationHelper} alt="Citation Lookup tool icon" />
        </a>
        <a
          href="https://ped.readingfaithfully.org"
          title="Lightweight interface for the Pali English Dictionary"
          rel="noreferrer"
          target="_blank"
        >
          <img width="20px" src={pedIcon} alt="Lightweight PED lookup icon" />
        </a>
        <a
          href="https://sc.readingfaithfully.org"
          title="A lightweight interface for SuttaCentral.net"
          rel="noreferrer"
          target="_blank"
        >
          <img width="20px" src={scLight} alt="SuttaCentral.org Lightweight interface icon" />
        </a>
        <a
          href="https://r.readingfaithfully.org"
          title="Get a random sutta from SuttaCentral.net"
          rel="noreferrer"
          target="_blank"
        >
          <img width="20px" src={rIcon} alt="Random Sutta icon" />
        </a>
        <a
          href="https://dppn.readingfaithfully.org"
          title="A lightweight interface the Dictionary of Pali Proper Names"
          rel="noreferrer"
          target="_blank"
        >
          <img width="20px" src={dppnIcon} alt="DPPN search icon" />
        </a>
        <a
          href="https://github.com/thesunshade/sutta-name-lookup#readme"
          title="The source code for this site"
          rel="noreferrer"
          target="_blank"
        >
          <img width="20px" src={githubIcon} alt="GitHub icon" />
        </a>
      </div>
    </div>
  );
}
