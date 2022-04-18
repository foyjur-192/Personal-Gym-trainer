import React from 'react';
import { StarIcon,  } from '@heroicons/react/solid'
import './HomeReview.css'
const HomeReview = (props) => {
    const {names,detail} = props.review;
    return (
        <div className='backColor'>
            <p>{detail}</p>
            <div className='starGroup'>
                    <p><StarIcon></StarIcon></p>
                    <p><StarIcon></StarIcon></p>
                    <p><StarIcon></StarIcon></p>
                    <p><StarIcon></StarIcon></p>
                    <p><StarIcon></StarIcon></p>
                </div>
            <h4>-{names}</h4>
        </div>
    );
};

export default HomeReview;