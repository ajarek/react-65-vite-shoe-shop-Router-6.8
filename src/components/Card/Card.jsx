import React from 'react'
import './Card.css'
const Card = ({key,title,image,price,color,size,desc}) => {
  return (
    <div className="card" key={key}>
        <h4>{title}</h4>
        <div className="wrapper-img">
        <img src={image} alt="image" />
        </div>
        <h5>{price} PLN</h5>
        {/* <p>Kolory:</p>
        <div className="wrapper-color">
          {color.map((c,i)=>{
            return(
              <p key={i}>{c}</p>
            )
          })}
          </div>
        <p>Rozmiar EU:</p>
        <div className="wrapper-size">
        {size.map((s, i) =>{return(
          <p style={{border:'1px solid',width:'60px',textAlign:'center'}}>{s}</p>
        )})}
        </div>
        <p style={{width:'290px'}}>{desc}</p>
        <p>➕<span style={{border:'1px solid',padding:'2px 10px'}}>3</span>➖</p>
        <button>Dodaj do koszyka</button> */}
      </div>
      
  )
}

export default Card