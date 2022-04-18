import React from 'react';
import image from '../../Image/photo.jpg'
import './About.css'
const About = () => {
    return (
        <div className='flex-box'>
            <div className='img'>
                <img src={image} alt="" />
            </div>
            <div className='about'>
                <h3>Name : Foyjur Rahman</h3>
                <h4>About my Journey as a Developer</h4>
                <p>
                    My name is Royjur Rahman.I started my developer journey in 2019.I spent 7 months for learning html and css after that I quite for survive my passion.After that I learnt UI/UX design and started my freelancing career.I have designed So many projects in several market places.I got some success not much but Alhamdulilah.I never forget about my passion then taken decision in 2021 to complete my 2019 vision and mission.I was following Jhankar brother youTube channel.When he releases his full web development course that time I did't have enough money to buy the course.When I earned money then I decided to buy this course I knew its best option for me.After completing BBA It was not easy to start career as a developer.It was painful and so many hard broken memory but I don't like to quite.I always fall forward Its my habit.Next mission is to land a job in usa and Canada as a remote react developer.That all about me.Special Thanks to Jhanker Mahbub brother for his innovative course.
                </p>
            </div>
        </div>
    );
};

export default About;