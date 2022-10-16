import * as React from 'react';
import ProductHero from './molecules/Services/ProductHero'
import AboudUsContract from '../components/molecules/Services/AboudUsContract'
import ProductValues from '../components/molecules/Services/ProductValues'
import Services from '../components/molecules/Services/Services'

function Service() {
  return (
    <React.Fragment>
        <ProductHero />
        <AboudUsContract />
        <ProductValues />
        <Services />
    </React.Fragment>
  );
}

export default Service;