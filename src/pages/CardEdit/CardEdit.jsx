import React, { useContext } from 'react'
import { AppContext } from '../../App'
import { redirect, useParams } from 'react-router-dom'
import  Card  from '../../components/Card/Card'
import  Counter  from '../../components/Counter/Counter'
import './CardEdit.css'
const CardEdit = () => {
  const { data, setData } = useContext(AppContext)
  let { id } = useParams()
   const itemCard = data.find((el) => el.id === id)
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
         <div className="add-cart">
          <Counter/>
          <button style={{padding:'0.5rem 1rem'}}>Dodaj do koszyka</button>
          </div>   
    </div>
    
  )
}

export default CardEdit