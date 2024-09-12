import { createRoot } from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Layout from './Layout.jsx'
import Home from './pages/Home.jsx'
import About from './pages/About.jsx'
import Contact from './pages/Contact.jsx'
import Product from './pages/Product.jsx'
import PageNotFound from './pages/PageNotFound.jsx'
import 'bootstrap/dist/css/bootstrap.min.css';
import SingleProduct from './pages/SingleProduct.jsx'

const router = createBrowserRouter([
  {
    path : '/',
    element : <Layout />,
    children : [
      {
        path : '',
        element : <Home />
      },
      {
        path : '/About',
        element : <About />
      },
      {
        path : '/Contact',
        element : <Contact />
      },
      {
        path : '/Product',
        element : <Product />
      },
      {
        path : '/SingleProduct/:id',
        element : <SingleProduct />
      },
      {
        path : '*',
        element : <PageNotFound/>
      },
    ]
  }
])

createRoot(document.getElementById('root')).render(
  <RouterProvider router={router}>
    <Layout />
  </RouterProvider>
)
