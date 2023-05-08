import * as React from 'react';

const Footer = () => {
    return (
        <footer>
            <div className='listHolder'>
                <ul className='footer'>
                    <li className='blog'>
                        <a className='blog' href='https://github.com/JB-26' rel='noopener noreferrer' target='_blank'>
                            <i class='fa-brands fa-github icon'></i>
                        </a>
                    </li>
                    <li className='blog'>
                        <a className='blog' href='https://codepen.io/JayBl' rel='noopener noreferrer' target='_blank'>
                            <i class='fa-brands fa-codepen icon'></i>
                        </a>
                    </li>
                    <li className='blog'>
                        <a
                            className='blog'
                            href='https://www.linkedin.com/in/jblewitt/'
                            rel='noopener noreferrer'
                            target='_blank'
                        >
                            <i class='fa-brands fa-linkedin icon'></i>
                        </a>
                    </li>
                    <li className='blog'>
                        <a
                            className='blog'
                            href='https://mastodon.social/@jblewitt'
                            rel='me'
                            rel='noopener noreferrer'
                            target='_blank'
                        >
                            <i class='fa-brands fa-mastodon icon'></i>
                        </a>
                    </li>
                    <li className='blog'>
                        <a className='blog' href='/rss.xml' rel='noopener noreferrer' target='_blank'>
                            <i class='fa-solid fa-square-rss icon'></i>
                        </a>
                    </li>
                </ul>
            </div>
        </footer>
    );
};

export default Footer;
