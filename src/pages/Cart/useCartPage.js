import { useOutletContext } from "react-router";

export function useCartPage() {
  const { cartList, setCartList } = useOutletContext();

  function removeFromCart(id) {
    const newCartList = cartList.filter((product) => product.id !== id);
    setCartList(newCartList);
  }

  function handleQuantityChange(id, quantity) {
    const newCartList = cartList.map((product) => {
      if (product.id === id) {
        return { ...product, quantity: quantity };
      } else {
        return product;
      }
    });
    setCartList(newCartList);
  }

  function getCartTotal() {
    let cartTotal = 0;
    cartList.forEach((product) => {
      cartTotal = cartTotal + product.price * product.quantity;
    });
    return cartTotal.toFixed(2);
  }

  return {
    cartList,
    removeFromCart,
    handleQuantityChange,
    getCartTotal,
  };
}
