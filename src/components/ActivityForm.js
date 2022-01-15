import { useState, useEffect } from 'react';
import '../scss/ActivityForm.scss';

const ActivityForm = ({ activities, filterParks }) => {
  const [selectedActivity, setActivity] = useState('');

  const generateActivityOptions = activities.map((activity, index) => <option key={index} value={activity} />)

  useEffect(() => {
    filterParks(selectedActivity)
  }, [selectedActivity])

  return (
    <form onSubmit={e => e.preventDefault()}>
      {/* <label htmlFor="activity">Select Activity:</label> */}
      <input
        list="activityList"
        placeholder="What do you love to do?"
        // id="activity"
        value={selectedActivity}
        onChange={e => setActivity(e.target.value)} />
      <datalist id="activityList">
        {generateActivityOptions}
      </datalist>
    </form>
  )
}

export default ActivityForm;