import React, { useContext } from 'react'
import { AppContext } from '../../App'
import './Cart.css'
const Cart = () => {
  const { data, setData,cart, setCart } = useContext(AppContext)
  return (
    <div className='cart'>
      {cart.map(el=>{
      return(
     
      <div className="cart-wrapper" key={el.id}>
                  {el.title}         
      </div>
      )
       })
      }           
    </div>
  )
}

export default Cart