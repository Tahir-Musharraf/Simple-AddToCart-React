import React, { useContext } from 'react'
import { Link } from 'react-router-dom';

import { Cart } from '../Context';
export const Headers = () => {
    const {cart} = useContext(Cart)
    console.log(typeof(cart))
  return (
    <div className="navbar">
        <div><Link to='/'>Home</Link></div>
        <div><Link to='/cart'>Cart ({Object.keys(cart).length})</Link></div>
    </div>
  )
}
