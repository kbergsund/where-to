import { useParams } from 'react-router-dom';
import '../scss/ParkPage.scss';

const ParkPage = ({ parks }) => {
  const clickedParkCode = useParams().parkCode;
  const ClickedPark = parks.find(park => park.parkCode === clickedParkCode)

  return (
    <section className='park-page'>
      <div className='left-side-content'>
        <h2>{ClickedPark.fullName}</h2>
        <button>Add to Bucket List</button>
        <p>{ClickedPark.description}</p>
        <button className='read-more-btn'>Read More</button>
      </div>
      <img src={ClickedPark.images[0].url} alt={ClickedPark.images[0].altText}></img>
    </section>
  )
}

export default ParkPage;