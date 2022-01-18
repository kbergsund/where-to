import { Fragment } from 'react';
import { useParams } from 'react-router-dom';
import propTypes from 'prop-types';
import ErrorPage from './ErrorPage';
import '../scss/ParkPage.scss';

const ParkPage = ({ parks, alreadyAdded, addToBucketList }) => {
  const clickedParkCode = useParams().parkCode;
  const clickedPark = parks.find(park => park.parkCode === clickedParkCode)

  const displayActivities = clickedPark && clickedPark.activities.map((activity, index) => <p key={index} className='activity'>{activity}</p>)

  const bucketListMsgStyles =
    <style jsx="true">{`
      .add-confirmation {
        opacity: ${alreadyAdded === 'no' ? '100%' : '0'};
      }

      .add-denial  {
        opacity: ${alreadyAdded === 'yes' ? '100%' : '0'};
      }
    `}</style>

  const clickedParkDisplay = clickedPark &&
    <Fragment>
      <div className='left-side-content'>
        <div className='title-btn'>
          <h2 className='park-page-title'>{clickedPark.fullName}</h2>
          <p className='add-denial'>You've already added this destination!</p>
          <button className='park-page-add-btn'
            onClick={() => addToBucketList(clickedPark)}>Add to Bucket List</button>
          <p className='add-confirmation'>Added!</p>
        </div>
        <div className='activity-container'>
          {displayActivities}
        </div>
        <p>{clickedPark.description}</p>
        <a className='learn-more-btn' href={clickedPark.url} target='_blank' rel='noreferrer'>Learn More</a>
      </div>
      <img src={clickedPark.images[1].url} alt={clickedPark.images[1].altText}></img>
    </Fragment >

  return (
    <section className='park-page'>
      {clickedPark ? clickedParkDisplay : <ErrorPage error='invalid URL'/>}
      {bucketListMsgStyles}
    </section>
  )
}

export default ParkPage;

ParkPage.propTypes = {
  parks: propTypes.array.isRequired,
  addToBucketList: propTypes.func.isRequired
}