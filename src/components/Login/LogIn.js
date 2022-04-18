import React, { useRef } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { useSendPasswordResetEmail } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import SocialLogin from '../SocialLogIn/SocialLogin';
import './LogIn.css'
// import {toast } from 'react-toast';

const LogIn = () => {
    const emailRef = useRef('');
    const passwordRef = useRef('');
    const navigate = useNavigate();
    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useSignInWithEmailAndPassword(auth);

    const [sendPasswordResetEmail, sending] = useSendPasswordResetEmail(auth);
    const location = useLocation();
    const from = location.state?.from?.pathname || '/';


    if (user) {
        navigate(from, { replace: true });
    }

    // if (error) {
    //     errorElement = <p style={{color:'red'}}>Error: {error?.message}</p>
    // }

    const handleUserSignIn = event => {
        event.preventDefault();
        const email = emailRef.current.value;
        const password = passwordRef.current.value;
        createUserWithEmailAndPassword(email, password);
    }

    // // const resetPassword = (async) => {
    // //     const email = emailRef.current.value;
    // //     if (email) {
    // //        await sendPasswordResetEmail(email);
    // //         toast('Sent email');
    // //     }
    // //     else{
    // //         toast('please enter your email address');
    // //     }
    // }


    return (
        <div className='form-container'>
            <div>
                <h2 className='form-title' >Login</h2>
                <form onSubmit={handleUserSignIn}  >
                    <div className="input-group">
                        <label htmlFor='email'>Email</label>
                        <input ref={emailRef} type="email" name="email" id="" required />
                    </div>

                    <div className="input-group">
                        <label htmlFor='Password'>Password</label>
                        <input ref={passwordRef} type="password" name="password" id="" required />
                    </div>
                    <p style={{ color: 'red' }}>{error?.message}</p>
                    {
                        loading && <p>Loading</p>
                    }
                    <input className='form-submit' type="submit" value="Log in" />
                </form>

                <p>OR</p>

                <SocialLogin></SocialLogin>

                <p>
                    AKSFitness trainer <Link className='form-link' to="/signup">Create an Account</Link>
                </p>
                <br/>
                <p className='login-text'>
                    Forget Password? <Link className='form-link' to="/signup">Reset Now</Link>
                </p>

            </div>

        </div>
    );
};

export default LogIn;