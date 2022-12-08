import './Projects.css';
import ProjectCard from './ProjectCard'
import projectData  from '../assets/ProjectData.json';

const Projects = () => {
    return (
        <div className="projects-main">
            <h2>Projects</h2>
            <p>Explore some of my projects here!</p>
            <div className='projects-container'>
                {projectData.map((el) => (<ProjectCard project={el}/>))}
            </div>
        </div>
    );
}

export default Projects;