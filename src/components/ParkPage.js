import '../scss/ParkPage.scss';

const ParkPage = ({ park }) => {
  // console.log(park.fullName)
  return (
    <section className='park-page'>
      <div className='left-side-content'>
        <div className='bottom-btns'>
        <h2 className='park-page-title'>{park.fullName}</h2>
        <button className='park-page-add-btn'>Add to Bucket List</button>
        </div>
        <p>{park.description}</p>
        <a href={park.url}>Learn More</a>
      </div>
      {/* <div className='right-side-img'> */}
      <img src={park.images[1].url} alt={park.images[1].altText}></img>
      {/* </div> */}

    </section>
  )
}

export default ParkPage;