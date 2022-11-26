import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';
import Main from './Layout/Main';
import MyProduct from './Pages/AddProduct/MyProduct/MyProduct';
import Blog from './Pages/Blog/Blog';
import Home from './Pages/Home/Home/Home';
import Login from './Pages/Login/Login';
import Mobiles from './Pages/Mobiles/Mobiles';
import Register from './Pages/Register/Register';

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
          path: '/products',
          element: <Mobiles></Mobiles>,
          loader: () => fetch('http://localhost:5000/AllMobiles')
        },
      ]
    }
  ])
  return (
    <div className='lg:w-4/5 mx-auto'>
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
