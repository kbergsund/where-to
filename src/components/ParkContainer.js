import { useState, useEffect } from 'react';
import ActivityForm from './ActivityForm';
import ParkCard from './ParkCard';
import ParkPage from './ParkPage';

const ParkContainer = () => {
  const [parks, setParks] = useState([]);
  const [activities, setActivities] = useState([]);
  const [bucketList, setBucketList] = useState([]);

  const fetchData = async (url, state) => {
    try {
      const fetchedData = await fetch(`https://developer.nps.gov/api/v1/${url}api_key=hBaA4GZsEXWedcUXnVCAvMCWhxf5u2Jp0z9gPDRy`)
      const { data } = await fetchedData.json()
      state === 'parks' ? formatParkData(data): setActivities(data)
    } catch (err) {
      console.log(err)
    }
  }

  const formatParkData = (data) => {
    const formattedParks = data.map(park => {
      return {
        fullName: park.fullName,
        url: park.url,
        description: park.description,
        activities: park.activities.map(activity => activity.name),
        images: park.images
      }
      setParks(formattedParks)
    })
  }

  useEffect(() => {
    fetchData('parks?stateCode=CA&', 'parks')
    fetchData('activities?', 'activities')
  }, [])

  return (
    <main>
      <ActivityForm />
      <section>
        <ParkCard />
      </section>
      {/* <ParkPage park="Joshua Tree"/> */}
    </main>
  )
}

export default ParkContainer