import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import './App.css';
import MainRoutes from './Components/MainRoutes/MainRoutes';
import Navbar from './Components/NavBar/Navbar';
import { fetchData } from './redux/rockets/rockets';
import { fetchMissionData } from './redux/missions/missions';

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchData());
  }, []);
  useEffect(() => {
    dispatch(fetchMissionData());
  }, []);
  return (
    <div>
      <Navbar />
      <hr />
      <MainRoutes />
    </div>
  );
}

export default App;
