import logo from './logo.svg';
import './App.css';

import {createBrowserRouter, RouterProvider} from 'react-router-dom';
import Home from './page/Home';
import Products from './page/Products';

const router = createBrowserRouter([
  { 
    path:"/",
    element: <Home/>
  },
  { 
    path:"/products",
    element: <Products/>
  },
]);
function App() {
  return (
   <RouterProvider router={router}/>
  );
}

export default App;
