import dppnIcon from "./images/favicon-dppn-purple.png";
import citationHelper from "./images/favicon-citaton-helper-purple.png";
import pedIcon from "./images/favicon-pts-purple.png";
import scLight from "./images/favicon-sc-light-purple.png";
import rfIcon from "./images/favicon-rf-purple.png";
import githubIcon from "./images/GitHub-Mark-64px-purple.png";

export function instructions() {
  return (
    <div className="full-instructions">
      <h2>Instructions</h2>
      <div className="included-lists">
        <div>
          <h3>Pāli names included:</h3>
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
              <b>Khp</b> Kuddhakapāṭha
            </li>
            <li>
              <b>Dhp</b> Dhammapada
            </li>
            <li>
              <b>Ud</b> Udāna
            </li>
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
        <div>
          <h3>English names included:</h3>
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
        <a
          href="https://github.com/thesunshade/ped-interface"
          title="The source code for this site"
          rel="noreferrer"
          target="_blank"
        >
          <img width="20px" src={githubIcon} alt="GitHub icon" />
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
          href="https://dppn.readingfaithfully.org"
          title="A lightweight interface the Dictionary of Pali Proper Names"
          rel="noreferrer"
          target="_blank"
        >
          <img width="20px" src={dppnIcon} alt="DPPN search icon" />
        </a>
      </div>
    </div>
  );
}
