import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Footer from '../Footer/Footer';
import HomeReview from '../HomeReview/HomeReview';
import HomeViewer from '../HomeViewer/HomeViewer';
import Hook from '../Hook/Hook';
import Review from '../Review/Review';
import './Home.css'


const Home = () => {
 const [details, setDetails] = Hook();
 const [reviews, setReviews] = Review();
const navigate = useNavigate();


    return (
        <div className='container-box'>
            <div className='BackgroundH'>
                <div className='Hero-text'>
                    <h1 className='text'>
                        I'm Committed <br />
                        for your <span>Fitness</span><br />
                        Journey
                    </h1>
                    <p>You can start with my fitness abortional package <br/> ,Where you can  get All in one package Starting to <br/> continuing your journey guidline</p>
                    <button className='btnH' onClick={()=>navigate('/content')}>Free Resources</button>
                </div>
            </div>
            <div className='textBox'>
                <h3>Why AKS Trining & Consultant package <br/> Worthful  for your journey</h3>
                </div>
            <div className="SectionTwo">
            {
               details.map( detail => <HomeViewer key={detail.id} detail={detail}></HomeViewer> )
            }
            </div>
            <div className='BackgroundC'>
                <div className='Headline3'>
                <h2>My Customer Feedback</h2>
                </div>
          
            <div className='SectionThree'>
           
              {
                  reviews.map(review => < HomeReview review={review}></HomeReview>)
              }
            </div>
            </div>
           
        </div>
    );
};

export default Home;