import React from 'react'
import './Card.css'
const Card = ({ title, image, price, color, size, desc, onClick }) => {
  return (
    <div
      className='card'
      onClick={onClick}
    >
      <h4>{title}</h4>
      <div className='wrapper-center'>
        <div className='wrapper-img'>
          <img
            src={image}
            alt='image'
          />
        </div>
        <div className="wrapper-right">
        <h5>{price} PLN</h5>

        <div className='wrapper-color'>
          {color?.map((c, i) => {
            return <p key={i} onClick={()=>console.log(c)}>{c}</p>
          })}
        </div>

        <div className='wrapper-size'>
          {size?.map((s, i) => {
            return <p key={i} onClick={()=>console.log(s)}>{s}</p>
          })}
        </div>
        <p >{desc}</p>
        </div>
      </div>
    </div>
  )
}

export default Card
