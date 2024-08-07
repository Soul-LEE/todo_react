import logo from './logo.svg';
import './App.css';
import {createBrowserRouter, RouterProvider} from 'react-router-dom';
import Home from './page/Home';
import Products from './page/Products';
import RootLayout from './page/RootLayout';
//src_12_라우팅01_기본4_메뉴역할의RootLayout작성
const router = createBrowserRouter([
  { 
    path:"/",
    element: <RootLayout />,
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
