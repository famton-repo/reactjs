import React from 'react'
import Hero from './assets/Components/Hero'
import Services from './assets/Components/Services/Services'
import WhereToBuy from './assets/Components/WhereToBuy/WhereToBuy'
import AppBanner from './assets/Components/AppBanner/AppBanner'
import Footer from './assets/Components/Footer/Footer'
const App = () => {
  return (
    <>
    <Hero/>
    <Services />
    <WhereToBuy />
    <AppBanner />
    <Footer />
    </>
  )
}

export default App