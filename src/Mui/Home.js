import React, { useEffect } from 'react';

import ProductSmokingHero from './Components/ProductSmokingHero';
import AppFooter from './Components/AppFooter';
import ProductHero from './Components/ProductHero';
import Slider from '../components/Slider';
import Header12 from './Header12';
import Announcement from '../components/Announcement';
import Accordian from './Components/Accordian';
import { fetchGet } from '../../redux/actions/auth'
import Api from '../../src/API/API'


function Home({toast}) {
  useEffect(() => {
    Api.fetchGet('/admin')
  }, [])
  return (
    <div
      style={{
        // backgroundImage: `url(${backgroundImage})`,
        backgroundAttachment: "fixed",
        // backgroundSize: "cover",
      }}
      className='bg-brickwall'
    >
      <Header12 toast={toast} />
      
      <Slider />
      <Announcement />
      <ProductHero />
      {/* <ProductCategories /> */}
      {/* <Accordian /> */}
      {/* <ProductSmokingHero /> */}
      {/* <StickyFooter/> */}
      <AppFooter />

    </div>
  );
}

export default Home;