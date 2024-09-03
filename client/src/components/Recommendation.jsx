import { useState, useEffect } from "react";
import ProductCard from "./ProductCard";
import { Link } from "react-router-dom";

// Recommendation component
export default function Recommendation() {
  // Initial state
  const [isLoading, setIsLoading] = useState(false);
  const [fetchedProducts, setFetchedProducts] = useState([]); // Initialize as an empty array
  const [error, setError] = useState(null);

  // Fetching product data from the server
  useEffect(() => {
    // Function to fetch data
    async function fetchProduct() {
      try {
        setIsLoading(true);
        const response = await fetch("http://localhost:3000/shoes");

        // Check response
        if (!response.ok) {
          throw new Error("Something went wrong");
        } else {
          const data = await response.json();

          // Random 3 products from data products
          const randomProducts = data.shoes
            .sort(() => 0.5 - Math.random())
            .slice(0, 3);

          // Set fetched data
          setFetchedProducts(randomProducts);
        }
      } catch (error) {
        setError(error.message);
      } finally {
        setIsLoading(false);
      }
    }

    // Call fetchProduct function
    fetchProduct();
  }, []);

  return (
    <>
      <div className="m-8">
        <div className="flex flex-col sm:flex-row sm:justify-between">
          <h1 className="font-inter uppercase text-black  text-4xl text-center sm:text-6xl sm:text-left font-semibold">
            New Arrivals
          </h1>
          {/* Link to see all items */}
          <Link to="/product">
            <p className="font-inter text-sm font-bold underline py-5">
              See all items
            </p>
          </Link>
        </div>
        {/* Error message */}
        {error && <p className="text-red-500">{error}</p>}
        {/* Loading state */}
        {isLoading && <p>Loading...</p>}
        {/* New arrivals box */}
        {/* Render recommended shoes */}
        {!isLoading && !error && fetchedProducts.length > 0 && (
          <div className="flex justify-center items-center">
            <div className="m-4 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3">
              {/* Add link for product id */}
              {fetchedProducts.map((product) => (
                // Link to product detail
                <Link
                  to={`/product/${product.category}/${product.id}`}
                  key={product.id}
                >
                  {/* Render ProductCard component */}
                  <ProductCard key={product.id} product={product} />
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </>
  );
}
