import React from "react"
import Header from "../components/header"
import Footer from "../components/footer"
import { graphql } from "gatsby"
import { Helmet } from "react-helmet"

export default ({ data }) => {
  const post = data.markdownRemark
  return (
    <div className="postFormat">
      <Helmet>
        <meta charSet="utf-8" />
        <title>Joshua Blewitt - {post.frontmatter.title}</title>
      </Helmet>
      <Header></Header>
      <h1 id="blogHeader">{post.frontmatter.title}</h1>
      <div id="postDetails" dangerouslySetInnerHTML={{ __html: post.html }} />
      <Footer></Footer>
    </div>
  )
}

export const query = graphql`
  query($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title
      }
    }
  }
`
