import styles from "../styles/Product.module.css";
import { useRef } from "react";

export default function Product({
  title,
  price,
  category,
  rating,
  reviews,
  image,
  onAddToCart,
}) {
  const inputRef = useRef();

  function handleAddToCart() {
    const quantity = Number(inputRef.current.value);
    onAddToCart(quantity);
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
            <input ref={inputRef} type="number" min={1} defaultValue={1} />
            <p>${price}</p>
          </div>
          <button onClick={handleAddToCart}>Add to Cart</button>
        </div>
      </section>
    </article>
  );
}
