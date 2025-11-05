export function useCartItem(price, quantity, onQuantityChange) {
  function getItemTotal() {
    return (price * quantity).toFixed(2);
  }

  function handleQuantityInput(e) {
    let val = e.target.value.replace(/[^\d]/g, "");
    val = val.replace(/^0+/, "");
    if (val === "") val = "1";
    e.target.value = val;
    onQuantityChange(Number(val));
  }

  return {
    getItemTotal,
    handleQuantityInput,
  };
}
