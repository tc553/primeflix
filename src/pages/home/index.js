import React, { useState, useEffect } from 'react';
import Menu from '../../components/Menu';
// import siteData from '../../data/site_data.json';
import BannerMain from '../../components/BannerMain';
import Carousel from '../../components/Carousel';
import Footer from '../../components/Footer';
import DefaultPage from '../../components/DefaultPage';
import LoadingMain from '../../components/LoadingMain';
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
    <div style={{ background: '#141414' }}>
      <Menu />
      {
        siteData.length === 0 && (
          <LoadingMain />
        )
      }

      {siteData.map((category, index) => {
        if (index === 0) {
          return (
            <div key={category.id}>
              <BannerMain
                videoTitle="Plataforma de Conhecimento em Siderurgia"
                url={siteData[0].videos[0].url}
                videoDescription="Conheça os processos da indústria siderúrgica e também os produtos que oferecemos aos nossos clientes"
              />
              <Carousel
                ignoreFirstVideo
                category={siteData[0]}
              />
            </div>
          );
        }

        return (
          <Carousel
            key={category.id}
            category={category}
          />
        );
      })}

      <Footer />
    </div>
  );
}

export default Home;
