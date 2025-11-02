import styles from "../styles/CartPage.module.css";
import { useOutletContext } from "react-router";
import CartItem from "./CartItem";

export default function CartPage() {
  const { productList, setProductList, cartList, setCartList } =
    useOutletContext();

  function removeFromCart(id) {
    const newCartList = cartList.filter((product) => product.id !== id);
    setCartList(newCartList);
  }

  return (
    <div className={styles.cartPage}>
      <h1>Cart</h1>
      <main>
        {cartList.map((product) => (
          <CartItem
            key={product.id}
            image={product.image}
            title={product.title}
            price={product.price}
            quantity={product.quantity}
            onRemoveFromCart={() => removeFromCart(product.id)}
          ></CartItem>
        ))}
      </main>
    </div>
  );
}
