import * as React from 'react'
import Header from "../components/header"
import Footer from "../components/footer"
import { graphql } from "gatsby"

const blogPost = ({ data }) => {
  const post = data.markdownRemark
  return (
    <div className="postFormat">
      <Header></Header>
      <div id="titleDivider">
        <h1 id="blogHeader">{post.frontmatter.title}</h1>
      </div>
      <div id="postDetails" dangerouslySetInnerHTML={{ __html: post.html }} />
      <Footer></Footer>
    </div>
  )
}

export const query = graphql`
  query ($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title
      }
    }
  }
`

export default blogPost

export function Head({ data }) {
  const post = data.markdownRemark
  return (
    <>
      <meta charSet="utf-8" />
      <title>Joshua Blewitt - {post.frontmatter.title}</title>
      <script
        src="https://kit.fontawesome.com/af67ca5a39.js"
        crossorigin="anonymous"
      ></script>
    </>
  )
}
