import styles from "../styles/App.module.css";
import { useState } from "react";
import { useEffect } from "react";
import { Outlet } from "react-router";
import NavBar from "./NavBar";

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
          category: product.category,
          rating: product.rating.rate,
          reviews: product.rating.count,
          image: product.image,
        }))
      );
    }

    fetchProducts();
  }, []);

  return (
    <div className={styles.app}>
      <NavBar cartLength={cartList.length} />
      <div className={styles.content}>
        <Outlet
          context={{ productList, setProductList, cartList, setCartList }}
        />
      </div>
    </div>
  );
}
