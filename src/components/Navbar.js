import './Navbar.css';
import { HashLink } from 'react-router-hash-link';

// This component draws inspiration from https://github.com/rajshekhar26/cleanfolio/tree/main/src/components/ProjectContainer
const Navbar = () => {
  return (
    <nav className='center nav'>
      <ul className='nav__list'>
        <li className='nav__list-item'>
            <HashLink to={{pathname: '/', hash: '#projects'}} className='link link--nav'>
                Projects
            </HashLink>
        </li>
        {/* <li className='nav__list-item'>
            <Link to='/' className='link link--nav'>
              Skills
            </Link>
        </li> */}
      </ul>
    </nav>
  )
}

export default Navbar