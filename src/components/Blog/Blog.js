import React from 'react';
import './Blog.css'
const Blog = () => {
    return (
        <div className='boxes'>
            <div className='Question1'>
                <h2>Difference between `authorization` and `authentication`??</h2>
                <h4>Authentication</h4><br />
                <p>1.Authentication verifies who the consumer is.<br /> <br />
                    2.Authentication works via passwords, one-time pins, biometric facts, and different facts furnished or entered through the consumer.
                    3.Authentication is step one of a very good identification and get admission to control process.<br /><br />
                    4.Authentication is seen to and partly changeable through the consumer.
                    <br /><br />
                    Example: By verifying their identification, personnel can benefit get admission to to an HR software that consists of their private pay facts, holiday time, and 500K
                    data. </p>


                    <h4>Authorization</h4><br />
                <p>1.Authorization determines what assets a consumer can get right of entry to..<br /> <br />
                    2.Authorization works thru settings which can be carried out and maintained via way of means of the organization.
                    <br /><br /> 3.Authorization continually takes vicinity after authentication.<br /><br />
                    4.Authorization isn’t seen to or changeable via way of means of the consumer.
                    <br /><br />
                    Example: Once their degree of get right of entry to is authorized, personnel and HR managers can get right of entry to one-of-a-kind tiers of statistics primarily based totally at the pe
                    </p>
            </div>
            <br/>
            <br/>
            <div className='Question2'>
            <h2>Why are you using `firebase`? What other options do you have to implement authentication?</h2>
            <br/>
             <p>Save time on growing Web service strategies for authentication : Instead, you could simply have a technique to keep consumer statistics after the consumer authenticates with Firebase. Also, there may be extensive time stored on account that you could keep away from growing server-aspect strategies for exceptional forms of token verification if you need to feature social logins like Facebook and Google. All so as to be dealt with successfully with Firebase.</p>
            <p>Several open-supply options provide some distance extra advantages than the usage of a proprietary one.</p>
           <br/>
            
            <p className='bold'>What other options do you have to implement authentication?</p>
            <p>
            <h4>1.Parse</h4> 
            Parse is a entire open-supply software stack and backend framework that gives a group of equipment and functions that will help you increase your apps.
            </p>

         
            <p>
            <h4>2.Back4App</h4> 
            Back4App is an open source, low code, backend opportunity to Firebase that’s primarily based totally at the Parse platform. The software program lets in you to increase cutting-edge apps on a international scale and quicker with out handling infrastructure.
            </p>

            <p>
            <h4>3.AWS Amplify</h4> 
            AWS is a cloud platform with the aid of using Amazon that offers a hard and fast of equipment and services, which may be used on their personal or together. Mobile and front-give up builders can use AWS Amplify to construct scalable full-stack apps powered with the aid of using the platform.
            </p>
            <p>
            <h4>4.Kuzzle</h4> 
            Kuzzle is some other open supply opportunity to Firebase that facilitates you resolve numerous virtual wishes which include unmarried sign-on, collaboration, messaging, secondary screens, and more.This cross-era and cross-enterprise platform is beneficial in diverse tasks along with constructing net or cellular apps, IoT apps, and middleware.
            </p>
            </div>
            <br/>
            <br/>
            <br/>
            <div className='Question3'>
            <h2>What other services does `firebase` provide other than authentication??</h2> <br/>
           <p>High technical documentation, Easy and short set-up, In-constructed database, JSON garage data, No custom code, Backup add without delay to Google cloud garage… phew... There is extra to the listing of what Firebase has to provide to the developers. It is a device broadly used to build, improve, and develop the app. If you're a backend engineer, you probable worry the rising Firebase reputation that eases out an adequate quantity of improvement tasks. However, don’t rush into decisions, Firebase knows the significance of backend improvement and assists you withinside the technique of improvement. Having stated that, there's usually any other aspect to the story. Firebase if now no longer really useful for lots app improvement eventualities. This weblog stocks essential facts approximately firebase services, blessings of the usage of firebase, and additionally approximately the eventualities whilst you shouldn’t move for Firebase.</p>
            </div>
        </div>
    );
};

export default Blog;