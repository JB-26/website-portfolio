import React from "react"
import Header from "../components/header"
import Footer from "../components/footer"

export default () => (
  <div>
    <Header></Header>
    <div className="titleCard">
      <h1>
        Ocean{" "}
        <span role="img" aria-label="string">
          🌊
        </span>
      </h1>
      <hr></hr>
      <h2>Introduction</h2>
      <p>
        Ocean is a web application that is designed to provide users travel
        information around London. This looks at getting information from the
        London Underground API and displaying the information to the user.
      </p>
      <p>
        The user can interact with Ocean in two ways:
        <ul>
          <li>Choose an Underground line from a dropdown selection</li>
          <li>
            Enter a starting point and an ending point in two text boxes and
            Ocean will find a route from the starting point to the end point.
          </li>
        </ul>
      </p>
      <h2>Tech Stack</h2>
      <p>
        The web application was developed using:
        <ul>
          <li>HTML</li>
          <li>CSS</li>
          <li>TypeScript (superset of JavaScript)</li>
          <li>jQuery</li>
        </ul>
      </p>
      <h2>Links</h2>
      <p>
        The web version of Ocean was deployed via Heroku, and can be accessed by
        this link{" "}
        <a
          href="https://limitless-ravine-34034.herokuapp.com/index.html"
          rel="noopener noreferrer"
          target="_blank"
        >
          here.
        </a>
      </p>
      <p>
        A CLI version of Ocean also exists. This was written in the Go language.
        The repo for this can be found{" "}
        <a
          href="https://gitlab.com/JoshBl_/ocean"
          rel="noopener noreferrer"
          target="_blank"
        >
          here.
        </a>
      </p>
      <h1>
        Money Swap{" "}
        <span role="img" aria-label="string">
          💶
        </span>
      </h1>
      <hr></hr>
      <h2>Introduction</h2>
      <p>
        Money Swap is a CLI program that is written in C#. The program allows
        the user to find the value of one currency in another currency.
      </p>
    </div>
    <Footer></Footer>
  </div>
)
