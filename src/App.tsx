import React from 'react';
import logo from './logo.svg';
import './App.css';
import PageGestionClient from './composant/page/pageGestionClient';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import PageGestionVehicule from './composant/page/pageGestionVehicule';
import PageGestionLocation from './composant/page/pageGestionLocation';
import PageRecapitulatifLocation from './composant/page/pageRecapitulatifLocation';
import PageAccueil from './composant/page/pageAccueil';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<PageAccueil/>}/>
          <Route path='/client' element={<PageGestionClient/>}/>
          <Route path='/vehicule' element={<PageGestionVehicule/>}/>
          <Route path='/location' element={<PageGestionLocation/>}/>
          <Route path='/bilan' element={<PageRecapitulatifLocation/>}/>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
