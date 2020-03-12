import React from "react"
import Header from "../components/header"
import Footer from "../components/footer"
import Image from "../images/me_photo.jpg"

export default () => (
  <div>
    <Header></Header>
    <div className="profile-card">
      <img src={Image} id="image" alt="A photo of me in black and white" />
      <div className="profile-card-info">
        <h1 id="name">Joshua Blewitt</h1>
        <h2 id="special-text">Aspiring Web Developer</h2>
        <h2 id="special-text">Retro Game Connoisseur</h2>
      </div>
    </div>
    <Footer></Footer>
  </div>
)
