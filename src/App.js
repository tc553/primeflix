import React from 'react';
import Menu from './components/Menu';
import site_data from './data/site_data.json';
import BannerMain from './components/BannerMain';
import Carousel from './components/Carousel';
import Footer from './components/Footer';

function App() {
  return (
    <div>
      <Menu />
      <BannerMain
        videoTitle="Teste"
        videoDescription="Teste descrição"
        url="https://www.youtube.com/watch?v=c8mVlakBESE"
      />
      
      <Footer />
    </div>
  );
}

export default App;
