
import React from 'react';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import TwitterIcon from '@material-ui/icons/Twitter';
import  GitHubIcon from '@material-ui/icons/GitHub';
import EmailIcon from '@material-ui/icons/Email';

import "../styles/Footer.css";

function Footer() {
    return (
    <div className='footer'>
        <div className='socialMedia'>
            <a href = 'https://www.linkedin.com/in/ohmarxpaniagua-aab8338b/' target="_blank" rel="noreferrer"><LinkedInIcon/></a>
            <a href = 'https://github.com/Ohmarxp' target="_blank" rel="noreferrer"><GitHubIcon/></a>
            <a href = 'https://twitter.com/Ohmarx_P' target="_blank" rel="noreferrer"><TwitterIcon/></a>
            <EmailIcon />
        </div>
        <p> &copy; 2023 Ohmarx.com</p>
    </div>
    )
}

export default Footer;