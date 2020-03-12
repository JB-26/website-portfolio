import React from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faGitlab } from "@fortawesome/free-brands-svg-icons"
import { faLinkedin } from "@fortawesome/free-brands-svg-icons"
import { Link } from "gatsby"


export default () => (
    <footer>
        <a href="https://gitlab.com/JoshBl_?nav_source=navbar" target="_blank"><FontAwesomeIcon className="icon" icon={faGitlab}/></a>
        <a href="https://www.linkedin.com/in/jblewitt/" target="_blank"><FontAwesomeIcon className="icon" icon={faLinkedin} /></a>
    </footer>
)