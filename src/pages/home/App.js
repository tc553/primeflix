import React, { useState, useEffect } from 'react';
import Menu from '../../components/Menu';
import siteData from '../../data/site_data.json';
import BannerMain from '../../components/BannerMain';
import Carousel from '../../components/Carousel';
import Footer from '../../components/Footer';
import categoriesRepository from '../../repositories/categories';

function Home() {
  // const [siteData, setSiteData] = useState([]);

  useEffect(() => {
    categoriesRepository.getAllWithVideos();
  }, [
  ]);

  return (
    <div style={{ background: '#141414' }}>
      <Menu />
      <BannerMain
        videoTitle={siteData.categories[0].videos[0].title}
        url={siteData.categories[0].videos[0].url}
        videoDescription={siteData.categories[0].videos[0].description}
      />

      <Carousel
        ignoreFirstVideo
        category={siteData.categories[0]}
      />

      <Carousel
        category={siteData.categories[1]}
      />

      <Footer />
    </div>
  );
}

export default Home;
