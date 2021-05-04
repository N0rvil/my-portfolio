import React from 'react';

import './Skills.scss';

const Skills = () =>{
    return (
        <div className='skills' style={{ backgroundImage: "url('/images/skills-bg.png')"}} id='skills'>  
            <h1 className='skills__header'>My skills</h1>
            <div className='skills__box'>
                <img className='skills__icon' src='/images/html-icon.png' alt='icon' />
                <img className='skills__icon' src='/images/css-icon.png' alt='icon' />
                <img className='skills__icon' src='/images/js-icon.png' alt='icon' />
                <img className='skills__icon' src='/images/sass-icon.png' alt='icon' />
                <img className='skills__icon' src='/images/react-icon.png' alt='icon' />
                <img className='skills__icon' src='/images/node_js-icon.png' alt='icon' /> 
            </div>
        </div>
    ) 
};

export default Skills;