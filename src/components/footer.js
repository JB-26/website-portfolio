import React from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faGitlab } from "@fortawesome/free-brands-svg-icons"
import { faLinkedin } from "@fortawesome/free-brands-svg-icons"
import { faTwitter } from "@fortawesome/free-brands-svg-icons"
import { faCodepen } from "@fortawesome/free-brands-svg-icons"
import { faFreeCodeCamp } from "@fortawesome/free-brands-svg-icons"

export default () => (
  <footer>
    <ul className="footerIcon">
      <li>
        <a
          href="https://gitlab.com/JoshBl_?nav_source=navbar"
          rel="noopener noreferrer"
          target="_blank"
        >
          <FontAwesomeIcon className="icon" icon={faGitlab} />
        </a>
      </li>
      <li>
        <a
          href="https://codepen.io/JayBl"
          rel="noopener noreferrer"
          target="_blank"
        >
          <FontAwesomeIcon className="icon" icon={faCodepen} />
        </a>
      </li>
      <li>
        <a
          href="https://www.freecodecamp.org/fcc2927573c-68b6-4b92-954b-d97d1ea76b7f"
          rel="noopener noreferrer"
          target="_blank"
        >
          <FontAwesomeIcon className="icon" icon={faFreeCodeCamp} />
        </a>
      </li>
      <li>
        <a
          href="https://www.linkedin.com/in/jblewitt/"
          rel="noopener noreferrer"
          target="_blank"
        >
          <FontAwesomeIcon className="icon" icon={faLinkedin} />
        </a>
      </li>
      <li>
        <a
          href="https://twitter.com/_ItsJayB_"
          rel="noopener noreferrer"
          target="_blank"
        >
          <FontAwesomeIcon className="icon" icon={faTwitter} />
        </a>
      </li>
    </ul>
  </footer>
)
