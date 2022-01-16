import { useParams } from 'react-router-dom';
import '../scss/ParkPage.scss';

const ParkPage = ({ parks }) => {
  const clickedParkCode = useParams().parkCode;
  const clickedPark = parks.find(park => park.parkCode === clickedParkCode)
  
  const displayActivities = clickedPark.activities.map(activity => <p className='activity'>{activity}</p>)

  return (
    <section className='park-page'>
      <div className='left-side-content'>
        <div className='title-btn'>
          <h2 className='park-page-title'>{clickedPark.fullName}</h2>
          <button className='park-page-add-btn'>Add to Bucket List</button>
        </div>
        <div className='activity-container'>
          {displayActivities}
        </div>
        <p>{clickedPark.description}</p>
        <a href={clickedPark.url} target="_blank" rel="noreferrer">Learn More</a>
      </div>
      <img src={clickedPark.images[1].url} alt={clickedPark.images[1].altText}></img>
    </section>
  )
}

export default ParkPage;