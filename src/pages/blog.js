import React from "react"
import Header from "../components/header"
import Footer from "../components/footer"
import { Link, graphql } from "gatsby"
import { Helmet } from "react-helmet"

export default ({ data }) => {
  console.log(data)
  return (
    <div>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Joshua Blewitt - Blog</title>
      </Helmet>
      <Header></Header>
      <div>
        <h1 id="blogTitle">It works on my machine</h1>
        <div id="postCount">
          <h4>{data.allMarkdownRemark.totalCount} Posts</h4>
        </div>
        {data.allMarkdownRemark.edges.map(({ node }) => (
          <div id="blogPosts" key={node.id}>
            <Link to={node.fields.slug} className='posts'>
              <h3>
                {node.frontmatter.title} <span>— {node.frontmatter.date}</span>
              </h3>
            </Link>
          </div>
        ))}
      </div>
      <Footer></Footer>
    </div>
  )
}

export const query = graphql`
  query {
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      totalCount
      edges {
        node {
          id
          frontmatter {
            title
            date(formatString: "DD MMMM, YYYY")
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
