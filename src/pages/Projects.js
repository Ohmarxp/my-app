import React from 'react';
import ProjectItem from '../components/ProjectItem';
import Proj1 from '../assets/6029974.jpg';
import Proj2 from '../assets/372581.jpg';
import Proj3 from '../assets/Kai1.jpg';
import Proj4 from '../assets/Magic-Boat.jpg';
import Proj5 from '../assets/Kaiart1.jpg';
import Proj6 from '../assets/bricks2.jpg';
import '../styles/Projects.css'


function Projects() {
    return (
    <div className='projects'>
        <h1>Work</h1>
        <div className='projectList'>
            <a href = 'https://secret-tundra-26696.herokuapp.com/' target="_blank" rel="noreferrer"><ProjectItem name='MoJobs' image={Proj1}/></a>
            <a href = 'https://bsmisson.github.io/HikR/' target="_blank" rel="noreferrer"> <ProjectItem name='HikR' image={Proj2}/></a>
            <a href = 'https://ohmarxp.github.io/my-portfolio//' target="_blank" rel="noreferrer"><ProjectItem name='HTML-CSS-Portfolio' image={Proj3}/></a>
            <a href = 'https://polar-hollows-15544.herokuapp.com/notes' target="_blank" rel="noreferrer"><ProjectItem name='saveMyNotes' image={Proj4}/></a>
            <a href = 'https://sleepy-temple-38089.herokuapp.com/' target="_blank" rel="noreferrer"><ProjectItem name='iText' image={Proj5}/></a>
            <a href = 'https://ohmarxp.github.io/greater-security/' target="_blank" rel="noreferrer"><ProjectItem name='Greater-Security' image={Proj6}/></a>
        </div>
    </div>
    )  
}
export default Projects;