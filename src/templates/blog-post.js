import React from "react"
import Header from "../components/header"
import Footer from "../components/footer"
import { graphql } from "gatsby"

export default ({ data }) => {
  const post = data.markdownRemark
  return (
      <div className="postFormat">
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
