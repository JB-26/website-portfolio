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
      <h2>Hello! <span role="img" aria-label="string">👋</span></h2>
      <p>My name is Josh (or often called JB) and I'm an aspiring web developer from Milton Keynes, United Kingdom.</p>
      <p>I'm a self taught developer who is passionate about web development. I've had six years of experience in the IT industry. Currently a Software Tester!</p>
    </div>
    <Footer></Footer>
  </div>
)
