const getStoreCart = () => {
  const cartString = localStorage.getItem("cart");
  if (cartString) {
    return JSON.parse(cartString);
  }
  return [];
};

const saveCartLS = (cart) => {
  const cartString = JSON.stringify(cart);
  localStorage.setItem("cart", cartString);
};

const addLS = (id) => {
  const cart = getStoreCart();
  cart.push(id);
  saveCartLS(cart);
};

export { addLS, getStoreCart };
