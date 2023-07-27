import * as React from 'react';
import { Link } from 'gatsby';
import Technologist from '../images/favicon-32x32.webp';

const header = () => {
    return (
        <header>
            <div className='header-item'>
                <Link to='/about/' className='blog'>
                    About
                </Link>
            </div>
            <div id='bolt'>
                <Link to='/' className='blog'>
                    <img src={Technologist} alt='A technologist - which is also the favicon' height="32" width="32"/>
                </Link>
            </div>
            <div className='header-item'>
                <Link to='/blog/' className='blog'>
                    Blog
                </Link>
            </div>
        </header>
    );
};

export default header;
