import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css'

const Footer = () => {
    return (
        <div className='footerBackground'>
            <div className='containers'>
            <div className='links'>
            <Link to='/home'>Home</Link>
            <Link to='/blog'>Blog</Link>
            <Link to='/about'>About</Link>
            </div>
            <div className='link'><p>AKS © 2022 All right  reserved </p></div>
            </div>
           
         
        </div>
    );
};

export default Footer;