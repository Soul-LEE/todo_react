import logo from './logo.svg';
import './App.css';
import {createBrowserRouter, RouterProvider} from 'react-router-dom';
import Home from './page/Home';
import Products from './page/Products';
import Users from './page/Users';
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
        element:<Users />
      },
      {
        path:"/usersSearch",
        element:<UsersSearch />
      },
    ]
  }
]);

// Create a client
const queryClient = new QueryClient()


function App() {
  return (
    <QueryClientProvider client={queryClient}>
   <RouterProvider router={router}/>
   </QueryClientProvider>

  );
}

export default App;
