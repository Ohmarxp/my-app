import React from 'react';
import HomeItem from '../components/ProjectItem';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import EmailIcon from '@material-ui/icons/Email';
import GitHubIcon from '@material-ui/icons/GitHub';
import foto from '../assets/103022.jpg';
import '../styles/Home.css';

function Home() {
    return (
    <div className='home'>
        <div className='about'>
        <HomeItem image={foto}/>
            <h2> Hi, My name is Ohmarx Paniagua</h2>
            <div className='prompt'>
                <p>I am a full stack developer student with a passion for technology.
                </p>
                <a href = 'https://www.linkedin.com/in/ohmarxpaniagua-aab8338b/' target="_blank" rel="noreferrer"><LinkedInIcon/></a>
                <EmailIcon />
                <a href = 'https://github.com/Ohmarxp' target="_blank" rel="noreferrer"><GitHubIcon/></a>
            </div>
        </div>
        <div className='skills'>
            <h1>Skills:</h1>
            <ol className='list'>
                <li className='item'>
                    <h2>Front-End</h2>
                    <span>
                       HTML, CSS, JavaScript
                    </span>
                </li>
                <li className='item'>
                    <h2>Back-End</h2>
                    <span>
                        MySQL, Express
                    </span>
                </li>
                <li className='item'>
                    <h2>Languages</h2>
                    <span>
                        HTML, CSS, JavaScript, Visual Basic
                    </span>
                </li>

            </ol>
        </div>

    </div>
   ) 
}
export default Home;