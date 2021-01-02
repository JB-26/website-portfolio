import React from "react"
import { Link } from "gatsby"
import Bolt from "../images/favicon-32x32.png"

export default () => (
  <header>
    <div class="header-item">
      <Link to="/work/" className="blog">Work</Link>
    </div>
    <div id="bolt">
      <Link to="/" className="blog">
        <img src={Bolt} alt="A thunderbolt - which is also the favicon" />
      </Link>
    </div>
    <div class="header-item">
      <Link to="/blog/" className="blog">Blog</Link>
    </div>
  </header>
)
