import * as React from 'react';
import ProductHero from './molecules/ProductHero'
import ProductValues from './molecules/ProductValues'
import Testomonial from './molecules/Testomonial'
import Services from './molecules/Services'
import About from './molecules/About'
import Portfolio from './molecules/Portfolio'
import Contact from './molecules/Contact'
function Home() {
  return (
    <React.Fragment>
        <ProductHero />
        <About />
        <ProductValues />
        <Services />
        <Portfolio />
        <Testomonial />
        <Contact />
    </React.Fragment>
  );
}

export default Home;