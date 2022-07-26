import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Crew from './Components/Crew/Crew';
import Destination from './Components/Destination/Destination';
import Home from './Components/Home/Home';
import Navbar from './Components/Navbar/Navbar';
import Technology from './Components/Technology/Technology';

function App() {
  return (
    <div className="w-full min-h-screen h-full bg-[#0b0e17]">
      <Navbar />

      <Routes>
        <Route path={'/'} element={<Home />} />

        <Route path={'/destination'} element={<Destination />} />
        <Route path={'/crew'} element={<Crew />} />
        <Route path={'/technology'} element={<Technology />} />
      </Routes>
    </div>
  );
}

export default App;
