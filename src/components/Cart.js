import React, { useState, useEffect, useContext } from 'react'
import { SingleItem } from './SingleItem'
import { Cart } from '../Context'
import { Headers } from './Headers';
const CartPage = () => {
  const {cart, setCart} = useContext(Cart);
  const [total, setTotal] = useState();
  useEffect(() => {
    setTotal(cart.reduce((acc, curr) => acc + Number(curr.price), 0));
  }, [cart]);
  return (
    <>
      
      <Headers />
      <div className="home cart_info">
          Total: ${ total }
      </div>
      <div className="home">
        {
          cart.map((prod) => {
            return <SingleItem prod={prod} key={prod.id}/>
          })
        }
      </div>
    </>
  )
}

export default CartPage