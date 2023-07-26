import * as React from 'react';
import Header from '../components/header';
import Footer from '../components/footer';
import PinnedPost from '../hooks/pinnedPostQuery';
import BlogImage from '../images/blog-header.webp';
import { Link, graphql } from 'gatsby';

const blog = ({ data }) => {
    return (
        <div>
            <Header></Header>
            <div>
                <h1 id='blogTitle'>It works on my machine</h1>
                <div id='blogHeaderImageContainer'>
                    <img src={BlogImage} alt="What's it like working in IT." id='blogHeaderImage'></img>
                </div>
                <h2 id='blogSubtitle'>
                    An entertaining and fun blog about development, UX, work, tech and everything that comes with it.
                </h2>
                <h2 id='blogSubtitle'>Opinions (and typos) are my own.</h2>
                <div id='postCount'>
                    <h4 id='blogSubtitle'>
                        Want to see all posts? Visit the <Link to='/archive/'>Archive.</Link> <br />
                        Or if you want to, you can add this blog to your favourite RSS reader! Click{' '}
                        <a href='/rss.xml' target='_blank' rel='noopener noreferrer'>
                            here
                        </a>{' '}
                        for the XML.
                    </h4>
                </div>
                <PinnedPost></PinnedPost>
                <h1 className='blogSectionTitle'>
                    What's new? <i className='fa-solid fa-star'></i>
                </h1>
                <p id='mobileScroll'>
                    <span className='material-symbols-outlined'>swipe_left</span>
                    Swipe left and right to view posts! <span className='material-symbols-outlined'>swipe_right</span>
                </p>
                <div className='outer'>
                    {data.allMarkdownRemark.edges.map(({ node }) => (
                        <div className='container' key={node.id}>
                            <div className='row'>
                                <div className='boxImage'>
                                    <Link to={node.fields.slug} className='posts'>
                                        <img
                                            src={node.frontmatter.image}
                                            id='blogImages'
                                            alt={node.frontmatter.title}
                                        ></img>
                                    </Link>
                                </div>
                                <div className='column'>
                                    <div className='box'>
                                        <Link to={node.fields.slug} className='posts'>
                                            <h3 id='title'>{node.frontmatter.title}</h3>
                                        </Link>
                                        <hr></hr>
                                    </div>
                                    <div className='box'>
                                        <p id='postSubtitle'>{node.frontmatter.description}</p>
                                        <p id='postSubtitle'>Published on - {node.frontmatter.date}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            <Footer></Footer>
        </div>
    );
};

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
`;
export default blog;

export function Head() {
    return (
        <>
            <meta charSet='utf-8' />
            <title>Joshua Blewitt - Blog</title>
            <script src='https://kit.fontawesome.com/af67ca5a39.js' crossOrigin='anonymous'></script>
            <link
                rel='stylesheet'
                href='https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@48,400,0,0'
            />
        </>
    );
}
