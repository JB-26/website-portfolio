import React from "react"
import Header from "../components/header"
import Footer from "../components/footer"
import Article from "../components/article"

export default () => (
  <div>
    <Header></Header>
    <Article
      headerTextOne="This web site 📜"
      headerTextTwo="Introduction"
      text="This web page is a new version of my personal website. The previous version was made using the CSS framework Bulma. This new one is using Gatsby."
      techStackText="This web page was developed by using Gatsby - an open source framework based on React."
    ></Article>
    <p>
      You can view the code for this{" "}
      <a
        href="https://gitlab.com/JoshBl_/website-portfolio"
        rel="noopener noreferrer"
        target="_blank"
      >
        here
      </a>
    </p>
    <Article
      headerTextOne="Ocean 🌊"
      headerTextTwo="Introduction"
      text="Ocean is a web application that is designed to provide users travel information around London. This looks at getting information from the London Underground API and displaying the information to the user."
      techStackText="This web application was developed with; HTML, CSS, TypeScript (superset of JavaScript), jQuery"
    ></Article>
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
    <Article
      headerTextOne="Money Swap 💶"
      headerTextTwo="Introduction"
      text="Money Swap is a CLI program that allows the user to find the value of one currency in another currency. This involves calling an API to retrieve currency rates. A web version is planned."
      techStackText="This application was developed in C#"
    ></Article>
    <p>
      The repo for this can be found{" "}
      <a
        href="https://gitlab.com/JoshBl_/csharp-currency-convertor"
        rel="noopener noreferrer"
        target="_blank"
      >
        here.
      </a>
    </p>
    <h1>Other work</h1>
    <p>
      Want to see my other work and certifications? Check out the icons below!
    </p>
    <Footer></Footer>
  </div>
)
