import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Dashboard from './pages/Dashboard/Dashboard'
import Contact from './pages/Contact/Contact'
import Cart from './pages/Cart/Cart'
import Main,{ mainLoader }  from './layouts/Main/Main'
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
        // loader: dashboardLoader,
        // action: dashboardAction,
        errorElement: <Error />,
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
  return (
    <div className='App'>
      <RouterProvider router={router} />
    </div>
  )
}

export default App
