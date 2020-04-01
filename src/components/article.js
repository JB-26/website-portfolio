import React from "react"

export default props => (
    <article className="articleSetup">
        <h1 className="titleCard">{props.headerTextOne}</h1>
        <hr></hr>
        <h2>{props.headerTextTwo}</h2>
        <p>{props.text}</p>
        <h2>Tech Stack</h2>
        <p>{props.techStackText}</p>
        <h2>Links</h2>
        <a href={props.link}
        rel="noopener noreferrer"
        target="_blank">Live</a>
    </article>
)