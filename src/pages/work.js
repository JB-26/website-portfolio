import React from "react"
import Header from "../components/header"
import Footer from "../components/footer"
import Article from "../components/article"
import { Helmet } from "react-helmet"

export default () => (
  <div>
    <Helmet>
      <meta charSet="utf-8" />
      <title>Joshua Blewitt - Work</title>
    </Helmet>
    <Header></Header>
    <Article
      headerTextOne="This web site 📜"
      introText="This web page is a new version of my personal website. The previous version was made using the CSS framework Bulma. This new one is using Gatsby."
      techText="This web page was developed by using Gatsby - an open source framework based on React."
      url="https://gitlab.com/JoshBl_/website-portfolio"
    ></Article>
    <Article
      headerTextOne="The Video Game API 🎮"
      introText="The Video Game API is a RESTful API that is hosted on Heroku"
      techText="This web application was developed with; Python (Flask) and Bootstrap"
      url="https://github.com/JB-26/video-game-api"
    ></Article>
    <Article
      headerTextOne="Vehicle Manager 🚗"
      introText="The Vehicle Manager is a CLI based program that allows users to add vehicles to a garage and manage them."
      techText="This application was developed in Python"
      url="https://github.com/JB-26/python-vehicle-manager"
    ></Article>
    <Article
      headerTextOne="Exchange Rate 📈"
      introText="The exchange rate program is a CLI that allows users to find current and historical exchange rates and display them in graphs and have them exported to a CSV file"
      techText="This application was developed in Python and uses Pandas and Plotly for data analysis."
      url="https://github.com/JB-26/python-exchange-rate"
    ></Article>
    <Article
      headerTextOne="HTTParty with Ruby 💎"
      introText="This is a CLI that communicates with the Video Game API, being able to add, remove, edit and display games."
      techText="This application was developed in Ruby with the HTTParty Gem."
      url="https://github.com/JB-26/ruby-HTTParty-video-game-api"
    ></Article>
    <h1>Other work</h1>
    <p class="work">
      Want to see my other work and certifications? Check out the icons below!
    </p>
    <Footer></Footer>
  </div>
)
