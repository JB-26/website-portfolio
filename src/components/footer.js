import React from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faGithub} from "@fortawesome/free-brands-svg-icons"
import { faLinkedin } from "@fortawesome/free-brands-svg-icons"
import { faTwitter } from "@fortawesome/free-brands-svg-icons"
import { faCodepen } from "@fortawesome/free-brands-svg-icons"
import { faFreeCodeCamp } from "@fortawesome/free-brands-svg-icons"

export default () => (
  <footer>
    <div className="listHolder">
      <ul className="footer">
        <li className='blog'>
          <a
            className="blog"
            href="https://github.com/JB-26"
            rel="noopener noreferrer"
            target="_blank"
          >
            <FontAwesomeIcon className="icon" icon={faGithub} />
          </a>
        </li>
        <li className='blog'>
          <a
            className="blog"
            href="https://codepen.io/JayBl"
            rel="noopener noreferrer"
            target="_blank"
          >
            <FontAwesomeIcon className="icon" icon={faCodepen} />
          </a>
        </li>
        <li className='blog'>
          <a
            className="blog"
            href="https://www.freecodecamp.org/fcc2927573c-68b6-4b92-954b-d97d1ea76b7f"
            rel="noopener noreferrer"
            target="_blank"
          >
            <FontAwesomeIcon className="icon" icon={faFreeCodeCamp} />
          </a>
        </li>
        <li className='blog'>
          <a
            className="blog"
            href="https://www.linkedin.com/in/jblewitt/"
            rel="noopener noreferrer"
            target="_blank"
          >
            <FontAwesomeIcon className="icon" icon={faLinkedin} />
          </a>
        </li>
        <li className='blog'>
          <a
            className="blog"
            href="https://twitter.com/_ItsJayB_"
            rel="noopener noreferrer"
            target="_blank"
          >
            <FontAwesomeIcon className="icon" icon={faTwitter} />
          </a>
        </li>
      </ul>
    </div>
  </footer>
)
