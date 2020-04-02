import React from "react"
import Header from "../components/header"
import Footer from "../components/footer"
import Image from "../images/me_photo2.jpg"

export default () => (
  <div>
    <Header></Header>
    <div className="profile-card">
      <img src={Image} id="image" alt="Me at a mural in Nashville" />
      <h1 id="name">Joshua Blewitt</h1>
      <h2 id="special-text">Aspiring Web Developer</h2>
      <h2 id="special-text">Retro Video Game Fan</h2>
    </div>
    <div className="intro">
      <h2>
        Hello!{" "}
        <span role="img" aria-label="string">
          👋
        </span>
      </h2>
      <p>
        My name is Josh (or often called JB) and I'm an aspiring web developer
        from Milton Keynes, United Kingdom.
      </p>
      <p>
        I'm a self taught web developer who is passionate about web development
        and looking for my first development role. I've had six years of
        experience in the IT industry. Currently a Software Tester!
      </p>
      <h2>
        About this site{" "}
        <span role="img" aria-label="string">
          🔍
        </span>
      </h2>
      <p>
        This site was developed in Gatsby (a frameowrk based on React) by
        myself. I'm constantly learning about web development so the look will
        change over time. Why not look at my blog to see what I've been learning
        recently and check out some projects I've made!
      </p>
      <h2>
        Want to contact me?{" "}
        <span role="img" aria-label="string">
          📬
        </span>
      </h2>
      <p>
        Why not take a look at the footer for links to my LinkedIn and my
        Twitter and send me a message? I'm open to junior web development
        opportunities.
      </p>
    </div>
    <Footer></Footer>
  </div>
)
