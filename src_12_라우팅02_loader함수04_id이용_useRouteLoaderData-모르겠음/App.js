import logo from './logo.svg';
import './App.css';

import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Products from './page/Products';
import Users from './page/Users';
import RootLayout from './page/RootLayout';
import Home from './page/Home';
const router = createBrowserRouter([
  //src_12_라우팅02_loader함수04_id이용_useRouteLoaderData
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
        loader: async function () {
          var url = "https://reqres.in/api/users?page=2";
          var response = await fetch(url);
          var json = await response.json();
          var userList = json.data;
          return userList
        },
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
