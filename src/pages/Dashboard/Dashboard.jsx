import React, { useEffect, useState } from 'react'
import { useNavigate } from "react-router-dom";
import './Dashboard.css'
import Card from '../../components/Card/Card'
const Dashboard = () => {
  const navigate = useNavigate();
  const [data, setData] = useState(null)

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch('src/assets/data.json')
        const json = await response.json()
        setData(json)
      } catch (error) {
        console.error('Error fetching data:', error)
      }
    }

    fetchData()
  }, [])
  console.log(data)
  return (
    <div className='dashboard'>
      {data &&
        data.map((el) => {
          return (
            <Card
              onClick={()=> navigate(`/card-edit/:${el.id}`)}
              key={el.key}
              title={el.title}
              image={el.image}
              price={el.price}
              color={el.color}
              size={el.size}
              desc={el.desc}
            />
          )
        })}
    </div>
  )
}

export default Dashboard
