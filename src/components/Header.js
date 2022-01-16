import { Link } from 'react-router-dom';
import { HiHome } from 'react-icons/hi';
import '../scss/Header.scss';

const Header = () => {
  return (
    <header>
      <Link to='/'><h1>Where to Next?</h1></Link>
      <nav>
        <Link to='/' className='home-icon'><HiHome size={30} /></Link>
        <Link to='/bucketlist' className='bucket-list-btn'>My Bucket List</Link>
      </nav>
    </header>
  )
}

export default Header;