import { createContext, useState } from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Dashboard from './pages/Dashboard/Dashboard'
import Contact from './pages/Contact/Contact'
import Cart from './pages/Cart/Cart'
import CardEdit from './pages/CardEdit/CardEdit'
import Main,{ mainLoader }  from './layouts/Main/Main'
export const AppContext = createContext()

const router = createBrowserRouter([
  {
    path: '/',
    element: <Main />,
    loader: mainLoader,
    errorElement: <Error />,
    children: [
      {
        index: true,
        element: <Dashboard />,
        errorElement: <Error />,
      },
      {
        path: 'card-edit',

        errorElement: <Error />,
        children: [
          {
            path: ':id',
            // action: noteEditAction,
            element: <CardEdit />,
            errorElement: <Error />,
          },
        ],
      },
      {
        path: 'contact',
        element: <Contact />,
        // action: noteAction,
        errorElement: <Error />,
      },
      {
        path: 'cart',
        element: <Cart />,
        // action: noteAction,
        errorElement: <Error />,
      },

    ],
  },
])
function App() {
  const [data, setData] = useState(null)
  const [count, setCount]=useState(1)
  const [colorShoes, setColorShoes]=useState()
  const [sizeShoes, setSizeShoes]=useState()
  const [cart, setCart]=useState([])
  return (
    <div className='App'>
      <AppContext.Provider
        value={{ data, setData,count, setCount, colorShoes, setColorShoes, sizeShoes, setSizeShoes,cart, setCart }}
      >
      <RouterProvider router={router} />
      </AppContext.Provider>
    </div>
  )
}

export default App
