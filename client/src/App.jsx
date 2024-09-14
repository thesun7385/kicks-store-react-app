import { RouterProvider, createBrowserRouter } from "react-router-dom";

// Import pages
import RootLayout from "./pages/Root";
import HomePage from "./pages/Home";
import ProductDetailPage from "./pages/ProductDetail";
import ProductPage from "./pages/Product";
import ProductMenPage from "./pages/ProductMen";
import ProductWomenPage from "./pages/ProductWomen";
import ProductKidsPage from "./pages/ProductKids";
import ProductsRoot from "./pages/ProductsRoot";
import AboutPage from "./pages/About";
import ErrorPage from "./pages/Error";
import Register from "./pages/Register";
import Favorite from "./pages/Favorite";

// Import redux and react, and actions for fetching and sending cart data
// import { useSelector, useDispatch } from "react-redux";
// import { Fragment, useEffect } from "react";
// import { fetchCartData, sendCartData } from "./store/cart-actions";

// Create a browser router
const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    errorElement: <ErrorPage />,

    children: [
      // Home page route
      { index: true, element: <HomePage /> }, // home page
      {
        // Product routes with nested routes
        path: "product",
        element: <ProductsRoot />, // product root page
        children: [
          {
            index: true,
            element: <ProductPage />, // product page
          },

          // Men's shoes page with nested productId route
          {
            path: "men",
            children: [
              {
                index: true,
                element: <ProductMenPage />, // men's product page
              },
              {
                path: ":productId",
                element: <ProductDetailPage />, // men's product detail page
              },
            ],
          },
          // Women product page
          {
            path: "women",
            children: [
              {
                index: true,
                element: <ProductWomenPage />, // men's product page
              },
              {
                path: ":productId",
                element: <ProductDetailPage />, // men's product detail page
              },
            ],
          },
          // Kids product page
          {
            path: "kids",
            children: [
              {
                index: true,
                element: <ProductKidsPage />, // kids product page
              },
              {
                path: ":productId",
                element: <ProductDetailPage />, // men's product detail page
              },
            ],
          },
        ],
      },
      // About page route
      {
        path: "about",
        element: <AboutPage />, // about page
      },
      // Login page route
      {
        path: "register",
        element: <Register />,
      },
      // Favorites page route
      {
        path: "favorites",
        element: <Favorite />,
      },
    ],
  },
]);

function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
