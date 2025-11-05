import styles from "@/pages/Cart/CartItem/CartItem.module.css";
import { useCartItem } from "./useCartItem";

export default function CartItem({
  title,
  price,
  category,
  image,
  quantity,
  onRemoveFromCart,
  onQuantityChange,
}) {
  const { getItemTotal, handleQuantityInput } = useCartItem(
    price,
    quantity,
    onQuantityChange
  );

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
          onInput={handleQuantityInput}
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
