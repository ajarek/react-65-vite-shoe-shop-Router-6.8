import { Outlet, useLoaderData } from 'react-router-dom'
import Nav from '../../components/Nav/Nav'
import  './Main.css'

export const mainLoader = () => {
  const title = 'Topowe Buty Sportowe'
  return title
}

const Main = () => {
  const title = useLoaderData()
  return (
    <div className='main-layout'>
      <Nav title={title} />
      
      <Outlet />
    </div>
  )
}

export default Main