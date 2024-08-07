import logo from './logo.svg';
import './App.css';
import {createBrowserRouter, RouterProvider} from 'react-router-dom';
import Home from './page/Home';
import Products from './page/Products';
import RootLayout from './page/RootLayout';
import ErrorPage from './page/ErrorPage';
import ProductDetail from './page/ProductDetail';
import ProductDetail2 from './page/ProductDetail2';

//src_12_라우팅01_기본8_파라미터전달_PathVariable또는QueryString방식
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
        path:"/products/:id",
        element:<ProductDetail />
      },
      {
        path:"/products2",
        element:<ProductDetail2 />
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
