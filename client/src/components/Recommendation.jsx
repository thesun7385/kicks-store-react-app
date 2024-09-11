import { useState, useEffect } from "react";
import ProductCard from "./ProductCard";
import { Link } from "react-router-dom";

import { motion } from "framer-motion";

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
            .slice(0, 10);

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
      <div>
        <div className="py-8 flex flex-col sm:flex-row sm:justify-between">
          <h1 className="pl-8 uppercase font-inter text-black  text-3xl text-center sm:text-6xl sm:text-left font-extrabold">
            New Arrivals
          </h1>
          {/* Link to see all items */}
          <Link to="/product">
            <p className="font-inter text-sm font-bold underline p-5">
              See all items
            </p>
          </Link>
        </div>
        {/* Error message */}
        {error && (
          <p className="text-red-500">
            <div className="toast">
              <div className="alert alert-error">
                <span>Type Error: Failed to fetch</span>
              </div>
            </div>
          </p>
        )}
        {isLoading && (
          <div className="flex justify-center items-center">
            <div className="carousel rounded-box ">
              {/* Render skeletons while loading */}
              {Array.from({ length: 3 }).map((index) => (
                <div className="carousel-item" key={index}>
                  <div
                    className="m-5 skeleton card w-[80vw] h-[80vw] max-w-[237px]  
                max-h-[230px] lg:max-w-[321px] lg:max-h-[337px] object-cover"
                    key={index}
                  ></div>
                </div>
              ))}
            </div>
          </div>
        )}
        {/* New arrivals box */}
        {/* Render recommended shoes */}
        {!isLoading && !error && fetchedProducts.length > 0 && (
          <div className="flex justify-center items-center gap-4">
            {/* Carousel */}
            <div className="carousel rounded-box ">
              {/* Add link for product id */}
              {fetchedProducts.map((product) => (
                // Motion div for animation
                <motion.div
                  className="carousel-item"
                  key={product.id}
                  animate={{ x: [0, -1000] }}
                  transition={{
                    duration: 15, // Duration of animation
                    ease: "linear", // Easing function for smoother motion
                    repeat: Infinity, // Keeps looping
                  }}
                >
                  <Link to={`/product/${product.category}/${product.id}`}>
                    {/* Render ProductCard component */}
                    <ProductCard key={product.id} product={product} />
                  </Link>
                </motion.div>
              ))}
            </div>
          </div>
        )}
      </div>
    </>
  );
}
