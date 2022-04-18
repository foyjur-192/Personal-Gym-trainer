import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Signup.css'
import auth from '../../firebase.init';
import { useCreateUserWithEmailAndPassword, useUpdateProfile } from 'react-firebase-hooks/auth';
import SocialLogin from '../SocialLogIn/SocialLogin';

const Signup = () => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirm, setConfirm] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate();

    const [ createUserWithEmailAndPassword, user] = useCreateUserWithEmailAndPassword(auth, {sendingEmailVerification: true});
    const [updateProfile, updating, updateError] = useUpdateProfile (auth);

const handleEmailBlur = event => {
    setEmail(event.target.value);
}

const handlePasswordBlur = event => {
    setPassword(event.target.value);
}

const handlePasswordConfirm = event => {
    setConfirm(event.target.value);
}

if(user){
   console.log('user', user);
}

const handleCreateUser = async (event) => {
    event.preventDefault();
    const name = event.target.name.value;
   
if (password !== confirm){
    setError('Your Two passwords did not match')
    return
}

if(password.length < 6) {
    setError ('Password Must be 6 Characters or longer');
    return
}

await createUserWithEmailAndPassword(email, password);
await updateProfile({ displayName: name });
console.log('Updated profile');
navigate('/home')
}




    return (
        <div className='form-container'>
        <div>
        <h2 className='form-title' >Sign up</h2>
        <form onSubmit={handleCreateUser} >

        <div className="input-group">
                <label htmlFor='name'>Name</label>
                <input   type="text" name="name" id="" required/>

            </div>



        <div className="input-group">
                <label htmlFor='email'>Email</label>
                <input onBlur={handleEmailBlur}   type="email" name="email" id="" required/>

            </div>

            <div className="input-group">
                <label htmlFor='Password'>Password</label>
                <input onBlur={handlePasswordBlur}  type="password" name="password" id=""  required/>

            </div>
            <div className="input-group">
                <label htmlFor='Confirm  password'>Confirm password</label>
                <input onBlur={handlePasswordConfirm}  type="confirm password" name="confirm password" id="" required/>
            </div>
            
        <p style={{color: 'red'}}> {error}</p>

            <input className='form-submit' type="submit" value="Sign up" name="submit" required/>
      
        </form>
       
       <SocialLogin></SocialLogin>



       <p className='login-text'>
          Already have an Account??? <Link className='form-link' to="/login"> Log in Now </Link>    
         
       </p>

    
 </div>
</div>
    );
};

export default Signup;