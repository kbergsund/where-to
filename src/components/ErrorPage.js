import { Fragment } from 'react';
import { Link } from 'react-router-dom';
import { HiHome } from 'react-icons/hi';
import '../scss/ErrorPage.scss';


const ErrorPage = ({ err }) => {
  const error = err ? err.message : 'invalid URL'
  const errorContent = error.message === 'Failed to fetch' ?
  <Fragment>
    <p className='server-down'>Server down, unable to fetch park data. <br/> Go spend some time outside & try again later!</p>
  </Fragment> :
  <Fragment>
    <p className='invalid-url'>404 - Invalid URL!</p>
    <Link to='/' className='error-home-icon'><HiHome size={50} /></Link>
  </Fragment>

  return (
    <section className='error-page'>{errorContent}</section>
  )
}

export default ErrorPage;