import { Route, Routes } from 'react-router-dom';
import Missions from '../../pages/Missions/Missions';
import MyProfile from '../../pages/MyProfile/MyProfile';
import Rockets from '../../pages/Rockets/Rockets';

const MainRoutes = () => (
  <Routes>
    <Route path="/" element={<Rockets />} />
    <Route path="/missions" element={<Missions />} />
    <Route path="/my-profile" element={<MyProfile />} />
  </Routes>
);

export default MainRoutes;
