import { Link } from 'react-router-dom';
import '../scss/ParkCard.scss';

const ParkCard = ({ name, imageURL }) => {
  const backgroundImgStyle = {
    backgroundImage: `url(${imageURL})`
  }
  return (
    <section className='park-card'>
      <Link to={`/${name}`}>
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