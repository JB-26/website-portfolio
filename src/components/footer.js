import React from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faGitlab } from "@fortawesome/free-brands-svg-icons"
import { faLinkedin } from "@fortawesome/free-brands-svg-icons"
import { faTwitter } from "@fortawesome/free-brands-svg-icons"


export default () => (
    <footer>
        <a href="https://gitlab.com/JoshBl_?nav_source=navbar" rel="noopener noreferrer" target="_blank" ><FontAwesomeIcon className="icon" icon={faGitlab}/></a>
        <a href="https://www.linkedin.com/in/jblewitt/" rel="noopener noreferrer" target="_blank"><FontAwesomeIcon className="icon" icon={faLinkedin} /></a>
        <a href="https://twitter.com/_ItsJayB_" rel="noopener noreferrer" target="_blank"><FontAwesomeIcon className="icon" icon={faTwitter}/></a>
    </footer>
)