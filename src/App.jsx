import { createBrowserRouter, RouterProvider } from "react-router-dom";
import AppLayout from "./components/custom/AppLayout";
import Home from "./pages/Home";
import Cart from "./pages/Cart";
import Checkout from "./pages/Checkout";
import Error from "./pages/Error";
import { CartProvider } from "./context/CartContext";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      Component: AppLayout,
      children: [
        {
          index: true,
          Component: Home,
        },
        {
          path: "cart",
          Component: Cart,
        },
        {
          path: "checkout",
          Component: Checkout,
        },
        {
          path: "*",
          Component: Error,
        },
      ],
    },
  ]);
  return (
    <CartProvider>
      <RouterProvider router={router} />
    </CartProvider>
  );
}

export default App;
