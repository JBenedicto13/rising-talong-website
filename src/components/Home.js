import React from 'react';
import Header from './Header';
import About from './About';
import Utility from './Utility';
import Faqs from './Faqs';
import Team from './Team';
import Partners from './Partners';
import ScrollToTop from './ScrollToTop';


const Home = () => {
  return (
    <>
        <Header />
        <About />
        <Utility />
        <Faqs />
        <Team />
        <Partners />
        <ScrollToTop />
    </>
  )
}

export default Home