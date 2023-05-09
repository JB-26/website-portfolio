import * as React from 'react';
import Header from '../components/header';
import Footer from '../components/footer';
import Image from '../images/about-image_2.png';
import Image2 from '../images/tokyo_2.png';

const about = () => {
    return (
        <div>
            <Header></Header>
            <h1 class='work_title'>A bit about Joshua Blewitt</h1>
            <i class='about-sub'>Joshua Blewitt is a Test Engineer, hobbyist developer and problem solver.</i>
            <div class='about-box'>
                <div class='column-about'>
                    <p>
                        <img id='image-about-right' src={Image} alt='I sure love donuts 🍩'></img>
                        I'm an IT Professional with about 9 years of experience. I'm currently a Software Test Engineer
                        at IQVIA. I've previously worked for companies like Domino's Pizza Group. I've mostly worked
                        within testing of software. I enjoy programming as a hobby and problem solving.
                        <br></br>
                        <br></br>I attended Anglia Ruskin University (Cambridge Campus), and graduated with a First
                        Class Degree with honours in Computer Science in 2014. During my time at University I secured an
                        internship with Citrix. Throughout my time studying I began to discover my interests in
                        development, UX and analysis.
                        <br></br>
                        <br></br>I studied modules such as; design for the internet, fundamentals of design, interaction
                        and usability, computing research methodologies, professional issues and mobile technology.
                    </p>
                </div>
            </div>
            <hr className='fill'></hr>
            <div class='about-box'>
                <div class='column-about'>
                    <p>
                        <img id='image-about-left' src={Image2} alt='Tokyo Skytree!'></img>
                        After graduating, I also found my joy in travelling. I've travelled to many countries, including
                        America, Japan, France and Spain (Tokyo is a place that I'd like to visit again someday).
                        <br></br>
                        <br></br>
                        This website serves as a place for me to share my interests, practice and learn more about
                        various topics. Including; Web Development, Data Science, UX and testing. I've taken several
                        courses on Udemy and LinkedIn Learning covering Python, UX, and Web Development. I use the
                        knowledge that I've gained from these courses on various personal projects such as the{' '}
                        <a href='https://github.com/JB-26/f1-2022-analysis'>F1 Data Analysis project.</a>
                        <br></br>
                        <br></br>I continue to learn by reading, watching videos and taking courses to expand my
                        knowledge and way of thinking. Personal devleopment continues to be important to me as I want to
                        improve my skills in being a better problem solver.
                        <br></br>
                        <br></br>
                        I'm a big fan of retro games (I mostly collect games for the Sega Saturn, Mega Drive and SNES.
                        I'd like to expand my collection for the Game Boy and PlayStation systems), programming,
                        podcasts and a little bit of music here and there (with some photography thrown in as well). I
                        consider myself to be a donut connoisseur.
                    </p>
                </div>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default about;

export function Head() {
    return (
        <>
            <title>Joshua Blewitt - About</title>
            <meta charSet='utf-8' />
            <script src='https://kit.fontawesome.com/af67ca5a39.js' crossorigin='anonymous'></script>
        </>
    );
}
