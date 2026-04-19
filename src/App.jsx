import React from 'react'
import Hero from './assets/components/Hero/Hero'
import Services from './assets/components/Services/Services'
import WhereToBuy from './assets/components/WhereToBuy/WhereToBuy'
import AppBanner from './assets/components/AppBanner/AppBanner'
import Footer from './assets/components/Footer/Footer'

const App = () => {
  return (
    <div className="overflow-x-hidden">
      <Hero />
      <Services />
      <WhereToBuy />
      <AppBanner />
      <Footer />
    </div>
  );
};

export default App;
