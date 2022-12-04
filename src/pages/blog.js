import React from "react"
import Header from "../components/header"
import Footer from "../components/footer"
import { Link, graphql } from "gatsby"
import { Helmet } from "react-helmet"

const blog = ({ data }) => {
  console.log(data)
  return (
    <div>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Joshua Blewitt - Blog</title>
        <script
          src="https://kit.fontawesome.com/af67ca5a39.js"
          crossorigin="anonymous"
        ></script>
      </Helmet>
      <Header></Header>
      <div>
        <h1 id="blogTitle">It works on my machine</h1>
        <h2 id="blogSubtitle">
          A blog about development, UX, work, tech and everything that comes
          with it.
        </h2>
        <h2 id="blogSubtitle">Opinions are my own.</h2>
        <div id="postCount">
          <h4>
            Want to see all posts? Visit the{" "}
            <Link to="/archive/">Archive.</Link>
          </h4>
        </div>
        {data.allMarkdownRemark.edges.map(({ node }) => (
          <div class="container" key={node.id}>
            <div class="row">
              <div class="boxImage">
                <img
                  src={node.frontmatter.image}
                  class="image"
                  alt={node.frontmatter.title}
                ></img>
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
      <Footer></Footer>
    </div>
  )
}

export const query = graphql`
  query {
    allMarkdownRemark(
      sort: { fields: [frontmatter___date], order: DESC }
      limit: 5
    ) {
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
