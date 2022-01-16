import '../scss/ParkPage.scss';

const ParkPage = ({ parkCode, parks }) => {
  const ClickedPark = parks.find(park => park.parkCode === parkCode)

  return (
    <section className='park-page'>
      <div className='left-side-content'>
        <h2>{ClickedPark.fullName}</h2>
        <button>Add to Bucket List</button>
        <p>{ClickedPark.description}</p>
        {/* <div className='bottom-btns'> */}
          <button className='read-more-btn'>Read More</button>
        {/* </div> */}
      </div>
      {/* <div className='right-side-img'> */}
      <img src={ClickedPark.images[0].url} alt={ClickedPark.images[0].altText}></img>
      {/* </div> */}

    </section>
  )
}

export default ParkPage;