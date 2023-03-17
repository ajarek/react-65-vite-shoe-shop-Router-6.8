import React, { useContext } from 'react'
import { AppContext } from '../../App'
import { MdDeleteForever } from 'react-icons/md'
import './Cart.css'
const Cart = () => {
  const { data, setData, cart, setCart, count } = useContext(AppContext)

  return (
    <table>
      <thead>
      <tr>
        <th>Miniatura</th>
        <th>Nazwa</th>
        <th>Rozmiar</th>
        <th>Color</th>
        <th>Ilość</th>
        <th>Cena</th>
        <th>Wartość</th>
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
              <td>
                <MdDeleteForever />
              </td>
            </tr>
          )
        })}
      </tbody>
    </table>
  )
}

export default Cart
