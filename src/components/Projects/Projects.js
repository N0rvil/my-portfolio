import React from 'react';

import './Projects.scss';

const Projects= () =>{

    const projects = [
        {
            name: 'jarvis',
            about: 'Fullstack project created with react, node-js, sass Using advanced react and node-js libraries, project indluding authentication system',
            background: '/images/jarvis-bg.png',
            website: 'https://jarvis-frontend.herokuapp.com/',
            github: 'https://github.com/N0rvil/jarvis-frontend',
            icons: ['/images/react-icon.png', '/images/node_js-icon.png', '/images/sass-icon.png']
        },
        {
            name: 'traplifetatoo',
            about: 'Frontend project created for guy who does tatoos, created with react and sass, created in grupe with Lukas Celnar and Tomas Hlasensky',
            background: '/images/traplifetatoo-bg.png',
            website: 'https://traplifetattoo.netlify.app/',
            github: 'https://github.com/N0rvil/traplifetattoo',
            icons: ['/images/react-icon.png', '/images/sass-icon.png']
        },
        {
            name: 'ren-dek',
            about: 'Frontend project created for guy who does electroinstalations to present his work, created with react and sass, not finished yet',
            background: '/images/rendek-bg.png',
            website: 'https://wonderful-lamarr-af123c.netlify.app/',
            github: 'https://github.com/N0rvil/elmont',
            icons: ['/images/react-icon.png', '/images/sass-icon.png']
        },
    ]

    const renderProjects = () => {
        const listOfProjects = projects.map((project, i) => {
            return (
                <li className='projects__item' key={i} style={{ backgroundImage: `url(${project.background})`}}>
                    <div className='projects__item-info'>
                        <h2 className='projects__item-header'>{project.name}</h2>
                        <div className='projects__item-underline'></div>
                        <p className='projects__item-about'>{project.about}</p>
                        {project.icons.map((icon, i) => {
                            return <img className='projects__item-icon' key={i} alt='icon' src={icon} />
                        })}
                    </div>
                    <div className='projects__item-box'>
                        <a className='projects__item-link' href={project.website}>
                            <button className='projects__item-btn projects__item-btn--1'>Website<img alt='icon' src='/images/website-icon.png' /></button>
                        </a>
                        <a className='projects__item-link' href={project.github}>
                            <button className='projects__item-btn projects__item-btn--2'>Github<img alt='icon' src='/images/github-icon.png' /></button>
                        </a>
                    </div>
                </li>
            )
        })
        return <ul className='projects__list'>{listOfProjects}</ul>
    }

    return (
        <div className='projects' id='projects'>  
            <h1 className='projects__header'>My projects</h1>
            {renderProjects()}
        </div>
    ) 
};

export default Projects;