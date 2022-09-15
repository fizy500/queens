import React from 'react';
import './App.css';
import Header from './Components/Header';
import Hero from './Components/Hero';
import Biography from './Components/Biography';
import Timeline from './Components/Timeline';
import Tributes from './Components/Tributes';

import Footer from './Components/Footer';


export default function App() {
  return (
    <div className="App">
      <Header></Header>
      <Hero></Hero>
      <div className='bg-[#F9F7F5]'>
        <Biography></Biography>
        <Timeline></Timeline>
      </div>
        <Tributes></Tributes>
        <Footer></Footer>
    </div>
  );
}

