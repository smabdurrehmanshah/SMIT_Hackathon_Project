import { useEffect, useState } from "react";
import ProductCard from "./ProductCard";

function Products() {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [priceRange, setPriceRange] = useState(0);
  const [maxPrice, setMaxPrice] = useState(0);

  useEffect(() => {
    async function fetchProducts() {
      const response = await fetch("https://fakestoreapi.com/products");
      const data = await response.json();

      setProducts(data);
      setFilteredProducts(data);
      console.log(data)

      // Find max price for the range slider
      const max = Math.ceil(Math.max(...data.map((p) => p.price)));
      setMaxPrice(max);
      setPriceRange(max);

      setIsLoading(false);
    }

    fetchProducts();
  }, []);

  // Handle range input change
  const handlePriceChange = (e) => {
    const value = Number(e.target.value);
    setPriceRange(value);
    setFilteredProducts(products.filter((p) => p.price <= value));
  };

  if (isLoading)
    return <h1 className="text-center font-bold text-2xl">Loading...</h1>;

  return (
    <div>
      <h1 className="text-3xl font-bold text-gray-900 text-center mb-6">
        Our Products
      </h1>

      {/* Price Filter */}
      <div className="w-[90vw] mx-auto flex flex-col sm:flex-row justify-between items-center gap-4 mb-6">
        <label className="text-lg font-medium">
          Filter by Price: <span className="text-blue-600">${priceRange}</span>
        </label>
        <input
          type="range"
          min="0"
          max={maxPrice}
          value={priceRange}
          onChange={handlePriceChange}
          className="w-full sm:w-1/2 cursor-pointer accent-blue-600"
        />
      </div>

      {/* Products Grid */}
      <div className="w-[90vw] mx-auto my-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
        {filteredProducts.length > 0 ? (
          filteredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))
        ) : (
          <h2 className="text-center text-gray-500 col-span-full">
            No products found under ${priceRange}
          </h2>
        )}
      </div>
    </div>
  );
}

export default Products;
