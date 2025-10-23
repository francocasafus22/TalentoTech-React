import React, { useEffect, useState } from "react";
import ProductCard from "../components/ProductCard";
import { getAllProductsByCategory } from "../services/ProductsServices";

export default function ProductList({ category, categoryName}) {
  const [products, setProducts] = useState([]);
  const [isLoading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProducts = async () => {
        try {
            setLoading(true);
            const res = await getAllProductsByCategory(category, 10);
            setProducts(res.products);
        } catch (error) {
            setError(error.message);
        } finally {
            setLoading(false);
        }
    };
    fetchProducts();
  }, []);

  if (isLoading)
    return <p className="text-white text-center">Cargando productos...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <>
      <h1 className="text-blue-600 text-5xl mt-10">{categoryName}</h1>

      <div className="rounded-xl grid grid-cols-1 md:grid-cols-3 gap-5 mt-10">
        {products ? (
          products.map((producto) => (
            <ProductCard key={producto.id} producto={producto} />
          ))
        ) : (
          <p className="text-white text-center">No hay productos</p>
        )}
      </div>
    </>
  );
}
