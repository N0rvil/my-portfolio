import React from 'react';

import './Navbar.scss';

const Navbar = () =>{

    const scrollWidthOffset = (el) => {
        const yCoordinate = el.getBoundingClientRect().top + window.pageYOffset;
        const yOffset = -90; 
        window.scrollTo({ top: yCoordinate + yOffset, behavior: 'smooth' })
    }


    return (
        <nav className='navbar'>  
            <h2 className='navbar__header'>FD</h2>
            <div className='navbar__box'>
                <a onScroll={scrollWidthOffset} className='navbar__icon-link' href='#home'><img className='navbar__icon-medium' alt='icon' src='/images/home-icon.png' /></a>
                <a onScroll={scrollWidthOffset} className='navbar__icon-link' href='#about'><img className='navbar__icon-medium' alt='icon' src='/images/about-icon.png' /></a>
                <a onScroll={scrollWidthOffset} className='navbar__icon-link' href='#skills'><img className='navbar__icon-medium' alt='icon' src='/images/skills-icon.png' /></a>
                <a onScroll={scrollWidthOffset} className='navbar__icon-link' href='#projects'><img className='navbar__icon-medium' alt='icon' src='/images/projects-icon.png' /></a>
                <a onScroll={scrollWidthOffset} className='navbar__icon-link' href='#contact'><img className='navbar__icon-medium' alt='icon' src='/images/contact-icon.png' /></a>
            </div>

            <div className='navbar__social'>
                <a className='navbar__icon-link' href='https://www.facebook.com/profile.php?id=100011072650304'><img className='navbar__icon-small' alt='icon' src='/images/fb-icon.png' /></a>
                <a className='navbar__icon-link' href='https://www.instagram.com/dudafilip80'><img className='navbar__icon-small' alt='icon' src='/images/ig-icon.png' /></a>
            </div>    
        </nav>
    ) 
};

export default Navbar;