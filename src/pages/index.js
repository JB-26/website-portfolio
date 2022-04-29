import React from "react"
import Header from "../components/header"
import Footer from "../components/footer"
import Image from "../images/main_image_edited.jpg"
import { Helmet } from "react-helmet"

export default () => (
  <div>
    <Helmet>
      <meta charSet="utf-8" />
      <title>Joshua Blewitt - Home</title>
    </Helmet>
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
        <i id="known">Also known as JB.</i>
        <p>
          I'm a hobbyist developer, technology advocate and curious mind that's based in the United Kingdom. My current work as a Test Engineer allows me to explore software and champion quality. In my spare time, I enjoy collecting and playing retro games, listening to podcasts, and travelling.
        </p>
        <div id="buttonContainer">
          <a id="emailButton" href="mailto:joshblewitt@protonmail.com">
            Get in touch!
          </a>
        </div>
      </div>
      <div className="right">
        <img id="image" src={Image} alt="Me at the pub!"></img>
      </div>
    </div>
    <Footer></Footer>
  </div>
)
