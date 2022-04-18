import React from 'react';
import './SocialLogin.css'
import logo from "../../Image/Google logo.png"
import { useSignInWithGoogle } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import { useLocation, useNavigate } from 'react-router-dom';

const SocialLogin = () => {
    const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
    const location = useLocation();
    const from = location.state?.from?.pathname || '/';
    const navigate = useNavigate();

    if (error) {
        return (
          <div>
            <p style={{color:'red'}}>Error: {error.message}</p>
          </div>
        );
      }
   
      if (user) {
        navigate(from, { replace: true });
    }




    return (
        <div className='btn-space'>
            <button onClick={() => signInWithGoogle()} className='buttonG'> <img style={{width: '25px', height:'25px'}} src={logo} alt="" />  Sign up with Google</button>
        </div>
    );
};

export default SocialLogin;