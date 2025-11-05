import { useState } from "react";

export function useProduct(onAddToCart) {
  const [quantity, setQuantity] = useState("1");

  function sanitizeQuantityInput(e) {
    let val = e.target.value.replace(/[^\d]/g, "");
    val = val.replace(/^0+/, "");
    if (val === "") val = "1";
    e.target.value = val;
    setQuantity(val);
  }

  function handleAddToCart() {
    onAddToCart(Number(quantity));
  }

  return {
    quantity,
    sanitizeQuantityInput,
    handleAddToCart,
  };
}
