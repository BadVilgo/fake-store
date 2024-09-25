import React from "react";
import ProductItem from "./ProductItem";
import { Product } from "../types/Product";
import "../styles/ProductList.scss";

interface ProductListProps {
  products: Product[];
}

const ProductList: React.FC<ProductListProps> = ({ products }) => {
  if (products.length === 0) {
    return <p>No products to display.</p>;
  }

  return (
    <div className="product-list">
      {products.map((product) => (
        <ProductItem key={product.id} product={product} />
      ))}
    </div>
  );
};

export default ProductList;
