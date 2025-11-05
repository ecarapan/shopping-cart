import styles from "@/pages/Shop/Product/Product.module.css";
import { useProduct } from "@/pages/Shop/Product/useProduct";

export default function Product({
  title,
  price,
  category,
  rating,
  reviews,
  image,
  onAddToCart,
}) {
  const { quantity, sanitizeQuantityInput, handleAddToCart } =
    useProduct(onAddToCart);

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
