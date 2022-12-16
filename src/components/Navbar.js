import './Navbar.css';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className='center nav'>
      <ul className='nav__list'>
        <li className='nav__list-item'>
            <Link to='#projects' className='link link--nav'>
                Projects
            </Link>
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