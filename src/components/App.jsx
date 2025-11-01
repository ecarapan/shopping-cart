import styles from "../styles/App.module.css";
import { useState } from "react";
import { useEffect } from "react";
import { Link } from "react-router";
import { Outlet } from "react-router";

export default function App() {
  const [productList, setProductList] = useState([]);
  const [cartList, setCartList] = useState([]);

  useEffect(() => {
    async function fetchProducts() {
      const response = await fetch("https://fakestoreapi.com/products");
      const productData = await response.json();

      setProductList(
        productData.map((product) => ({
          id: product.id,
          title: product.title,
          price: product.price,
          description: product.description,
          image: product.image,
        }))
      );
    }

    fetchProducts();
  }, []);

  return (
    <div className={styles.app}>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/shop">Shop</Link>
        <Link to="/cart">Cart</Link>
      </nav>
      <Outlet context={{ productList, cartList }} />
    </div>
  );
}
