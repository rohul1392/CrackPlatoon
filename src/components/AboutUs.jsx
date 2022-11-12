import * as React from 'react';
import ProductHeroAbout from './molecules/ProductHeroAbout'
import Mission from './molecules/Mission'
import ContactAbout from './molecules/ContactAbout'
function Home() {
  return (
    <React.Fragment>
        <ProductHeroAbout />
        <Mission />
        <ContactAbout />
    </React.Fragment>
  );
}

export default Home;