import styles from "../styles/CartItem.module.css";
import { useEffect, useState } from "react";

export default function CartItem({
  title,
  price,
  category,
  image,
  quantity,
  onRemoveFromCart,
  onQuantityChange,
}) {
  function getItemTotal() {
    return (price * quantity).toFixed(2);
  }

  return (
    <article className={styles.cartItem}>
      <div className={styles.info}>
        <img src={image} alt={title} />
        <div>
          <h2>{title}</h2>
          <p>{category}</p>
        </div>
      </div>
      <div className={styles.actions}>
        <input
          onChange={(e) => onQuantityChange(Number(e.target.value))}
          type="number"
          value={quantity}
          min={1}
          max={99}
        />
        <p>${getItemTotal()}</p>
        <button onClick={onRemoveFromCart}>Remove</button>
      </div>
    </article>
  );
}
