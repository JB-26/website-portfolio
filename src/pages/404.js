import * as React from 'react';
import Header from '../components/header';
import Footer from '../components/footer';

const errorPage = () => {
    return (
        <div>
            <Header></Header>
            <div className='errorMessage'>
                <h1>
                    Whoa!{' '}
                    <span role='img' aria-label='string'>
                        🤯
                    </span>
                </h1>
                <h2>You've found the error page!</h2>
                <h2>Why not press the icon at the top to go back to the home page?</h2>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default errorPage;

export function Head() {
    return (
        <>
            <meta charSet='utf-8' />
            <title>Whoa!</title>
            <script src='https://kit.fontawesome.com/af67ca5a39.js' crossorigin='anonymous'></script>
        </>
    );
}
