import React from "react";
import { Product } from "../types/Product";
import "../styles/ProductItem.scss";

interface ProductItemProps {
  product: Product;
}

const ProductItem: React.FC<ProductItemProps> = ({ product }) => {
  const handleATC = () => {
    alert(`Added to cart: ${product.title}`);
  };

  return (
    <div className="product-item">
      <img src={product.image} alt={product.title} />
      <h2>{product.title}</h2>
      <p>Reviews: {product.rating.count}</p>
      <p>Avg. review rate: {product.rating.rate}</p>
      <p className="price">${product.price.toFixed(2)}</p>
      <p className="category">{product.category}</p>
      <button onClick={handleATC}>Add to cart</button>
    </div>
  );
};

export default ProductItem;
