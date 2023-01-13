import React from "react"

const Footer = () => (
  <footer>
    <div className="listHolder">
      <ul className="footer">
        <li className="blog">
          <a
            className="blog"
            href="https://github.com/JB-26"
            rel="noopener noreferrer"
            target="_blank"
          >
            <i class="fa-brands fa-github icon"></i>
          </a>
        </li>
        <li className="blog">
          <a
            className="blog"
            href="https://codepen.io/JayBl"
            rel="noopener noreferrer"
            target="_blank"
          >
            <i class="fa-brands fa-codepen icon"></i>
          </a>
        </li>
        <li className="blog">
          <a
            className="blog"
            href="https://www.linkedin.com/in/jblewitt/"
            rel="noopener noreferrer"
            target="_blank"
          >
            <i class="fa-brands fa-linkedin icon"></i>
          </a>
        </li>
        <li className="blog">
          <a
            className="blog"
            href="https://mastodon.social/@jblewitt"
            rel="me noreferrer"
            target="_blank"
          >
            <i class="fa-brands fa-mastodon icon"></i>
          </a>
        </li>
      </ul>
    </div>
  </footer>
)

export default Footer
