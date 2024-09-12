import { useState } from "react";
import {
  Dialog,
  DialogBackdrop,
  DialogPanel,
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
  Menu,
  MenuButton,
  MenuItem,
  MenuItems,
} from "@headlessui/react";
import { XMarkIcon } from "@heroicons/react/24/outline";
import {
  ChevronDownIcon,
  FunnelIcon,
  MinusIcon,
  PlusIcon,
} from "@heroicons/react/20/solid";

import { useEffect } from "react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";
import ProductCard from "../ProductCard";

// Import filter data
import { filters, sortOptions, subCategories } from "../../store/fiter";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

// Set up page number
const PER_PAGE = 9;

// Filter component
export default function WomenProductComponent() {
  // State to manage page number
  const [page, setPage] = useState(1);

  // State for list of artworks and page number
  const [productList, setProductList] = useState(null);

  const [mobileFiltersOpen, setMobileFiltersOpen] = useState(false);

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
        const response = await fetch(
          import.meta.env.VITE_APP_API_KEY_ALL_SHOES
        );

        // Check response
        if (!response.ok) {
          throw new Error("Something went wrong");
        } else {
          const data = await response.json();

          // Get Men's shoes
          const womenShoes = data.shoes.filter(
            (shoe) => shoe.category === "Women" || shoe.category === "unisex"
          );

          // Set fetched data
          setFetchedProducts(womenShoes);

          ////////////  Pagination ////////////

          // Get the total number of pages
          const result = [];

          // Calculate pagination only after the data is set
          for (let i = 0; i < womenShoes.length; i += PER_PAGE) {
            result.push(womenShoes.slice(i, i + PER_PAGE)); // slice the data and push in result arr
          }

          // Set the result to the productList state
          setProductList(result);

          // Set the total number of pages
          setPage(1);

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

  // Function to handle page number
  function handlePageNumber(pageIndex) {
    setPage(pageIndex + 1);
  }

  return (
    <div className="bg-white">
      <div className="font-anton text-black uppercase text-5xl sm:text-6xl">
        Women ({fetchedProducts.length})
      </div>
      <div>
        {/* Mobile filter dialog */}
        <Dialog
          open={mobileFiltersOpen}
          onClose={setMobileFiltersOpen}
          className="relative z-40 lg:hidden"
        >
          <DialogBackdrop
            transition
            className="fixed inset-0 bg-black bg-opacity-25 transition-opacity duration-300 ease-linear 
            data-[closed]:opacity-0"
          />

          <div className="fixed inset-0 z-40 flex">
            <DialogPanel
              transition
              className="relative ml-auto flex h-full w-full max-w-xs transform flex-col overflow-y-auto 
              bg-white py-4 pb-12 shadow-xl transition duration-300 ease-in-out data-[closed]:translate-x-full"
            >
              <div className="flex items-center justify-between px-4">
                <h2 className="text-lg font-medium text-gray-900">Filters</h2>
                <button
                  type="button"
                  onClick={() => setMobileFiltersOpen(false)}
                  className="-mr-2 flex h-10 w-10 items-center justify-center rounded-md bg-white p-2 text-gray-400"
                >
                  <span className="sr-only">Close menu</span>
                  <XMarkIcon aria-hidden="true" className="h-6 w-6" />
                </button>
              </div>

              {/* Filters */}
              <form className="mt-4 border-t border-gray-200">
                <h3 className="sr-only">Categories</h3>
                <ul role="list" className="px-2 py-3 font-medium text-gray-900">
                  {subCategories.map((category) => (
                    <li key={category.name}>
                      <a href={category.href} className="block px-2 py-3">
                        {category.name}
                      </a>
                    </li>
                  ))}
                </ul>

                {filters.map((section) => (
                  <Disclosure
                    key={section.id}
                    as="div"
                    className="border-t border-gray-200 px-4 py-6"
                  >
                    <h3 className="-mx-2 -my-3 flow-root">
                      <DisclosureButton
                        className="group flex w-full items-center justify-between bg-white px-2 py-3
                       text-gray-400 hover:text-gray-500"
                      >
                        <span className="font-medium text-gray-900">
                          {section.name}
                        </span>
                        <span className="ml-6 flex items-center">
                          <PlusIcon
                            aria-hidden="true"
                            className="h-5 w-5 group-data-[open]:hidden"
                          />
                          <MinusIcon
                            aria-hidden="true"
                            className="h-5 w-5 [.group:not([data-open])_&]:hidden"
                          />
                        </span>
                      </DisclosureButton>
                    </h3>
                    <DisclosurePanel className="pt-6">
                      <div className="space-y-6">
                        {section.options.map((option, optionIdx) => (
                          <div key={option.value} className="flex items-center">
                            <input
                              defaultValue={option.value}
                              defaultChecked={option.checked}
                              id={`filter-mobile-${section.id}-${optionIdx}`}
                              name={`${section.id}[]`}
                              type="checkbox"
                              className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
                            />
                            <label
                              htmlFor={`filter-mobile-${section.id}-${optionIdx}`}
                              className="ml-3 min-w-0 flex-1 text-gray-500"
                            >
                              {option.label}
                            </label>
                          </div>
                        ))}
                      </div>
                    </DisclosurePanel>
                  </Disclosure>
                ))}
              </form>
            </DialogPanel>
          </div>
        </Dialog>

        {/* --------- Filter container ---------- */}
        <div className="font-inter text-black mx-auto  px-4 sm:px-6 lg:px-8 ">
          <div className="flex items-baseline justify-between border-b border-gray-200 pb-6 pt-10 ">
            <div className="flex items-center">
              <Menu as="div" className="relative inline-block text-left">
                <div>
                  <MenuButton className="group inline-flex justify-center text-sm font-medium text-gray-700 hover:text-gray-900">
                    Sort
                    <ChevronDownIcon
                      aria-hidden="true"
                      className="-mr-1 ml-1 h-5 w-5 flex-shrink-0 text-gray-400 group-hover:text-gray-500"
                    />
                  </MenuButton>
                </div>

                <MenuItems
                  transition
                  className="absolute z-10 mt-2 w-40 origin-top-right rounded-md bg-white shadow-2xl ring-1 ring-black ring-opacity-5 transition focus:outline-none data-[closed]:scale-95 data-[closed]:transform data-[closed]:opacity-0 data-[enter]:duration-100 data-[leave]:duration-75 data-[enter]:ease-out data-[leave]:ease-in"
                >
                  <div className="py-1 ">
                    {sortOptions.map((option) => (
                      <MenuItem key={option.name}>
                        <a
                          href={option.href}
                          className={classNames(
                            option.current
                              ? "font-medium text-gray-900"
                              : "text-gray-500",
                            "block px-4 py-2 text-sm data-[focus]:bg-gray-100"
                          )}
                        >
                          {option.name}
                        </a>
                      </MenuItem>
                    ))}
                  </div>
                </MenuItems>
              </Menu>
              <button
                type="button"
                onClick={() => setMobileFiltersOpen(true)}
                className="-m-2 ml-4 p-2 text-gray-400 hover:text-gray-500 sm:ml-6 lg:hidden"
              >
                <span className="sr-only">Filters</span>
                <FunnelIcon aria-hidden="true" className="h-5 w-5" />
              </button>
            </div>
          </div>

          <section aria-labelledby="products-heading" className="pb-24 pt-6 ">
            <h2 id="products-heading" className="sr-only">
              Products
            </h2>

            <div className="grid grid-cols-1 gap-x-8 gap-y-10 lg:grid-cols-4 ">
              {/* Filters */}
              <form className="hidden lg:block">
                <h3 className="sr-only">Categories</h3>
                <ul
                  role="list"
                  className="space-y-4 border-b border-gray-200 pb-6 text-sm font-medium text-gray-900"
                >
                  {subCategories.map((category) => (
                    <li key={category.name}>
                      <a href={category.href}>{category.name}</a>
                    </li>
                  ))}
                </ul>

                {filters.map((section) => (
                  <Disclosure
                    key={section.id}
                    as="div"
                    className="border-b border-gray-200 py-6"
                  >
                    <h3 className="-my-3 flow-root">
                      <DisclosureButton
                        className="group flex w-full items-center justify-between bg-white py-3 text-sm
                       text-gray-400 hover:text-gray-500"
                      >
                        <span className="font-medium text-gray-900">
                          {section.name}
                        </span>
                        <span className="ml-6 flex items-center">
                          <PlusIcon
                            aria-hidden="true"
                            className="h-5 w-5 group-data-[open]:hidden"
                          />
                          <MinusIcon
                            aria-hidden="true"
                            className="h-5 w-5 [.group:not([data-open])_&]:hidden"
                          />
                        </span>
                      </DisclosureButton>
                    </h3>
                    <DisclosurePanel className="pt-6">
                      <div className="space-y-4">
                        {section.options.map((option, optionIdx) => (
                          <div key={option.value} className="flex items-center">
                            <input
                              defaultValue={option.value}
                              defaultChecked={option.checked}
                              id={`filter-${section.id}-${optionIdx}`}
                              name={`${section.id}[]`}
                              type="checkbox"
                              className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
                            />
                            <label
                              htmlFor={`filter-${section.id}-${optionIdx}`}
                              className="ml-3 text-sm text-gray-600"
                            >
                              {option.label}
                            </label>
                          </div>
                        ))}
                      </div>
                    </DisclosurePanel>
                  </Disclosure>
                ))}
              </form>

              {/* Product grid goes here */}
              <div className="lg:col-span-3 ">
                {/* Render all shoes */}
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
                {/* Loading state */}
                {isLoading && (
                  <div
                    className="m-4 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 
            justify-items-center gap-x-10"
                  >
                    {/* Render skeletons while loading */}
                    {Array.from({ length: 9 }).map((index) => (
                      <div
                        className="m-5 skeleton card w-[80vw] h-[80vw] max-w-[237px]  
                max-h-[230px] lg:max-w-[321px] lg:max-h-[337px] object-cover"
                        key={index}
                      ></div>
                    ))}
                  </div>
                )}
                {/* New arrivals box */}
                {/* Render recommended shoes */}
                {!isLoading && !error && fetchedProducts.length > 0 && (
                  <div>
                    <div
                      className="m-4 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 
            justify-items-center gap-x-10"
                    >
                      {/* Add link for product id */}
                      {productList[page - 1].map((product) => (
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
                {/* Pagination - Render page */}
                {productList && productList.length > 0 && (
                  <div className="join flex flex-row justify-center gap-x-2">
                    {productList.map((_, index) => (
                      <button
                        key={index}
                        className={`join-item btn ${
                          page === index + 1 ? "btn-active" : ""
                        }`}
                        onClick={() => handlePageNumber(index)}
                      >
                        {index + 1}
                      </button>
                    ))}
                  </div>
                )}
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
