import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Helmet } from "react-helmet";
import ProductDetailCard from "../components/ProductDetailCard";
import Recommendation from "../components/Recommendation";
import { Link } from "react-router-dom";

// Product detail page
export default function ProductDetail() {
  // Initial state
  const [isLoading, setIsLoading] = useState(false);
  const [product, setProduct] = useState(null); // Initialize as null to store the fetched product
  const [error, setError] = useState(null);

  // Use params to get the productId
  const { productId } = useParams();

  // Fetching product data from the server
  useEffect(() => {
    // Function to fetch data
    async function fetchProduct() {
      try {
        setIsLoading(true);
        const response = await fetch(
          `https://kicks-store-react-api.onrender.com/shoes/${productId}`
        );

        // Check response
        if (!response.ok) {
          throw new Error("Something went wrong");
        } else {
          const data = await response.json();

          // Set fetched data
          setProduct(data.shoe); // Assuming `data` is the single product object
        }
      } catch (error) {
        setError(error.message);
      } finally {
        setIsLoading(false);
      }
    }

    // Call fetchProduct function
    fetchProduct();
  }, [productId]); // Include productId as a dependency

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  // Render product details if the product is fetched
  return (
    <>
      <Helmet>
        <title>{product ? product.name : "Product Detail"}</title>
      </Helmet>

      <section className="min-h-screen mt-24">
        {/* Product detail */}
        {product ? (
          // Header container
          <>
            <div className="px-5 space-y-6">
              {/* Breadcrumbs */}
              <div className="breadcrumbs font-inter  text-zinc-700 text-md sm:text-lg">
                <ul>
                  <li>
                    <Link to="/">Home</Link>
                  </li>
                  <li>
                    <Link to="/product">Shop All</Link>
                  </li>
                  <li>
                    <Link to={`/product/${product.category}`}>
                      {product.category}
                    </Link>
                  </li>
                  <li>
                    <Link to={`/product/${product.category}/${product.id}`}>
                      {product.name}
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
            {/* Product detail card */}
            <ProductDetailCard product={product} />
          </>
        ) : (
          <div>No product found.</div>
        )}
        <Recommendation />
      </section>
    </>
  );
}
