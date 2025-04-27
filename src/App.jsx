
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './App.css'
import PageNotFound from './components/PageNotFound'
import Portfolio from './components/portfolio'

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <PageNotFound/>
    },
    {
      path:"/:lien_portfolio",
      element: <Portfolio/>
    }
  ])
  return (
   <RouterProvider router={router}/>
  )
}

export default App
