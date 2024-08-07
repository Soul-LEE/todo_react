import logo from './logo.svg';
import './App.css';
import {createBrowserRouter, RouterProvider} from 'react-router-dom';
import Home from './page/Home';
import Products from './page/Products';
import RootLayout from './page/RootLayout';
import ErrorPage from './page/ErrorPage';
//src_12_라우팅01_기본6_menu링크활성화_ NavLink_isActive
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
    ]
  }
]);

function App() {
  return (
   <RouterProvider router={router}/>
  );
}

export default App;
