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
    <div className="App scroll-smooth">
      <Header></Header>
      <Hero className="section-1"></Hero>
      <div className='bg-[#F9F7F5]'>
        <Biography className="section-2"></Biography>
        <Timeline className="section-3"></Timeline>
      </div>
      <Tributes className="section-4"></Tributes>
      <Footer></Footer>
    </div>
  );
}

