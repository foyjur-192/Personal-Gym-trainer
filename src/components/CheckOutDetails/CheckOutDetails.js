import React from 'react';
import './CheckOutDetails.css'

const CheckOutDetails = (props) => {
    const {name,price,img} = props.detail;
    return (
        <div className='box-container'>
            <div><img src={img} alt="" /></div>
            <div>{name}</div>
            <div>{price}</div>
            <button className='btn'>Payment</button>
        </div>
    );
};

export default CheckOutDetails;