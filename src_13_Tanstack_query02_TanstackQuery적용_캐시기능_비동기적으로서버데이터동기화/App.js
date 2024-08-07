import logo from './logo.svg';
import './App.css';
//src_13_Tanstack_query02_TanstackQuery적용_캐시기능_비동기적으로서버데이터동기화
import { createBrowserRouter, RouterProvider} from 'react-router-dom';
import Home from './pages/Home';
import Products from './pages/Products';
import RootLayout from './pages/RootLayout';
import ErrorPage from './pages/ErrorPage';
import Users from './pages/Users';
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
    errorElement:<ErrorPage />,
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
      }
    ]
  }
]);

// Create a client
const queryClient = new QueryClient()

function App() {
  return (
    <QueryClientProvider client={queryClient}>
       <RouterProvider router={router} />
    </QueryClientProvider>
  );
}

export default App;
