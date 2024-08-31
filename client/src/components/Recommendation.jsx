import { useState, useEffect } from "react";
import Product from "./Product";

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
      <div className="p-8">
        <div className="flex flex-col sm:flex-row sm:justify-between">
          <h1 className="font-inter text-3xl text-center sm:text-6xl sm:text-left font-semibold">
            New Arrivals
          </h1>
          {/* Link to see all items */}
          <p className="font-inter text-sm font-bold underline py-5">
            See all items
          </p>
        </div>

        {/* Error message */}
        {error && <p className="text-red-500">{error}</p>}

        {/* Loading state */}
        {isLoading && <p>Loading...</p>}

        {/* New arrivals box */}

        {/* Render recommended shoes */}
        {!isLoading && !error && fetchedProducts.length > 0 && (
          <div className="flex flex-col sm:flex-row p-10 sm:space-x-6 justify-center items-center">
            {fetchedProducts.map((product) => (
              <Product key={product.id} product={product} />
            ))}
          </div>
        )}
      </div>
    </>
  );
}
