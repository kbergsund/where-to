import '../scss/ParkPage.scss';

const ParkPage = ({ park }) => {
  console.log(park.fullName)
  return (
    <section className='park-page'>
      <div className='left-side-content'>
        <h2>{park.fullName}</h2>
        <button>Add to Bucket List</button>
        <p>{park.description}</p>
        <div className='bottom-btns'>
          <button>Read More</button>
        </div>
      </div>
      {/* <div className='right-side-img'> */}
      <img src={park.images[1].url} alt={park.images[1].altText}></img>
      {/* </div> */}

    </section>
  )
}

export default ParkPage;