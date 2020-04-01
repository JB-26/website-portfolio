import React from "react"
import Header from "../components/header"
import Footer from "../components/footer"
import Article from "../components/article"

export default () => (
  <div>
    <Header></Header>
    <Article
    headerTextOne="Ocean 🌊"
    headerTextTwo="Introduction"
    text="Ocean is a web application that is designed to provide users travel information around London. This looks at getting information from the London Underground API and displaying the information to the user."
    techStackText="This web application was developed with; HTML, CSS, TypeScript (superset of JavaScript), jQuery"
    link="https://limitless-ravine-34034.herokuapp.com/index.html"
    >
    </Article>
    <Footer></Footer>
  </div>
)
