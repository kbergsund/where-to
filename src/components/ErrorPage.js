import { Link } from 'react-router-dom';
import { HiHome } from 'react-icons/hi';
import '../scss/ErrorPage.scss';

const ErrorPage = () => {
  return (
    <section className='error-page'>
      <p>404 - Invalid URL!</p>
      <Link to='/' className='error-home-icon'><HiHome size={50}/></Link>
    </section>
  )
}

export default ErrorPage;