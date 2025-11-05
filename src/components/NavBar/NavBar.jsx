import styles from "@/components/NavBar/NavBar.module.css";
import { NavLink } from "react-router";

export default function NavBar({ cartLength }) {
  return (
    <header className={styles.navBar}>
      <h1>Fake Shop</h1>
      <nav>
        <NavLink
          to="/"
          end
          className={({ isActive }) => (isActive ? styles.active : undefined)}
        >
          Home
        </NavLink>
        <NavLink
          to="/shop"
          className={({ isActive }) => (isActive ? styles.active : undefined)}
        >
          Shop
        </NavLink>
        <NavLink
          to="/cart"
          className={({ isActive }) => (isActive ? styles.active : undefined)}
        >
          Cart ({cartLength})
        </NavLink>
      </nav>
    </header>
  );
}
