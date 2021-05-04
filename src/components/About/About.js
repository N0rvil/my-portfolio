import React from 'react';

import './About.scss';

const About = () =>{
    return (
        <div className='about' id='about'>  
            <div className='about__box about__box-1'>
                <div className='about__info'>
                    <h2 className='about__info-header'>About me</h2>
                    <p className='about__info-text'>
                        Hi my name is Filip Duda I am 18 years old and I am full stack web developer. I am learning this for about 1.5 year and I am really exited about it.
                        I study cyber security on middle school since 2018. I have experience with html, css, sass, javascript, react, node-js. All my apps or pages what I am 
                        creating in REACT because its awsome and i really enjoying work with this framework. I love learning new things and i love to code because it is the future
                        of everything.
                    </p>
                </div>
            </div>
            <div className='about__box about__box-2' style={{ backgroundImage: "url('/images/profile-img.jpg')"}}>
            </div>
        </div>
    ) 
};

export default About;