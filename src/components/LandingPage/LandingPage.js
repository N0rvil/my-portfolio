import React from 'react';

import './LandingPage.scss';

const LandingPage = () =>{
    return (
        <div className='landingpage' style={{ backgroundImage: "url('/images/landing-bg.png')"}} id='home'>  
            <div className='landingpage__content'>
                <div className='landingpage__box'>
                    <div>
                        <h1 className='landingpage__header'>welcome to my protfolio</h1>
                        <h2 className='landingpage__text'>scroll to explore</h2>
                    </div>
                    <a href='#about' className='landingpage__btn'><img src='/images/arrow-1.png' alt='arrow' /></a>
                </div>
                <div className='landingpage__banner'>
                    <h2 className='landingpage__banner-text'>
                        i am full stack web developer
                    </h2>
                </div>
            </div>
        </div>
    ) 
};

export default LandingPage;