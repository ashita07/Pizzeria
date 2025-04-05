import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from './ui/Home';
import Menu, { loader as menuLoader } from './features/Menu/Menu';
import Cart from './features/Cart/Cart';
import Order, { loader as orderLoader } from './features/Order/Order';
import CreateOrder, {
  action as createOrderAction,
} from './features/Order/CreateOrder';
import AppLayout from './ui/AppLayout';
import Error from './ui/Error';
import { action as updateOrderAction } from './features/Order/UpdateOrder';
const router = createBrowserRouter(
  [
    {
      element: <AppLayout />,
      errorElement: <Error />,
      children: [
        {
          path: '/',
          element: <Home />,
        },
        {
          path: '/order/:orderId',
          element: <Order />,
          loader: orderLoader,
          errorElement: <Error />,
          action: updateOrderAction,
        },
        {
          path: '/menu',
          element: <Menu />,
          loader: menuLoader,
          errorElement: <Error />,
        },
        {
          path: '/cart',
          element: <Cart />,
        },
        {
          path: '/order/new',
          element: <CreateOrder />,
          action: createOrderAction,
        },
      ],
    },
  ],
  {
    future: {
      v7_relativeSplatPath: true,
    },
  }
);
function App() {
  return (
    <RouterProvider
      router={router}
      future={{
        v7_startTransition: true,
      }}
    />
  );
}

export default App;
