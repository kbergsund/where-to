import { useState } from 'react';

const ActivityForm = () => {
  const [activities, setActivity] = useState('');

  return (
    <form>
      <label htmlFor="activities">Select Activity:</label>
      <input
        list="activity"
        placeholder="What do you love to do?"
        name="activities"
        id="activities"
        value={activities}
        onChange={e => setActivity(e.target.value)} />
      <datalist id="activity">
        <option value="Canoeing" />
        <option value="Biking" />
      </datalist>
    </form>
  )
}

export default ActivityForm;