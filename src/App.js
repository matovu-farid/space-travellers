import './App.css';
import Header from './Components/Header/Header';
import MainRoutes from './Components/MainRoutes/MainRoutes';
import Navbar from './Components/NavBar/Navbar';

function App() {
  return (
    <div>
      <Navbar />
      <Header />
      <MainRoutes />
    </div>
  );
}

export default App;
