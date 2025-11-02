import styles from "../styles/CartPage.module.css";
import { useOutletContext } from "react-router";
import CartItem from "./CartItem";
import { useState } from "react";

export default function CartPage() {
  const { productList, setProductList, cartList, setCartList } =
    useOutletContext();

  function removeFromCart(id) {
    const newCartList = cartList.filter((product) => product.id !== id);
    setCartList(newCartList);
  }

  function handleQuantityChange(id, quantity) {
    const newCartList = cartList.map((product) => {
      if (product.id === id) {
        return { ...product, quantity: quantity };
      } else {
        return product;
      }
    });
    setCartList(newCartList);
  }

  function getCartTotal() {
    let cartTotal = 0;
    cartList.forEach((product) => {
      cartTotal = cartTotal + product.price * product.quantity;
    });
    return cartTotal.toFixed(2);
  }

  if (cartList.length === 0) {
    return null;
  }

  return (
    <div className={styles.cartPage}>
      <h1>Cart</h1>
      <section>
        <main>
          {cartList.map((product) => (
            <CartItem
              key={product.id}
              image={product.image}
              title={product.title}
              price={product.price}
              category={product.category}
              quantity={product.quantity}
              onRemoveFromCart={() => removeFromCart(product.id)}
              onQuantityChange={(quantity) =>
                handleQuantityChange(product.id, quantity)
              }
            ></CartItem>
          ))}
        </main>
        <aside>
          <h2>Total: ${getCartTotal()}</h2>
          <button>Checkout</button>
        </aside>
      </section>
    </div>
  );
}
