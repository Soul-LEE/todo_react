import logo from './logo.svg';
import './App.css';
import {createBrowserRouter, RouterProvider} from 'react-router-dom';
import Home from './page/Home';
import Products from './page/Products';
import Users, {loader as UserLoader} from './page/Users';
import UsersAdd from './page/UsersAdd';
import UsersSearch from './page/UsersSearch';
import RootLayout from './page/RootLayout';
import ErrorPage from './page/ErrorPage';
import {
  useQuery,
  useMutation,
  useQueryClient,
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query'
import {queryClient} from './http/HttpService';



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
        element:<Users />,
        loader: UserLoader
      },
      {
        path:"/usersSearch",
        element:<UsersSearch />
      },
      {
        path:"/usersAdd",
        element:<UsersAdd />
      },
    ]
  }
]);

// Create a client
// const queryClient = new QueryClient()
//이걸 httpService에 옮기고 거기서 불러쓰기

function App() {
  return (
    <QueryClientProvider client={queryClient}>
   <RouterProvider router={router}/>
   </QueryClientProvider>

  );
}

export default App;
