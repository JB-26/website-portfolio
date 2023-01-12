import React from "react"
import Header from "../components/header"
import Footer from "../components/footer"
import BlogImage from "../images/blog-header.png"
import { Link, graphql } from "gatsby"

const blog = ({ data }) => {
  console.log(data)
  return (
    <div>
      <Header></Header>
      <div>
        <h1 id="blogTitle">It works on my machine</h1>
        <div id="blogHeaderImageContainer">
          <img
          src={BlogImage}
          alt="What's it like working in IT." id="blogHeaderImage"></img>
        </div>
        <h2 id="blogSubtitle">
          An entertaining and fun blog about development, UX, work, tech and everything that comes
          with it.
        </h2>
        <h2 id="blogSubtitle">Opinions (and typos) are my own.</h2>
        <div id="postCount">
          <h4>
            Want to see all posts? Visit the{" "}
            <Link to="/archive/">Archive.</Link>
          </h4>
        </div>
        <p id="mobileScroll">Scroll left and right to view the most recent posts!</p>
        <div class="outer">
        {data.allMarkdownRemark.edges.map(({ node }) => (
          <div class="container" key={node.id}>
            <div class="row">
              <div class="boxImage">
              <Link to={node.fields.slug} className="posts">
                <img
                  src={node.frontmatter.image}
                  id="blogImages"
                  alt={node.frontmatter.title}
                ></img>
              </Link>
              </div>
              <div class="column">
                <div class="box">
                  <Link to={node.fields.slug} className="posts">
                    <h3 id="title">{node.frontmatter.title}</h3>
                  </Link>
                  <hr></hr>
                </div>
                <div class="box">
                  <p id="postSubtitle">{node.frontmatter.description}</p>
                  <p id="postSubtitle">
                    Published on - {node.frontmatter.date}
                  </p>
                </div>
              </div>
            </div>
          </div>
        ))}
        </div>
      </div>
      <Footer></Footer>
    </div>
  )
}

export const query = graphql`
  query {
    allMarkdownRemark(sort: { frontmatter: { date: DESC } }, limit: 5) {
      totalCount
      edges {
        node {
          id
          frontmatter {
            title
            date(formatString: "DD MMMM, YYYY")
            description
            image
          }
          fields {
            slug
          }
          excerpt
        }
      }
    }
  }
`
export default blog

export function Head() {
  return (
    <>
      <meta charSet="utf-8" />
      <title>Joshua Blewitt - Blog</title>
      <script
        src="https://kit.fontawesome.com/af67ca5a39.js"
        crossorigin="anonymous"
      ></script>
    </>
  )
}
