import React, { useEffect, useState } from "react";
import SingleProduct from "../SingleProduct/SingleProduct";

const AllProducts = (props) => {
  const { setCartCount } = props;
  const [products, setProducts] = useState([]);
  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);
  return (
    <div>
      <h1 className="mt-5">Total Products: {products.length}</h1>
      <div className="row container">
        {products.map((pd) => (
          <SingleProduct
            setCartCount = {setCartCount}
            key={pd.id}
            product={pd}
          ></SingleProduct>
        ))}
      </div>
    </div>
  );
};

export default AllProducts;
