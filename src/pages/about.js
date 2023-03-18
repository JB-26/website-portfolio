import React from "react"
import Header from "../components/header"
import Footer from "../components/footer"
import Image from "../images/about-image_2.png"
import Image2 from "../images/tokyo_2.png"

const about = () => (
  <div>
    <Header></Header>
    <h1 class="work_title">A bit about Joshua Blewitt</h1>
    <i class="about-sub">
      Joshua Blewitt is a Test Engineer, hobbyist developer and aspiring software developer.
    </i>
    <div class="about-box">
      <div class="column-about">
        <p>
          <img
            id="image-about-right"
            src={Image}
            alt="I sure love donuts 🍩"
          ></img>
          I'm an IT Professional with about 7 years of experience. I'm currently
          a Software Test Engineer at IQVIA. I've previously worked for
          companies like Domino's Pizza Group. I've mostly worked within testing
          of software.
          <br></br>
          <br></br>I attended Anglia Ruskin University (Cambridge Campus), and
          graduated with a First Class Degree with honours in Computer Science
          in 2014. During my time at University I secured an internship with
          Citrix. Throughout my time studying I began to discover my interests
          in development and UX.
        </p>
      </div>
    </div>
    <hr className="fill"></hr>
    <div class="about-box">
      <div class="column-about">
        <p>
          <img id="image-about-left" src={Image2} alt="Tokyo Skytree!"></img>
          After graduating, I also found my joy in travelling. I've travelled to
          many countries, including America, Japan, France and Spain (Tokyo is a
          place that I'd like to visit again someday).<br></br>
          <br></br>
          This website serves as a place for me to share my interests, practice
          and learn more about various topics. Including; Web Development, Data
          Science, UX and testing. I've taken several courses on Udemy and
          LinkedIn Learning covering Python, UX, Web Development and other
          languages (like Ruby). I use the knowledge that I've gained from these
          courses on various personal projects such as the{" "}
          <a href="https://github.com/JB-26/video-game-api">Video Game API</a>
          <br></br>
          <br></br>
          I'm a big fan of retro games (I mostly collect games for the Sega
          Saturn, Mega Drive and SNES), programming, podcasts and a little bit
          of music here and there (with some photography thrown in as well). I
          consider myself to be a donut connoisseur.
        </p>
      </div>
    </div>
    <Footer></Footer>
  </div>
)

export default about

export function Head() {
  return (
    <>
      <title>Joshua Blewitt - About</title>
      <meta charSet="utf-8" />
      <script
        src="https://kit.fontawesome.com/af67ca5a39.js"
        crossorigin="anonymous"
      ></script>
    </>
  )
}
