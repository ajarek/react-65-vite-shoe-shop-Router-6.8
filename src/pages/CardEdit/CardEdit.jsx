import React, { useContext } from 'react'
import { AppContext } from '../../App'
import { useParams, useNavigate } from 'react-router-dom'
import Card from '../../components/Card/Card'
import Counter from '../../components/Counter/Counter'
import './CardEdit.css'
const CardEdit = () => {
  const {
    data,
    cart,
    setCart,
    count,
    sizeShoes,
    colorShoes,
    summary,
    setSummary,
  } = useContext(AppContext)
  const navigate = useNavigate()
  let { id } = useParams()
  const itemCard = data.find((el) => el.id === id)

  const handleCart = () => {
    const newItemCard = {
      ...itemCard,
      newCount: count,
      size: sizeShoes,
      color: colorShoes,
    }
    const sum = newItemCard.price * newItemCard.newCount

    setSummary([...summary, sum])
    setCart([...cart, newItemCard])

    navigate('/')
  }

  return (
    <div className='card-edit'>
      <Card
        title={itemCard.title}
        image={itemCard.image}
        price={itemCard.price}
        color={itemCard.color}
        size={itemCard.size}
        desc={itemCard.desc}
      />
      <div className='add-cart'>
        <Counter />
        <button onClick={handleCart}>Dodaj do koszyka</button>
      </div>
    </div>
  )
}

export default CardEdit
