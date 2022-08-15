import React, { useContext } from 'react'
import { Cart } from '../Context'
export const SingleItem = ({ prod }) => {
  const {cart, setCart} = useContext(Cart);
  return (
    <>
        <div className="content-wrapper">
          <div className="content-image">
            <img src={prod.image} alt={prod.name} />
          </div>
          <div className="content-name">{prod.name}</div>
          <div className="content-price">${prod.price.substring(0, 3)}</div>
          <div className="content-btn">
          {cart.includes(prod) ? (
                <button onClick={() => setCart(cart.filter((c) => c.id !== prod.id))}
                >
                Remove from Cart
                </button>
            ) : (
                <button onClick={() => setCart([...cart, prod])}>
                Add to Cart
                </button>
            )}
          </div>
        </div>
    </>
  )
}
