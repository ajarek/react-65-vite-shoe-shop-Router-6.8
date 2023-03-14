import React, { useEffect,useState } from 'react'
import './Dashboard.css'

const Dashboard = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch('src/assets/data.json');
        const json = await response.json();
        setData(json);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    }

    fetchData();
  }, []);
  console.log(data);
  return (
    <div className='dashboard'>
      {data&&data.map(el=>{return(
      <div className="card" key={el.id}>
        <h4>{el.title}</h4>
        <img src={el.image} alt="image" width={300}/>
        <h5>{el.price}</h5>
        <p>{el.color}</p>
        <div className="wrapper" style={{width:'290px'}}>
        {el.size.map((s, i) =>{return(
          <p style={{border:'1px solid',width:'60px',textAlign:'center'}}>{s}</p>
        )})}
        </div>
        <p style={{width:'290px'}}>{el.desc}</p>
        <p>➕<span style={{border:'1px solid',padding:'2px 10px'}}>3</span>➖</p>
        <button>Dodaj do koszyka</button>
      </div>
      
        )
        
})}
      
    </div>
  )
}

export default Dashboard