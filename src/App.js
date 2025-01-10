import React from "react";
import PlanetImage from "./PlanetaryImages/PlanetImage";
import Header from "./Header";
import NearEarth from "./NearEarth/NearEarth";
import { BrowserRouter as Router, Route, Routes, BrowserRouter } from "react-router-dom";


function App() {
  return (
    <div className=''> 
<Router>
<Header />
      <Routes>
        <Route path="/" element={<NearEarth />} />
        <Route path="/planetimg" element={<PlanetImage />} />
      </Routes>
    </Router>
    </div>
  );
}

export default App;
