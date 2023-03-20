import React, { useEffect, useState, useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import './Dashboard.css'
import Card from '../../components/Card/Card'
import { AppContext } from '../../App'

const Dashboard = () => {
  const navigate = useNavigate()
  const { data, setData } = useContext(AppContext)

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

  return (
    <div className='dashboard'>
      {data &&
        data.map((el) => {
          return (
            <Card
              onClick={() => navigate(`/card-edit/${el.id}`)}
              key={el.id}
              title={el.title}
              image={el.image}
              price={el.price}
              // color={el.color}
              // size={el.size}
              // desc={el.desc}
            />
          )
        })}
    </div>
  )
}

export default Dashboard
