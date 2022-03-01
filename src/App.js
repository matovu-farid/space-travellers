import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import './App.css';
import MainRoutes from './Components/MainRoutes/MainRoutes';
import Navbar from './Components/NavBar/Navbar';
import { fetchData } from './redux/rockets/rockets';

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchData());
  }, []);
  return (
    <div>
      <Navbar />
      <MainRoutes />
    </div>
  );
}

export default App;
