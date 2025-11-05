import styles from "@/pages/Home/HomePage.module.css";
import productsImg from "@/assets/products.png";
import { Link } from "react-router";

export default function HomePage() {
  return (
    <div className={styles.homePage}>
      <img src={productsImg} alt="List of products in the shop." />
      <main>
        <h1>Welcome to Fake Shop!</h1>
        <p>Choose from a selection of fake items from our shop.</p>
        <Link to="/shop">
          <button>Shop now</button>
        </Link>
      </main>
    </div>
  );
}
