import React, { useEffect, useState } from 'react'
import './Dashboard.css'
import Card from '../../components/Card/Card'
const Dashboard = () => {
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
