import React from "react"
import Header from "../components/header"
import Footer from "../components/footer"
import Image from "../images/me_photo.jpg"

export default () => (
  <div>
  <Header></Header>
  <div className="profile-card">
    <img src={Image} id="image" alt="A photo of me in black and white"/>
  </div>
  <Footer></Footer>
  </div>
)
