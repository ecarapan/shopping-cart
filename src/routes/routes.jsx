import App from "@/app/App.jsx";
import ErrorPage from "@/pages/Error/ErrorPage.jsx";
import HomePage from "@/pages/Home/HomePage.jsx";
import ShopPage from "@/pages/Shop/ShopPage.jsx";
import CartPage from "@/pages/Cart/CartPage";

const routes = [
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      {
        path: "shop",
        element: <ShopPage />,
      },
      {
        path: "cart",
        element: <CartPage />,
      },
    ],
  },
];

export default routes;
