import React from "react"
import Header from "../components/header"
import Footer from "../components/footer"
import Article from "../components/article"
import { Helmet } from "react-helmet"

export default () => (
  <div>
    <Helmet>
      <meta charSet="utf-8" />
      <title>Joshua Blewitt - Work</title>
    </Helmet>
    <Header></Header>
    <Article
      headerTextOne="This web site 📜"
      introText="This web page is a new version of my personal website. The previous version was made using the CSS framework Bulma. This new one is using Gatsby."
      techText="This web page was developed by using Gatsby - an open source framework based on React."
      url="https://gitlab.com/JoshBl_/website-portfolio"
    ></Article>
    <Article
      headerTextOne="Ocean 🌊"
      introText="Ocean is a web application that is designed to provide users travel information around London. This looks at getting information from the London Underground API and displaying the information to the user."
      techText="This web application was developed with; HTML, CSS, TypeScript (superset of JavaScript), jQuery"
      url="https://gitlab.com/JoshBl_/ocean-web"
    ></Article>
    <Article
      headerTextOne="Money Swap 💶"
      introText="Money Swap is a CLI program that allows the user to find the value of one currency in another currency. This involves calling an API to retrieve currency rates. A web version is planned."
      techText="This application was developed in C#"
      url="https://gitlab.com/JoshBl_/csharp-currency-convertor"
    ></Article>
    <h1>Other work</h1>
    <p>
      Want to see my other work and certifications? Check out the icons below!
    </p>
    <Footer></Footer>
  </div>
)
