import React from 'react';
import ProjectItem from '../components/ProjectItem';
import Proj1 from '../assets/6029974.jpg';
import Proj2 from '../assets/372581.jpg';
import Proj3 from '../assets/Kai1.jpg';
import Proj4 from '../assets/Magic-Boat.jpg';
import '../styles/Projects.css'


function Projects() {
    return (
    <div className='projects'>
        <h1>Work</h1>
        <div className='projectList'>
            <a href = 'https://secret-tundra-26696.herokuapp.com/' target="_blank" rel="noreferrer"><ProjectItem name='MoJobs' image={Proj1}/></a>
            <a href = 'https://bsmisson.github.io/HikR/' target="_blank" rel="noreferrer"> <ProjectItem name='HikR' image={Proj2}/></a>
            <a href = 'https://ohmarxp.github.io/my-portfolio//' target="_blank" rel="noreferrer"> <ProjectItem name='HTML-CSS-Portfolio' image={Proj3}/></a>
            <ProjectItem name='Magic Boat' image={Proj4}/>
        </div>
    </div>
    )  
}
export default Projects;