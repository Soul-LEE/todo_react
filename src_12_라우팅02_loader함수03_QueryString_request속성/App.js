import logo from './logo.svg';
import './App.css';
// src_12_라우팅02_loader함수03_QueryString_request속성
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Products from './page/Products';
import Users from './page/Users';
import RootLayout from './page/RootLayout';
import Home from './page/Home';
import UserSinglePage from './page/UserSinglePage';
import UserMultiplePage from './page/UserMultiplePage';
const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
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
          return userList;

        }
      },
      {
        path: "/users/:id",
        element: <UserSinglePage />,

        loader: async function ({ params }) { //개채분해할당으로넣어줌
          var url = `https://reqres.in/api/users/${params.id}`;
          var response = await fetch(url);
          var json = await response.json();
          var userList = json.data;
          return userList;

        }
      },
      {

        // user2?page=2 쿼리스트링은 {params}말고request
        path: "/users2",
        element: <UserMultiplePage />,

        loader: async function ({ request }) {
          console.log("머얌?",request);
          const x = new URL(request.url);
          console.log("이건또먼데?",x);
          console.log("이건또먼데?",x.URLSearchParams);
          const x2 = x.searchParams.get("page");
          console.log(x2);


          var url = `https://reqres.in/api/users?page=${x2}`;
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
