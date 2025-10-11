import { createBrowserRouter } from 'react-router'
import App from '../App'
import MainLayout from '../layouts/MainLayout';
import Home from '../pages/Home';
import Products from '../pages/Products';
import ErrorPage from '../pages/ErrorPage';
const router = createBrowserRouter([
  {
    path:'/',
    Component: MainLayout,
    errorElement: <ErrorPage/>,
    hydrateFallbackElement: <p>Loading...</p>,
    children: [
            {
                index: true,
                Component: Home,
                loader: () => fetch('products.json')
            },
            {
                path:'/home',
                Component: Home
            },
            {
                path:'/products',
                Component: Products
            }
    ]
  }
])
export default router;