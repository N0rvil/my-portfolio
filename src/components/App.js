import React from 'react';

import Navbar from './Navbar/Navbar';
import LandingPage from './LandingPage/LandingPage';
import About from './About/About';
import Skills from './Skills/Skills';
import Projects from './Projects/Projects';
import Contact from './Contact/Contact';

import './App.scss';

const App = () =>{
    return (
        <div className='app'>  
            <div className='app__navbar'>
                <Navbar />
            </div>
            <div className='app__landingpage'>
                <LandingPage />
            </div>
            <div className='app__about'>
                <About />
            </div>
            <div className='app__skills'>
                <Skills />
            </div>
            <div className='app__projects'>
                <Projects />
            </div>
            <div className='app__contact'>
                <Contact />
            </div>
        </div>
    ) 
};

export default App;