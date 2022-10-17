import React from 'react';
import Header from './Header';
import About from './About';
import RoadMap from './RoadMap';
import Faqs from './Faqs';
import Team from './Team';
import Partners from './Partners';

const Home = () => {
  return (
    <>
        <Header />
        <About />
        <RoadMap />
        <Faqs />
        <Team />
        <Partners />
    </>
  )
}

export default Home