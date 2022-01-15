import '../scss/ParkCard.scss';

const ParkCard = ({ name, imageURL}) => {
  const backgroundImgStyle = {
    backgroundImage: `url(${imageURL})`,
    backgroundPosition: 'cover'
  }
  return(
    <section className='park-card' style={backgroundImgStyle}>
      <h2>{name}</h2>
    </section>
  )
}

export default ParkCard;