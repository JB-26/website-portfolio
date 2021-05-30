import React from "react"
import Header from "../components/header"
import Footer from "../components/footer"
import { Helmet } from "react-helmet"

export default () => (
  <div>
    <Helmet>
      <meta charSet="utf-8" />
      <title>Joshua Blewitt - Work</title>
    </Helmet>
    <Header></Header>
    <h1 class="work_title">Work 🛠</h1>
    <h2>Checkout some of my personal projects!</h2>

    <h3>This web site <span role="img" aria-label="page">📜</span></h3>
    <p class='work'>This web page is a new version of my personal website. The previous version was made using the CSS framework Bulma. This new one is using <a href="https://www.gatsbyjs.com/">Gatsby</a> - an open source framework based on React.</p>
    <p class="work">You can find the project <a href="https://gitlab.com/JoshBl_/website-portfolio">here</a></p>

    <h3>The Video Game API <span role="img" aria-label="controller">🎮</span></h3>
    <p class='work'>The Video Game API is a RESTful API that is hosted on Heroku. This web application was developed with; Python (Flask) and Bootstrap.</p>
    <p class="work">You can find the project <a href="https://github.com/JB-26/video-game-api">here</a></p>

    <h3>Vehicle Manager <span role="img" aria-label="car">🚗</span></h3>
    <p class='work'>The Vehicle Manager is a CLI based program that allows users to add vehicles to a garage and manage them. This application was developed in Python.</p>
    <p class="work">You can find the project <a href="https://github.com/JB-26/python-vehicle-manager">here</a></p>

    <h3>Exchange Rate <span role="img" aria-label="chart">📈</span></h3>
    <p class='work'>The exchange rate program is a CLI that allows users to find current and historical exchange rates and display them in graphs and have them exported to a CSV file. This application was developed in Python and uses Pandas and Plotly for data analysis.</p>
    <p class="work">You can find the project <a href="https://github.com/JB-26/python-exchange-rate">here</a></p>

    <h1>Certifications <span role="img" aria-label="graduation">🎓</span></h1>
    <h2>Checkout what I've been learning on Udemy!</h2>

    <p class="work"><a href="https://www.udemy.com/certificate/UC-09370b44-59ef-4f4f-91d6-f814c4390916/">2021 Complete Python Bootcamp From Zero to Hero in Python</a></p>
    <p class="work"><a href="https://www.udemy.com/certificate/UC-363117e1-9823-497b-99d0-9914a36520f7/">Python for Data Science and Machine Learning Bootcamp</a></p>
    <p class="work"><a href="https://www.udemy.com/certificate/UC-8c3cecfc-e86d-42e8-869f-a362d6ce890a/">Python and Flask Bootcamp: Create Websites using Flask!</a></p>
    <p class="work"><a href="https://www.udemy.com/certificate/UC-40c7c468-3ad5-49d5-a04d-ee322f2e9815/"> The Complete SQL Bootcamp 2021: Go from Zero to Hero</a></p>
    
    <h1>CV <span role="img" aria-label="newspaper">📰</span></h1>
    <h2>Want to see my CV? Click the button below to view it!</h2>
    <div id="buttonContainer">
      <a id="emailButton" href="https://1drv.ms/b/s!ApB6zBDHcz-RgdktFo-akjexf6_8zA?e=AqcEHr">
        Open my CV!
      </a>
    </div>
    <h1>Other work</h1>
    <p class="work">
      Want to see my other work and certifications? Check out the icons below!
    </p>
    <Footer></Footer>
  </div>
)
