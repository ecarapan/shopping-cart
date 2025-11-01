import styles from "../styles/Product.module.css";

export default function Product({
  title,
  price,
  category,
  rating,
  reviews,
  image,
  onAddToCart,
}) {
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
            <input type="number" defaultValue={1} />
            <p>${price}</p>
          </div>
          <button onClick={onAddToCart}>Add to Cart</button>
        </div>
      </section>
    </article>
  );
}
