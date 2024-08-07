import logo from './logo.svg';
import './App.css';
//src_12_라우팅02_loader함수02_PathVariable_params속성
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Products from './page/Products';
import Users from './page/Users';
import RootLayout from './page/RootLayout';
import Home from './page/Home';
import UserSinglePage from './page/UserSinglePage';
const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children:[
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
          return userList;

        }
      },
      {   
        path: "/users/:id",
        element: <UserSinglePage />,
        loader: async function ({params}) { //개채분해할당으로넣어줌
          var url = `https://reqres.in/api/users/${params.id}`;
          var response = await fetch(url);
          var json = await response.json();
          var userList = json.data;
          return userList;

        }
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
