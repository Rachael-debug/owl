import { useState } from 'react';
import Header from './components/Header.jsx';
import Hero from './components/Hero.jsx';
import Stats from './components/Stats.jsx';
import Catalog from './components/Catalog.jsx';
import Features from './components/Features.jsx';
import Footer from './components/Footer.jsx';


function App() {

  return (
    <>
      <Header />
      <Hero/>
      <section id='Catalog'>
        <Stats/>
        <Catalog/>
      </section>
      
      <Features/>
      <Footer/>
    </>
  );
}

export default App;
