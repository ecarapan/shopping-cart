import styles from "../styles/Product.module.css";

export default function Product({ title, price, description, image }) {
  return (
    <div className={styles.product}>
      <img src={image} alt={description} />
      <h2>{title}</h2>
      <p>{price}</p>
    </div>
  );
}
