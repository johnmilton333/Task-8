import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import BasicExample from './Navbar';
import IndividualIntervalsExample from './Section1';
import Aboutus from './Contant1';
import Destination from './Collection';
import HookForm from './Form';
import SocialMediaIcons from './Icon';



function App() {
  return (
    <div className="App">
      <BrowserRouter>
        < BasicExample />

        <Routes>
          <Route path="/" element={<IndividualIntervalsExample/>}/>
            <Route path="/aboutus" element={<Aboutus/>} />
            <Route path="/collection" element={<Destination />} />
            <Route path="/contactus" element={<HookForm />} />
            <Route path="/feedback" element={<SocialMediaIcons />} />
          
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;




