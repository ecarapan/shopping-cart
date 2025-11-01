import styles from "../styles/ShopPage.module.css";
import { useOutletContext } from "react-router";
import Product from "./Product";

export default function ShopPage() {
  const { productList, setProductList, cartList, setCartList } =
    useOutletContext();

  function addToCart(id) {
    const currentProduct = productList.find((product) => product.id === id);
    if (currentProduct) {
      setCartList([...cartList, currentProduct]);
    }
  }

  return (
    <div className={styles.shopPage}>
      <h1>Shop for stuff</h1>
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
            onAddToCart={() => addToCart(product.id)}
          ></Product>
        ))}
      </main>
    </div>
  );
}
