import React from "react"
import Header from "../components/header"
import Footer from "../components/footer"
import Image from "../images/new.jpg"

export default () => (
  <div>
    <Header></Header>
    <div className="content">
      <div className="left">
        <h1>
          Hey, I'm Joshua Blewitt{" "}
          <span role="img" aria-label="string">
            👋
          </span>
        </h1>
        <hr className="fill"></hr>
        <p>
          I'm an aspiring web developer! I'm based in Milton Keynes, United
          Kingdom.<br></br>I have a first class degree in Computer Science from
          Anglia Ruskin Unviversity.<br></br>I've been working in the IT
          industry for 6 years and I'm currently a software tester.<br></br>
          I've worked for companies such as Domino's Pizza Group.
        </p>
        <div id="buttonContainer">
          <a id="emailButton" href="mailto:joshblewitt@protonmail.com">Get in touch!</a>
        </div>
      </div>
      <div className="right">
        <img id="image" src={Image} alt="Me in Nashville"></img>
      </div>
    </div>
    <Footer></Footer>
  </div>
)
