import React from 'react';
import Menu from '../../components/Menu';
import site_data from '../../data/site_data.json';
import BannerMain from '../../components/BannerMain';
import Carousel from '../../components/Carousel';
import Footer from '../../components/Footer';

function Home() {
  return (
    <div style={{background: "#141414"}}>
      <Menu />
      <BannerMain
        videoTitle={site_data.categories[0].videos[0].title}
        url={site_data.categories[0].videos[0].url}
        videoDescription={site_data.categories[0].videos[0].description}
      />

      <Carousel
        ignoreFirstVideo
        category={site_data.categories[0]}
      />

      <Carousel
        category={site_data.categories[1]}
      />
      
      <Footer />
    </div>
  );
}

export default Home;
