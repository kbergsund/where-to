import { Fragment } from 'react';
import { useParams } from 'react-router-dom';
import propTypes from 'prop-types';
import '../scss/ParkPage.scss';

const ParkPage = ({ parks, addToBucketList, addedToBucketList }) => {
  const clickedParkCode = useParams().parkCode;
  const clickedPark = parks.find(park => park.parkCode === clickedParkCode)

  const displayActivities = clickedPark && clickedPark.activities.map((activity, index) => <p key={index} className='activity'>{activity}</p>)

  const handleBucketListButton = (park) => {
    addToBucketList(park)
    console.log(addedToBucketList)
  }

  const clickedParkDisplay = clickedPark &&
    <Fragment>
      <div className='left-side-content'>
        <div className='title-btn'>
          <h2 className='park-page-title'>{clickedPark.fullName}</h2>
          <button className='park-page-add-btn'
            onClick={() => handleBucketListButton(clickedPark)}>Add to Bucket List</button>
        </div>
        <div className='activity-container'>
          {displayActivities}
        </div>
        <p>{clickedPark.description}</p>
        <a className='learn-more-btn' href={clickedPark.url} target="_blank" rel="noreferrer">Learn More</a>
      </div>
      <img src={clickedPark.images[1].url} alt={clickedPark.images[1].altText}></img>
    </Fragment >

  return (
    <section className='park-page'>
      {clickedPark ? clickedParkDisplay : <p>Invalid URL!</p>}
    </section>
  )
}

export default ParkPage;

ParkPage.propTypes = {
  parks: propTypes.array.isRequired,
  addToBucketList: propTypes.func.isRequired
}