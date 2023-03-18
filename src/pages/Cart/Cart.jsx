import React, { useContext, useState,useEffect } from 'react'
import { AppContext } from '../../App'
import { MdDeleteForever } from 'react-icons/md'
import './Cart.css'
const Cart = () => {
  const { data, setData, cart, setCart, count, summary,setSummary } = useContext(AppContext)
  
 const deleteItem =(id)=>{
  const itemCart = cart.find((el) => el.id === id)
  const minus=itemCart.price*itemCart.newCount
  setSummary([...summary,-minus])
  const newCart = cart.filter(c => c.id !== id)
  setCart(newCart)
 }
  
  return (
   
    <table>
      <thead>
      <tr>
        <th>Miniatura</th>
        <th>Nazwa</th>
        <th>Rozmiar</th>
        <th>Color</th>
        <th>Ilość</th>
        <th>Cena PLN</th>
        <th>Wartość PLN</th>
        <th>Usuń</th>
      </tr>
      </thead>
      <tbody>
        {cart.map((el) => {
         
          return (
            <tr
              className='cart-wrapper'
              key={el.id}
            >
              <td>
                <img
                  src={el.image}
                  alt=''
                  width={50}
                />
              </td>

              <td> {el.title} </td>
              <td> {el.size} </td>
              <td>{el.color}</td>
              <td>{el.newCount}</td>
              <td>{el.price}</td>
              <td>{el.newCount * el.price}</td>
              <td onClick={()=>deleteItem(el.id)}>
                <MdDeleteForever />
              </td>
            </tr>
          )
        })}
      </tbody>
      <tfoot>
       <tr>
       <td className="all-sum" colSpan="7">Do zapłaty PLN: {(summary.reduce((a,b)=>a+b,0)).toFixed(2)}</td>
       </tr>
       <tr>
        <td className="all-sum" colSpan="7"><a href='https://www.paypal.com/pl/home' target={'_blank'} >Zamawiam i Płacę</a></td>
       </tr>
      </tfoot>
      
    </table>
    
    
  )
}

export default Cart
