import logo from './logo.svg';
import './App.css';

import { createBrowserRouter, RouterProvider, json, redirect } from 'react-router-dom';
import Home from './page/Home';
import Products from './page/Products';
import Users from './page/Users';
import AddUser from './page/AddUser';
import RootLayout from './page/RootLayout';
import ErrorPage from './page/ErrorPage';

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    errorElement: <ErrorPage />,
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
          // var response = await fetch(url); //이거 대신 예외발생시키기
          var response = await fetch(url, {
            method: "PUT"
          });

          /////////////////////////////////

          console.log(response);
          if (!response.ok) {
            // throw new Response("Not Found", {status:404}); //요즘은 이거잘안쓰고 아래꺼
            throw json({
              message: 'error발생 statusText',
              message2: '에러발생data'
            }, { status: 500 });
          }

          /////////////////////////////////
          var xxx = await response.json();
          var userList = xxx.data;
          return userList;

        }
      },
      {
        path: "/add-user",
        element: <AddUser />,
        action: async ({ request }) => {
          let formData = await request.formData();

          let id = formData.get("id");
          let email = formData.get("email");
          let first_name = formData.get("first_name");
          let last_name = formData.get("last_name");

          console.log("id:", id);
          console.log("email:", email);
          console.log("first_name:", first_name);
          console.log("last_name:", last_name);

          return redirect("/");

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
