import * as React from 'react';
import { Link } from 'gatsby';

const props = () => {
    return (
        <div className='container'>
            <div className='row'>
                <div className='boxImage'>
                    <img src={props.previewImage} className='image'></img>
                </div>
                <div className='column'>
                    <div className='box'>
                        <Link to={props.blogLink} className='posts'>
                            <h3>{props.blogPostTitle}</h3>
                        </Link>
                        <hr></hr>
                    </div>
                    <div className='box'>
                        <p id='postSubtitle'>{props.blogPostDescription}</p>
                        <p id='postSubtitle'>{props.blogPostPublishDate}</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default props;
