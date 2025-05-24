
import { FadeLoader, PacmanLoader } from 'react-spinners'

export default function Spinner() {
  return (
    <div className="spinner-container">
      <div className="spinner">
        <PacmanLoader color="#ffa500" />
      </div>
    </div>
  );
}
