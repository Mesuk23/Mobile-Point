import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';
import Main from './Layout/Main';
import AddProduct from './Pages/AddProduct/AddProduct';
import MyProduct from './Pages/AddProduct/MyProduct/MyProduct';
import Blog from './Pages/Blog/Blog';
import Checkout from './Pages/Checkout/Checkout';
import Home from './Pages/Home/Home/Home';
import Login from './Pages/Login/Login';
import Mobiles from './Pages/Mobiles/Mobiles';
import Register from './Pages/Register/Register';
import NotFound from './Pages/Shared/NotFound/NotFound';
import PrivateRoute from './PrivateRoute/PrivateRoute';

function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Main></Main>,
      children: [
        {
          path: '/',
          element: <Home></Home>
        },
        {
          path: '/login',
          element: <Login></Login>
        },
        {
          path: '/register',
          element: <Register></Register>
        },
        {
          path: '/myproducts',
          element: <PrivateRoute><MyProduct></MyProduct></PrivateRoute>
        },
        {
          path: '/blog',
          element: <Blog></Blog>
        },
        {
          path: '/addproduct',
          element: <PrivateRoute><AddProduct></AddProduct></PrivateRoute>
        },
        {
          path: '/products',
          element: <Mobiles></Mobiles>,
          loader: () => fetch('http://localhost:5000/allMobiles')
        },
        {
          path: '/products/:category',
          element: <Mobiles></Mobiles>,
          loader: ({ params }) => fetch(`http://localhost:5000/allMobiles/${params.category}`)
        },
      ]
    },
    {
      path: '*',
      element: <NotFound></NotFound>
    }
  ])
  return (
    <div className='lg:w-4/5 mx-auto'>
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
