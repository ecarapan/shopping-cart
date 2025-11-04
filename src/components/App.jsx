import styles from "../styles/App.module.css";
import { useState } from "react";
import { useEffect } from "react";
import { Outlet } from "react-router";
import NavBar from "./NavBar";

export default function App() {
  const [productList, setProductList] = useState([]);
  const [cartList, setCartList] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchProducts() {
      try {
        const response = await fetch("https://fakestoreapi.com/products");
        const productData = await response.json();
        setLoading(false);

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
      } catch (error) {
        setError(error);
      }
    }

    fetchProducts();
  }, []);

  return (
    <div className={styles.app}>
      <NavBar cartLength={cartList.length} />
      <div className={styles.content}>
        <Outlet
          context={{
            productList,
            setProductList,
            cartList,
            setCartList,
            loading,
            error,
          }}
        />
      </div>
    </div>
  );
}
