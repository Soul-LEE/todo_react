import logo from './logo.svg';
import './App.css';
// src_12_라우팅02_loader함수05_loader함수를컴포넌트에서구현
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Products from './page/Products';
import Users, {loader as UserLoader} from './page/Users';
import RootLayout from './page/RootLayout';
import Home from './page/Home';
const router = createBrowserRouter([
  
  {
    path: "/",
    element: <RootLayout />,
    id:'root',
    loader: 
      async function () {
        var url = "https://reqres.in/api/users?page=1";
        var response = await fetch(url);
        var json = await response.json();
        var userList = json.data;
        return userList
      },
    children: [
      {
        path: "/",
        element: <Home />
      },
      {
        path: "/products",
        element: <Products />
      },
      {
        path: "/users",
        element: <Users />,
        loader: UserLoader
        ////////////////////////
      
        ///////////////////////////
      },
    ]
  }
]);

function App() {
  return (
    <RouterProvider router={router} />
  );
}

export default App;
