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
        <h1>My Work</h1>
        <div className='projectList'>
            <ProjectItem name='MoJobs' image={Proj1}/>
            <ProjectItem name='HiKr' image={Proj2}/>
            <ProjectItem name='Kai' image={Proj3}/>
            <ProjectItem name='Magic Boat' image={Proj4}/>
        </div>
    </div>
    )  
}
export default Projects;