import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Home from "./ui/Home";
import Menu, { loader as menuLoader } from "./features/menu/Menu";
import Cart from "./features/cart/Cart";
import CreateOrder, {
  action as createOrderAction,
} from "./features/order/CreateOrder";
import Order, { loader as orderLoader } from "./features/order/Order";
import { action as updateOrderAction } from "./features/order/UpdateOrder";
import AppLayout from "./ui/AppLayout";
import Error from "./ui/Error";

// To use data loaders, data actions, data fetchers, we need to use createBrowserRouter, not the regular BrowserRouter;
// Provider router object to <RouterProvider /> component.
const router = createBrowserRouter([
  {
    // Applayout route without path is "Layout Route"
    element: <AppLayout />,
    errorElement: <Error />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        // Data loader is done is 3 steps: 1. create the loader, 2. connect the loader, 3. provide data to the page, go to Menu.jsx for more details:
        path: "/menu",
        element: <Menu />,
        // Multiple loaders can be added inside of an array: [loader1, loader2, ...]
        loader: menuLoader,
        // Error element is located inside of Menu route so that it still renders the other components;
        // If not placed in this Menu route, it will bubble up to the parent, AppLayout:
        errorElement: <Error />,
      },
      {
        path: "/cart",
        element: <Cart />,
      },
      {
        path: "/order/new",
        element: <CreateOrder />,
        action: createOrderAction,
        errorElement: <Error />,
      },
      {
        path: "/order/:orderId",
        element: <Order />,
        loader: orderLoader,
        errorElement: <Error />,
        action: updateOrderAction,
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
