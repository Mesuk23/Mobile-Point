import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';
import Main from './Layout/Main';
import AddProduct from './Pages/AddProduct/AddProduct';
import MyProduct from './Pages/AddProduct/MyProduct/MyProduct';
import AllBuyer from './Pages/AllBuyer/AllBuyer';
import AllSeller from './Pages/AllSeller/AllSeller';
import Blog from './Pages/Blog/Blog';
import Dashboard from './Pages/Dashboard/Dashboard';
import Home from './Pages/Home/Home/Home';
import Login from './Pages/Login/Login';
import Mobiles from './Pages/Mobiles/Mobiles';
import MyOrders from './Pages/MyOrders/MyOrders';
import Register from './Pages/Register/Register';
import ReportedItems from './Pages/ReportedItems/ReportedItems';
import NotFound from './Pages/Shared/NotFound/NotFound';
import PrivateRoute from './PrivateRoute/PrivateRoute';
import AdminRoute from './PrivateRoute/AdminRoute';
import Checkout from './Pages/Checkout/Checkout';

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
          path: '/blog',
          element: <Blog></Blog>
        },
        {
          path: '/checkout',
          element: <Checkout></Checkout>
        },



        {
          path: '/dashboard',
          element: <PrivateRoute><Dashboard></Dashboard></PrivateRoute>,
          children: [
            {
              path: '/dashboard/myorder',
              element: <PrivateRoute><MyOrders></MyOrders></PrivateRoute>,
              loader: () => fetch('http://localhost:5000/allbuyer')
            },
            {
              path: '/dashboard/addproduct',
              element: <PrivateRoute><AddProduct></AddProduct></PrivateRoute>
            },
            {
              path: '/dashboard/dashboard',
              element: <PrivateRoute><Dashboard></Dashboard></PrivateRoute>,
            },
            {
              path: '/dashboard/allseller',
              element: <AllSeller></AllSeller>
            },
            {
              path: '/dashboard/allbuyer',
              element: <AllBuyer></AllBuyer>,
            },
            {
              path: '/dashboard/reporteditem',
              element: <PrivateRoute><ReportedItems></ReportedItems></PrivateRoute>,
              loader: () => fetch('http://localhost:5000/allMobiles')
            },
            {
              path: '/dashboard/myproducts',
              element: <PrivateRoute><MyProduct></MyProduct></PrivateRoute>
            }
          ]
        },
        {
          path: '/products',
          element: <Mobiles></Mobiles>,
          loader: () => fetch('http://localhost:5000/allMobiles')
        },
        {
          path: '/products/:category',
          element: <PrivateRoute><Mobiles></Mobiles></PrivateRoute>,
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
