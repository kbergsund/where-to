import { useParams } from 'react-router-dom';
import ParkPage from './ParkPage';

const ParkPageWrapper = ({ parks }) => {
  const clickedParkCode = useParams().parkCode

  return (
    <ParkPage parkCode={clickedParkCode} parks={parks} />
  )
}

export default ParkPageWrapper;