import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './HomeViewer.css'

const HomeViewer = (props) => {
    const {name,details,img} = props.detail;
    const navigate = useNavigate();

    return (
        <div>   
        <div className='backgroundColor'>
        <img src={img} alt="" />
        <h4>{name}</h4>
        <p>{details}</p>
        <h2 className='price'>$299<span>per year</span></h2>
        <button className='button' onClick={()=>navigate('/checkout')}>Checkout</button>
    </div>
    
    </div>
     
    );
};

export default HomeViewer;