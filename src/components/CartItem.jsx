import styles from "../styles/CartItem.module.css";

export default function CartItem({
  title,
  price,
  image,
  quantity,
  onRemoveFromCart,
}) {
  return (
    <article className={styles.cartItem}>
      <img src={image} alt={title} />
      <h2>{title}</h2>
      <p>{price}</p>
      <div className={styles.actions}>
        <input type="number" value={quantity} min={1} max={99} />
        <button onClick={onRemoveFromCart}>Remove From Cart</button>
      </div>
    </article>
  );
}
