import styles from "../styles/ShopPage.module.css";
import { useOutletContext } from "react-router";
import Product from "./Product";

export default function ShopPage() {
  const { productList } = useOutletContext();

  return (
    <div className={styles.shopPage}>
      <h1>Shop for stuff</h1>
      <main>
        {productList.map((product) => (
          <Product
            key={product.id}
            title={product.title}
            price={product.price}
            description={product.description}
            image={product.image}
          ></Product>
        ))}
      </main>
    </div>
  );
}
