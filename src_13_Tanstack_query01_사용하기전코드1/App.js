import logo from './logo.svg';
import './App.css';
import {createBrowserRouter, RouterProvider} from 'react-router-dom';
import Home from './page/Home';
import Products from './page/Products';
import Users from './page/Users';
import RootLayout from './page/RootLayout';
import ErrorPage from './page/ErrorPage';


// src_13_Tanstack_query01_사용하기전코드1
const router = createBrowserRouter([
  { 
    path:"/",
    element: <RootLayout />,
    errorElement: <ErrorPage />,
    children:[
      {
        path:"/",
        element:<Home />
      },
      {
        path:"/products",
        element:<Products />
      },
      {
        path:"/users",
        element:<Users />
      },
    ]
  }
]);

function App() {
  return (
   <RouterProvider router={router}/>
  );
}

export default App;
