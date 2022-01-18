import { useState, useEffect } from 'react';
import propTypes from 'prop-types';
import '../scss/ActivityForm.scss';

const ActivityForm = ({ activities, filterParks }) => {
  const [selectedActivity, setActivity] = useState('');

  const generateActivityOptions = activities.map((activity, index) => <option key={index} value={activity} />)

  useEffect(() => {
    filterParks(selectedActivity)
  }, [selectedActivity])

  return (
    <form onSubmit={e => e.preventDefault()}>
      <input
        aria-label="Activity dropdown to filter destinations by"
        list="activityList"
        placeholder="What do you love to do?"
        value={selectedActivity}
        onChange={e => setActivity(e.target.value)} />
      <datalist id="activityList">
        {generateActivityOptions}
      </datalist>
    </form>
  )
}

export default ActivityForm;

ActivityForm.propTypes = {
  activities: propTypes.array.isRequired,
  filterParks: propTypes.func.isRequired
}
