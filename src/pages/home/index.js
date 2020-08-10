import React, { useState, useEffect } from 'react';
import Menu from '../../components/Menu';
// import siteData from '../../data/site_data.json';
import BannerMain from '../../components/BannerMain';
import Carousel from '../../components/Carousel';
import Footer from '../../components/Footer';
import DefaultPage from '../../components/DefaultPage';
import categoriesRepository from '../../repositories/categories';

function Home() {
  const [siteData, setSiteData] = useState([]);

  useEffect(() => {
    categoriesRepository.getAllWithVideos()
      .then((categoriesWithVideos) => {
        setSiteData(categoriesWithVideos);
      })
      .catch((err) => {
        console.log(err.message);
      });
  }, []);

  return (
    <DefaultPage>
      {JSON.stringify(siteData)}
      {/* <BannerMain
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
      /> */}

    </DefaultPage>
  );
}

export default Home;
