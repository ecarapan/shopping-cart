import { useOutletContext } from "react-router";

export function useShopPage() {
  const { productList, cartList, setCartList, loading, error } =
    useOutletContext();

  function addToCart(id, quantity) {
    const cartProduct = cartList.find((product) => product.id === id);
    if (cartProduct) {
      const newCartList = cartList.map((product) => {
        if (product.id === id) {
          return { ...product, quantity: product.quantity + quantity };
        } else {
          return product;
        }
      });
      setCartList(newCartList);
      return;
    }

    const currentProduct = productList.find((product) => product.id === id);
    if (currentProduct) {
      setCartList([...cartList, { ...currentProduct, quantity: quantity }]);
    }
  }

  return {
    productList,
    loading,
    error,
    addToCart,
  };
}
