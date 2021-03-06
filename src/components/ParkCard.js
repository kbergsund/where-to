import { Link } from 'react-router-dom';
import propTypes from 'prop-types';
import '../scss/ParkCard.scss';

const ParkCard = ({ parkCode, name, imageURL }) => {
  const backgroundImgStyle = {
    backgroundImage: `url(${imageURL})`
  }
  return (
    <section className='park-card'>
      <Link to={`/${parkCode}`}>
      <div className='background-image' style={backgroundImgStyle}>
      </div>
      <div className='white-box'>
        <h2>{name}</h2>
        <button className='homepage-add-btn'>+</button>
      </div>
      </Link>
    </section>
  )
}

export default ParkCard;

ParkCard.propTypes = {
  parkCode: propTypes.string.isRequired,
  name: propTypes.string.isRequired,
  imageURL: propTypes.string.isRequired
}