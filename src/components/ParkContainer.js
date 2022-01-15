import { useState, useEffect } from 'react';
import ActivityForm from './ActivityForm';
import ParkCard from './ParkCard';
import ParkPage from './ParkPage';
import '../scss/ParkContainer.scss';

const ParkContainer = () => {
  const [parks, setParks] = useState([]);
  const [activities, setActivities] = useState([]);
  const [filteredParks, setFilteredParks] = useState([]);
  const [bucketList, setBucketList] = useState([]);

  const fetchData = async () => {
    try {
      const fetchedData = await fetch(`https://developer.nps.gov/api/v1/parks?stateCode=CA&api_key=hBaA4GZsEXWedcUXnVCAvMCWhxf5u2Jp0z9gPDRy`)
      const { data } = await fetchedData.json()
      setParks(data.map(park => {
        return {
          fullName: park.fullName,
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
    console.log(filteredParks)
    setFilteredParks(filteredParks)
  }

  const displayParkCards = !filteredParks.length ? parks.map((park, index) => <ParkCard key={index} name={park.fullName} imageURL={park.images[0].url} />) : filteredParks.map((park, index) => <ParkCard key={index} name={park.fullName} imageURL={park.images[0].url} />)

  useEffect(() => {
    fetchData()
  }, [])

  return (
    <main>
      <ActivityForm activities={activities} filterParks={filterParks}/>
      <section className='park-container'>
        {displayParkCards}
      </section>
      {parks.length && <ParkPage park={parks[0]}/>}
    </main>
  )
}

export default ParkContainer