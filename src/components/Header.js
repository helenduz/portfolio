import './Header.css';
import Navbar from './Navbar';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className='header center'>
      <h3>
        <Link to="/" className='link'>
            Helen Du
        </Link>
      </h3>
      <Navbar />
    </header>
  )
}

export default Header