import React, { useState } from 'react';
import { faker } from '@faker-js/faker';
import { SingleItem } from './SingleItem';
import { Headers } from './Headers';
faker.seed(200);
const Home = () => {
  const FakerProduct = [...Array(20)].map( () => ({
    id: faker.datatype.uuid(),
    name: faker.commerce.productName(),
    price: faker.commerce.price(),
    image: faker.image.food(400, 400, true)
  }));

  const [products] = useState(FakerProduct);
  return (
    <>
      <Headers />

      <div className="home">
    
        { 
        products.map( (prod) => (
          <SingleItem prod={prod} key={prod.id} /> 
        ))
          
        }

      </div>
    </>
  )
}

export default Home