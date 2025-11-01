import styles from "../styles/NavBar.module.css";
import { NavLink } from "react-router";

export default function NavBar() {
  return (
    <nav className={styles.navBar}>
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
        Cart
      </NavLink>
    </nav>
  );
}
