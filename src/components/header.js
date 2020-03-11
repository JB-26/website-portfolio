import React from "react"
import { Link } from "gatsby"

export default () => (
  <header>
    <div class="header-item"><Link to="">./HOME</Link></div>
    <div class="header-item"><Link to="/about/">./ABOUT</Link></div>
    <div class="header-item"><Link to="/work/">./WORK</Link></div>
    <div class="header-item"><Link to="/blog/">./BLOG</Link></div>
    <div class="header-item"><Link to="/contact/">./CONTACT</Link></div>
  </header>
)