import * as React from 'react';
import Header from '../components/header';
import Footer from '../components/footer';
import Image from '../images/new_2023.webp';

const index = () => {
    return (
        <div>
            <link rel="preload" href="https://ka-f.fontawesome.com/"></link>
            <Header></Header>
            <div className='content'>
                <div className='left'>
                    <h1 id='indexHeader'>
                        Hey, I'm <h1 id='name'>Joshua Blewitt </h1>
                        <span role='img' aria-label='string'>
                            👋
                        </span>
                    </h1>
                    <hr className='fill'></hr>
                    <i id='known'>But you can call me JB.</i>
                    <p>
                        I'm a hobbyist developer, technology advocate and curious mind that's based in the United
                        Kingdom. My current work as a Test Engineer allows me to explore software and champion quality.
                        In my spare time, I enjoy collecting and playing retro games, listening to podcasts, and
                        travelling.
                    </p>
                    <div id='buttonContainer'>
                        <a id='emailButton' href='mailto:joshblewitt@protonmail.com'>
                            Get in touch! <i className='fa-regular fa-envelope fa-bounce'></i>
                        </a>
                    </div>
                </div>
                <div className='right'>
                    <img id='image' src={Image} alt='Me at Dishoom in London!'></img>
                </div>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default index;

export function Head() {
    return (
        <>
            <meta charSet='utf-8' name="The personal website of IT Professional, Joshua Blewitt"/>
            <title>Joshua Blewitt - Home</title>
            <script src='https://kit.fontawesome.com/af67ca5a39.js' crossOrigin='anonymous'></script>
        </>
    );
}
