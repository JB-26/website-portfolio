import * as React from 'react';
import Header from '../components/header';
import Footer from '../components/footer';
import { Link, graphql } from 'gatsby';

const archive = ({ data }) => {
    console.log(data);
    return (
        <div>
            <Header></Header>
            <div>
                <h1 id='blogTitle'>It works on my machine</h1>
                <div id='postCount'>
                    <h4>{data.allMarkdownRemark.totalCount} Posts</h4>
                </div>
                {data.allMarkdownRemark.edges.map(({ node }) => (
                    <div class='container' key={node.id}>
                        <div class='row-archive'>
                            <div class='box-archive'>
                                <Link to={node.fields.slug} className='posts'>
                                    <h3 id='title'>{node.frontmatter.title}</h3>
                                </Link>
                            </div>
                            <div class='box-archive'>
                                <p id='postSubtitle'>{node.frontmatter.description}</p>
                                <p id='postSubtitle'>Published on - {node.frontmatter.date}</p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
            <Footer></Footer>
        </div>
    );
};

export const query = graphql`
    query {
        allMarkdownRemark(sort: { frontmatter: { date: DESC } }) {
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
`;

export default archive;

export function Head() {
    return (
        <>
            <meta charSet='utf-8' />
            <title>Joshua Blewitt - Archive</title>
            <script src='https://kit.fontawesome.com/af67ca5a39.js' crossorigin='anonymous'></script>
        </>
    );
}
