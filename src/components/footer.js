import React from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faGitlab } from "@fortawesome/free-brands-svg-icons"
import { faLinkedin } from "@fortawesome/free-brands-svg-icons"
import { Link } from "gatsby"


export default () => (
    <footer>
        <FontAwesomeIcon Link to="https://gitlab.com/JoshBl_?nav_source=navbar" className="icon" icon={faGitlab}/>
        <FontAwesomeIcon className="icon" icon={faLinkedin} />
    </footer>
)