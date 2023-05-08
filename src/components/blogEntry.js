import * as React from 'react';
import { Link } from 'gatsby';

const props = () => {
    return (
        <div class='container'>
            <div class='row'>
                <div class='boxImage'>
                    <img src={props.previewImage} class='image'></img>
                </div>
                <div class='column'>
                    <div class='box'>
                        <Link to={props.blogLink} className='posts'>
                            <h3>{props.blogPostTitle}</h3>
                        </Link>
                        <hr></hr>
                    </div>
                    <div class='box'>
                        <p id='postSubtitle'>{props.blogPostDescription}</p>
                        <p id='postSubtitle'>{props.blogPostPublishDate}</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default props;
