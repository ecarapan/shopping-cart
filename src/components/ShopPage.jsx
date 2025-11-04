import styles from "../styles/ShopPage.module.css";
import { useOutletContext } from "react-router";
import Product from "./Product";

export default function ShopPage() {
  const { productList, cartList, setCartList, loading, error } =
    useOutletContext();

  function addToCart(id, quantity) {
    const cartProduct = cartList.find((product) => product.id === id);
    if (cartProduct) {
      const newCartList = cartList.map((product) => {
        if (product.id === id) {
          return { ...product, quantity: product.quantity + quantity };
        } else {
          return product;
        }
      });
      setCartList(newCartList);
      return;
    }

    const currentProduct = productList.find((product) => product.id === id);
    if (currentProduct) {
      setCartList([...cartList, { ...currentProduct, quantity: quantity }]);
    }
  }

  if (error) {
    return (
      <div className={`${styles.shopPage} ${styles.loading}`}>
        <h1 role="alert" aria-live="assertive" className={styles.errorSpinner}>
          {error}
        </h1>
      </div>
    );
  }

  if (loading) {
    return (
      <div className={`${styles.shopPage} ${styles.loading}`}>
        <div
          role="status"
          aria-live="polite"
          className={styles.loadingSpinner}
        ></div>
      </div>
    );
  }

  return (
    <div className={styles.shopPage}>
      <h1>Products</h1>
      <main>
        {productList.map((product) => (
          <Product
            key={product.id}
            title={product.title}
            price={product.price}
            category={product.category}
            rating={product.rating}
            reviews={product.reviews}
            image={product.image}
            onAddToCart={(quantity) => addToCart(product.id, quantity)}
          ></Product>
        ))}
      </main>
    </div>
  );
}
