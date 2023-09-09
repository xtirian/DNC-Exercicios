import React from "react";
import { Link } from "react-router-dom";
import "./index.scss";

const Home = () => {
  return (
    <div>
      <h1>Home</h1>

      <button>
        <Link to={`/products/1`}>Products</Link>
      </button>
    </div>
  );
};

export default Home;
