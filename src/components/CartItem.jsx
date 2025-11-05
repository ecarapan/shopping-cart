import styles from "../styles/CartItem.module.css";

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

  function handleQuantityInput(e) {
    let val = e.target.value.replace(/[^\d]/g, "");
    val = val.replace(/^0+/, "");
    if (val === "") val = "1";
    e.target.value = val;
    onQuantityChange(Number(val));
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
