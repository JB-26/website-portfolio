import React from "react"
import Header from "../components/header"
import Footer from "../components/footer"

export default () => (
    <div>
        <Header></Header>
        <div className="errorMessage">
            <h1>Whoa! <span role="img" aria-label="string">🤯</span></h1>
            <h2>You've found the error page!</h2>
            <h2>Why not press the lightning bolt icon to go back to the home page?</h2>
        </div>
        <Footer></Footer>
    </div>
)