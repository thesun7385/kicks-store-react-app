import { RouterProvider, createBrowserRouter } from "react-router-dom";

// Import pages
import RootLayout from "./pages/Root";
import HomePage from "./pages/Home";
import ProductDetailPage from "./pages/ProductDetail";
import ProductPage from "./pages/Product";
import ProductsRoot from "./pages/ProductsRoot";
import AboutPage from "./pages/About";
import ErrorPage from "./pages/Error";

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
          {
            path: ":productId",
            id: "product-detail",
            element: <ProductDetailPage />, // product detail page
          },
        ],
      },
      // About page route
      {
        path: "about",
        element: <AboutPage />, // about page
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
