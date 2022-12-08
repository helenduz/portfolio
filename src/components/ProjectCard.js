import "./ProjectCard.css";
import { Link } from 'react-router-dom';

const ProjectCard = (props) => {
    const name = props.project.name;
    const summary = props.project.summary;
    const stack = props.project.stack;
    const pathName = props.project.pathName;
    
    return (
        <div className='project-card'>
            <h3 className='project-title'>
                <Link to={pathName} className='link'>
                    {name}
                </Link>
            </h3>
    
            <p className='project-summary'>{summary}</p>

            <ul className='project-stack'>
            {stack.map((el) => (<li className='project-stack-item'>{el}</li>))}
            </ul>
    </div>
    );
};

export default ProjectCard;