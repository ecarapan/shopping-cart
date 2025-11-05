import styles from "./App.module.css";
import NavBar from "../components/NavBar/NavBar";
import { Outlet } from "react-router";
import { useApp } from "./useApp";

export default function App() {
  const { productList, setProductList, cartList, setCartList, loading, error } =
    useApp();

  return (
    <div className={styles.app}>
      <NavBar cartLength={cartList.length} />
      <div className={styles.content}>
        <Outlet
          context={{
            productList,
            setProductList,
            cartList,
            setCartList,
            loading,
            error,
          }}
        />
      </div>
    </div>
  );
}
