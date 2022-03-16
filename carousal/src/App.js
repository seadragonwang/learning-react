import React from 'react';
import './App.css';
import Carousal from './components/Carousal';
import { CarousalData } from './components/CarousalData';

function App() {
  return (<Carousal slides={CarousalData} />);
}

export default App;
