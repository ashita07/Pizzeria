import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./ui/Home";
import Menu from "./features/Menu/Menu";
import Cart from "./features/Cart/Cart";
import Order from "./features/Order/Order";
import CreateOrder from "./features/Order/CreateOrder";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/order/:orderId",
    element: <Order />,
  },
  {
    path: "/menu",
    element: <Menu />,
  },
  {
    path: "/cart",
    element: <Cart />,
  },
  {
    path: "/order/new",
    element: <CreateOrder />,
  },
]);
function App() {
  return <RouterProvider router={router} />;
}

export default App;
