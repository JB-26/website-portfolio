import React from "react"
import Header from "../components/header"
import Footer from "../components/footer"

export default () => (
  <div>
    <Header></Header>
    <div className="titleCard">
      <h1>Ocean <span role="img" aria-label="string">🌊</span></h1>
      <hr></hr>
    </div>
    <Footer></Footer>
  </div>
)