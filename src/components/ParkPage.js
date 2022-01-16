import '../scss/ParkPage.scss';

const ParkPage = ({ park }) => {
  const displayActivities = park.activities.map(activity => <p className='activity'>{activity}</p>)

  return (
    <section className='park-page'>
      <div className='left-side-content'>
        <div className='title-btn'>
          <h2 className='park-page-title'>{park.fullName}</h2>
          <button className='park-page-add-btn'>Add to Bucket List</button>
        </div>
        <div className='activity-container'>
          {displayActivities}
        </div>
        <p>{park.description}</p>
        <a href={park.url}>Learn More</a>
      </div>
      <img src={park.images[1].url} alt={park.images[1].altText}></img>
    </section>
  )
}

export default ParkPage;