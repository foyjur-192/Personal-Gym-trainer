import { signOut } from 'firebase/auth';
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import auth from '../../firebase.init';
import './Header.css'

const Header = () => {
    const [user] = useAuthState(auth);
    const handleSignOut = () => {
        signOut(auth);
    }
    return (
        <div className='background'>
         <nav className='navbar'>
            <h3>AKSfitness trainer</h3>
            <div className="navLink">
          
            <Link to='home'>Home</Link>
           <Link to='blog'>Blog</Link>
           <Link to='about'>About</Link>   
           

        { 
        user ?
        <button onClick={handleSignOut} className='btn'>Logout</button>
        :
        <Link to='login'>Login</Link>}
        
        </div>
        </nav>
        </div>
    
    );
};

export default Header;