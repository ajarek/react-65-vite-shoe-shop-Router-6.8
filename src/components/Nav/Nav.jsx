import React,{useState,useContext} from 'react'
import { AppContext } from '../../App'
import { FaShoppingCart,FaMailBulk } from 'react-icons/fa';
import './Nav.css'
import Hamburger from 'hamburger-react'
import { Link } from 'react-router-dom'


const Nav = ({ title }) => {
  const { data, setData,cart, setCart } = useContext(AppContext)
  const [isOpen, setOpen] = useState(false)
  return (
    <nav className='nav'>
      <div className='nav-wrapper'>
        <Link
          to={'/'}
          className={'link'}
        >
          <div className='title'>
          <img
              src='/logo.png'
              alt='logo'
            />
            <h1>{title}</h1>
          
          </div>
        </Link>
      </div>
      <ul className={!isOpen ? 'wrapper' : 'wrapper navbar-none'}>
       <Link className='link'
       to={'/contact'}
       >
       <h2>Kontakt<span className='span-contact'><FaMailBulk/></span></h2>
       </Link>
       <Link 
       className='link'
       to={'/cart'}
       ><h2><FaShoppingCart/><span className='span-cart'>{cart.length||0}</span></h2>
       </Link>
      </ul>
      <div className='hamburger'>
        <Hamburger
          size={30}
          duration={0.3}
          distance='md'
          color={isOpen ? '#ff3f34' : '#1e272e'}
          easing='ease-in'
          rounded
          label='Show menu'
          onToggle={(toggled) => {
            setOpen(true)
            if (toggled) {
              // open a menu
            } else {
              setOpen(false)
            }
          }}
        />
      </div>
    </nav>
  )
}

export default Nav