import styles from "../styles/ShopPage.module.css";
import { useOutletContext } from "react-router";
import Product from "./Product";

export default function ShopPage() {
  const { productList, setProductList, cartList, setCartList } =
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
            onAddToCart={(quantity) => addToCart(product.id, quantity)}
          ></Product>
        ))}
      </main>
    </div>
  );
}
