import React from "react"
import Header from "../components/header"
import Footer from "../components/footer"
import { Helmet } from "react-helmet"
import Image from "../images/about-image.jpg"
import Image2 from "../images/tokyo.jpg"

export default () => (
  <div>
	<Helmet>
	  <meta charSet="utf-8" />
	  <title>Joshua Blewitt - About</title>
	</Helmet>
	<Header></Header>
	<h1 class="work_title">A bit about Joshua Blewitt</h1>
	<i class="about-sub">Joshua Blewitt is a Test Engineer, hobbyist developer and aspiring Data Scientist.</i>
	<div class="about-box">
		<div class="column-about">
			<p><img id="image-about-right" src={Image} alt="I sure love donuts 🍩"></img>I'm an IT Professional with about 7 years of experience. I'm currently a Software Test Engineer at Linguamatics (part of IQVIA). I've previously worked for companies like Domino's Pizza Group. I've mostly worked within testing of software.
			<br></br>
			<br></br>
			I attended Anglia Ruskin University (Cambridge Campus), and graduated with a First Class Degree with honours in Computer Science in 2014. During my time at University I secured an internship with Citrix. Throughout my time studying I began to discover my interests in development and UX.
			</p>
		</div>
	</div>
	<hr className="fill"></hr>
	<div class="about-box">
		<div class="column-about">
			<p><img id="image-about-left" src={Image2} alt="Tokyo Skytree!"></img>After graduating, I also found my joy in travelling. I've travelled to many countries, including America, Japan, France and Spain (Tokyo is a place that I'd like to visit again someday).<br></br><br></br>
			This website serves as a place for me to share my interests, practice and learn more about various topics. Including; Web Development, Data Science, UX and testing. I've taken several courses on Udemy and LinkedIn Learning covering Python, UX, Web Development and other languages (like Ruby)<br></br><br></br>
			Big fan of retro games (I mostly collect games for the Sega Saturn, Mega Drive and SNES), programming, podcasts and a little bit of music here and there (with some photography thrown in as well). I consider myself to be a donut connoisseur.</p>
		</div>
	</div>
	<Footer></Footer>
  </div>
)
