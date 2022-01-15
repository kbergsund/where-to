import { useState } from 'react';
import '../scss/ActivityForm.scss';

const ActivityForm = () => {
  const [activities, setActivity] = useState('');

  return (
    <form>
      {/* <label htmlFor="activity">Select Activity:</label> */}
      <input
        list="activityList"
        placeholder="What do you love to do?"
        // id="activity"
        value={activities}
        onChange={e => setActivity(e.target.value)} />
      <datalist id="activityList">
        <option value="Canoeing" />
        <option value="Biking" />
      </datalist>
    </form>
  )
}

export default ActivityForm;