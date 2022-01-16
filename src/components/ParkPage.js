import { useParams } from 'react-router-dom';
import '../scss/ParkPage.scss';

const ParkPage = ({ parks }) => {
  const clickedParkCode = useParams().parkCode;
  const ClickedPark = parks.find(park => park.parkCode === clickedParkCode)
  
  const displayActivities = ClickedPark.activities.map(activity => <p className='activity'>{activity}</p>)

  return (
    <section className='park-page'>
      <div className='left-side-content'>
        <div className='title-btn'>
          <h2 className='park-page-title'>{ClickedPark.fullName}</h2>
          <button className='park-page-add-btn'>Add to Bucket List</button>
        </div>
        <div className='activity-container'>
          {displayActivities}
        </div>
        <p>{ClickedPark.description}</p>
        <a href={park.url}>Learn More</a>
      </div>
      <img src={ClickedPark.images[1].url} alt={ClickedPark.images[1].altText}></img>
    </section>
  )
}

export default ParkPage;