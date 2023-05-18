import React from 'react';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import EmailIcon from '@material-ui/icons/Email';
import  GitHubIcon from '@material-ui/icons/GitHub';
import '../styles/Home.css';

function Home() {
    return (
    <div className='home'>
        <div className='about'>
            <h2> Hi, My name is Ohmarx</h2>
            <div className='prompt'>
                <p>A fullstack developer student with a passion for technology.
                </p>
                <LinkedInIcon />
                <EmailIcon />
                <GitHubIcon />
            </div>
        </div>
        <div className='skills'>
            <h1>Skills</h1>
            <ol className='list'>
                <li className='item'>
                    <h2>Front-End</h2>
                    <span>
                        blah blah
                    </span>
                </li>
                <li className='item'>
                    <h2>Back-End</h2>
                    <span></span>
                </li>
                <li className='item'>
                    <h2>Languages</h2>
                    <span></span>
                </li>

            </ol>
        </div>

    </div>
   ) 
}
export default Home;