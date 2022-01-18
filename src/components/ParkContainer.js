import { Fragment, useState, useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
import ActivityForm from './ActivityForm';
import ParkCard from './ParkCard';
import ParkPage from './ParkPage';
import '../scss/ParkContainer.scss';

const ParkContainer = () => {
  const [parks, setParks] = useState([]);
  const [activities, setActivities] = useState([]);
  const [filteredParks, setFilteredParks] = useState([]);
  const [bucketList, setBucketList] = useState(() => {
    const existingBucketList = JSON.parse(localStorage.getItem("savedBucketList"));
    return existingBucketList || []
  })
  const [alreadyAdded, setAlreadyAdded] = useState(null)

  useEffect(() => {
    fetchData()
  }, [])

  useEffect(() => {
    localStorage.setItem("savedBucketList", JSON.stringify(bucketList))
  }, [bucketList])

  const fetchData = async () => {
    try {
      const fetchedData = await fetch(`https://developer.nps.gov/api/v1/parks?stateCode=CA&api_key=hBaA4GZsEXWedcUXnVCAvMCWhxf5u2Jp0z9gPDRy`)
      const { data } = await fetchedData.json()
      setParks(data.map(park => {
        return {
          fullName: park.fullName,
          parkCode: park.parkCode,
          url: park.url,
          description: park.description,
          activities: park.activities.map(activity => activity.name),
          images: park.images
        }
      }))
      setActivities(generateActivityList(data))
    } catch (err) {
      console.log(err)
    }
  }

  const generateActivityList = (parkData) => {
    return parkData.reduce((activityArr, park) => {
      park.activities.forEach(activity => !activityArr.includes(activity.name) && activityArr.push(activity.name))
      return activityArr.sort()
    }, [])
  }

  const filterParks = (activity) => {
    const filteredParks = parks.filter(park => park.activities.includes(activity))
    setFilteredParks(filteredParks)
  }

  const addToBucketList = (park) => {
    if (!bucketList.find(bucketListPark => bucketListPark.parkCode === park.parkCode)) {
      setBucketList([...bucketList, park])
      setAlreadyAdded('no')
    } else {
      setAlreadyAdded('yes')
    }
    setTimeout(() => {
      setAlreadyAdded(null)
    }, 1000)
  }

  const displayParkCards = !filteredParks.length
    ? parks.map(park => <ParkCard key={park.parkCode} parkCode={park.parkCode} name={park.fullName} imageURL={park.images[0].url} />)
    : filteredParks.map(park => <ParkCard key={park.parkCode} parkCode={park.parkCode} name={park.fullName} imageURL={park.images[0].url} />)

  const displayBucketListCards = !bucketList.length ? <p>You haven't added any trips to your bucket list yet!</p> : bucketList.map(park => <ParkCard key={park.parkCode} parkCode={park.parkCode} name={park.fullName} imageURL={park.images[0].url} />)

  return (
    <main>
      <Routes>
        <Route path='*' element={<p>HELLO</p>} />
        <Route path='/' element={
          <Fragment>
            <ActivityForm activities={activities} filterParks={filterParks} />
            <section className='park-container'>
              {displayParkCards}
            </section>
          </Fragment>
        } />
        <Route path='/:parkCode' element={<ParkPage parks={parks} alreadyAdded={alreadyAdded} addToBucketList={addToBucketList} />} />
        <Route path='/bucketlist' element={
          <Fragment>
            <section className='park-container'>
              {displayBucketListCards}
            </section>
          </Fragment>} />
      </Routes>
    </main>
  )
}

export default ParkContainer