import React from "react"

const props = () => (
  <article className="articleSetup">
    <div class="card">
      <div class="top">
        <h1>{props.headerTextOne}</h1>
      </div>
      <div class="bottom">
        <h2>Introduction</h2>
        <p>{props.introText}</p
        <hr></hr>
        <h2>Tech Stack</h2>
        <p>{props.techText}</p>
        <hr></hr>
        <h2>Links</h2>
        <p>
          You can find the project{" "}
          <a href={props.url} rel="noopener noreferrer" target="_blank">
            here
          </a>
        </p>
      </div>
    </div>
  </article>
)

export default props
