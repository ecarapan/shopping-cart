import styles from "@/pages/Cart/CartPage.module.css";
import CartItem from "@/pages/Cart/CartItem/CartItem";
import { Link } from "react-router";
import { useCartPage } from "./useCartPage";

export default function CartPage() {
  const { cartList, removeFromCart, handleQuantityChange, getCartTotal } =
    useCartPage();

  if (cartList.length === 0) {
    return (
      <div className={`${styles.cartPage} ${styles.emptyCart}`}>
        <div>
          <h1>Your Fake Shop Cart is empty</h1>
          <Link to="/shop">
            <button>Shop now</button>
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className={styles.cartPage}>
      <h1>Cart</h1>
      <section>
        <main>
          {cartList.map((product) => (
            <CartItem
              key={product.id}
              image={product.image}
              title={product.title}
              price={product.price}
              category={product.category}
              quantity={product.quantity}
              onRemoveFromCart={() => removeFromCart(product.id)}
              onQuantityChange={(quantity) =>
                handleQuantityChange(product.id, quantity)
              }
            ></CartItem>
          ))}
        </main>
        <aside>
          <div>
            <h2>Total: ${getCartTotal()}</h2>
            <p>Shipping: Free</p>
            <p>Sales Tax: N/A</p>
          </div>
          <button>Checkout</button>
        </aside>
      </section>
    </div>
  );
}
