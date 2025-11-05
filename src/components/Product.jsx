import styles from "../styles/Product.module.css";
import { useState } from "react";

export default function Product({
  title,
  price,
  category,
  rating,
  reviews,
  image,
  onAddToCart,
}) {
  const [quantity, setQuantity] = useState("1");

  function handleAddToCart() {
    onAddToCart(Number(quantity));
  }

  function sanitizeQuantityInput(e) {
    let val = e.target.value.replace(/[^\d]/g, "");
    val = val.replace(/^0+/, "");
    if (val === "") val = "1";
    e.target.value = val;
    setQuantity(val);
  }

  return (
    <article className={styles.product}>
      <img src={image} alt={title} />
      <section>
        <div className={styles.info}>
          <h2>{title}</h2>
          <p>{category}</p>
          <div>
            <p>{rating} ★</p>
            <p>({reviews})</p>
          </div>
        </div>
        <div className={styles.actions}>
          <div>
            <input
              type="number"
              min={1}
              value={quantity}
              onInput={sanitizeQuantityInput}
            />
            <p>${price}</p>
          </div>
          <button onClick={handleAddToCart}>Add to Cart</button>
        </div>
      </section>
    </article>
  );
}
