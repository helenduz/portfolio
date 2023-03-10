import "./ProjectCard.css";
import { Link } from 'react-router-dom';

// This component draws inspiration from https://github.com/rajshekhar26/cleanfolio/tree/main/src/components/ProjectContainer
const ProjectCard = (props) => {
    const name = props.project.name;
    const summary = props.project.summary;
    const stack = props.project.stack;
    const pathName = props.project.pathName;
    
    return (
        <div className='project-card'>
            <Link to={pathName}>
            <div>
                <h3 className='project-title link'>
                        {name}
                </h3>
        
                <p className='project-summary'>{summary}</p>

                <ul className='project-stack'>
                {stack.map((el) => (<li className='project-stack-item'>{el}</li>))}
                </ul>
            </div>
            </Link>
        </div>
    );
};

export default ProjectCard;