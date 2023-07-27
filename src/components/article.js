import * as React from 'react';

const props = () => {
    return (
        <article className='articleSetup'>
            <div className='card'>
                <div className='top'>
                    <h1>{props.headerTextOne}</h1>
                </div>
                <div className='bottom'>
                    <h2>Introduction</h2>
                    <p>{props.introText}</p>
                    <hr></hr>
                    <h2>Tech Stack</h2>
                    <p>{props.techText}</p>
                    <hr></hr>
                    <h2>Links</h2>
                    <p>
                        You can find the project{' '}
                        <a href={props.url} rel='noopener noreferrer' target='_blank'>
                            here
                        </a>
                    </p>
                </div>
            </div>
        </article>
    );
};

export default props;
