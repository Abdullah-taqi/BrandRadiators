import React from 'react'
import HeroSection from './HeroSection';
import Categories from './Categories';
import Sales from './Sales';

const Home = () => {
  return (
    <div className="App">
      <HeroSection/>
      <Sales/>
      <Categories/>
    </div>
  )
}

export default Home
