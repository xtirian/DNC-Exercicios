import React from "react";
import { Link } from "react-router-dom";

const Products = () => {
  return (
    <div>
      <h1>Products</h1>
      <button>
        <Link to={`/`}>Login</Link>
      </button>
    </div>
  );
};

export default Products;
