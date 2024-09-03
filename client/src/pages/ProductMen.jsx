import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";
import ProductCard from "../components/ProductCard";
import SelectBox from "../components/SelectBox";

export default function Proudct() {
  // Function to fetch data
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

          // Get Men's shoes
          const menShoes = data.shoes.filter(
            (shoe) => shoe.category === "Men" || shoe.category === "unisex"
          );

          // Set fetched data
          setFetchedProducts(menShoes);

          // console.log(fetchedProducts);
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
      <Helmet>
        <meta charSet="utf-8" />
        <title>Shop All</title>
      </Helmet>
      <section className="min-h-screen">
        {/* Header box */}
        <div className="px-5 space-y-6">
          {/* Breadcrumbs */}
          <div className="breadcrumbs font-inter font-light text-zinc-500 text-md sm:text-lg">
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/product">Shop All</Link>
              </li>
              <li>
                <Link to="/product/men">Men</Link>
              </li>
            </ul>
          </div>
          <div className="font-anton text-black uppercase text-5xl sm:text-6xl">
            Men ({fetchedProducts.length})
          </div>
          {/* Select box */}

          <SelectBox />
        </div>

        {/* Render all shoes */}
        {/* Error message */}
        {error && <p className="text-red-500">{error}</p>}
        {/* Loading state */}
        {isLoading && <p>Loading...</p>}
        {/* New arrivals box */}
        {/* Render recommended shoes */}
        {!isLoading && !error && fetchedProducts.length > 0 && (
          <div>
            <div
              className="m-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 
        justify-items-center "
            >
              {" "}
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
      </section>
    </>
  );
}
