import * as React from "react"
import {Link, useStaticQuery, graphql} from "gatsby"

const pinnedPost = () => {
    const data = useStaticQuery(graphql`
    {
      allMarkdownRemark(
        filter: {frontmatter: {title: {eq: "Why the Milton Keynes tech community is important"}}}
      ) {
        totalCount
        edges {
          node {
            frontmatter {
              title
              date(formatString: "DD MMMM, YYYY")
              description
              image
            }
            fields {
              slug
            }
          }
        }
      }
    }
  `)
    return (
        <>
            <div class="outer">
                <div class="center">
                    <div class="outerPinned">
                        <h1>Pinned Post <i class="fa-solid fa-thumbtack"></i></h1>
                        {data.allMarkdownRemark.edges.map(({node}) => (
                            <div class="containerPinned" key={node.id}>
                                <div class="rowPinned">
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
            </div>
        </>
    )
}

export default pinnedPost

export function Head() {
    return (
        <>
            <meta charSet="utf-8"/>
            <script
                src="https://kit.fontawesome.com/af67ca5a39.js"
                crossorigin="anonymous"
            ></script>
        </>
    )
}