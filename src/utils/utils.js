export const findCartItem = (cartItems, name) => {
  const item = cartItems.filter((item, index) => item.name === name);
  return item;
};

export const findCartTotal = (cartItems) => {
  let total = 0;
  cartItems.forEach((item) => {
    let val = Number(item.price.replace(/[^0-9.-]+/g, ""));
    total += val * item.qty;
  });
  return total;
};

export const convertProductPrice = (price) => {
  return Number(price.replace(/[^0-9.-]+/g, ""));
};

export const formatPrice = (price) => {
  let formatter = Intl.NumberFormat("INR", {
    style: "currency",
    currency: "INR",
    minimumFractionDigits: 2,
  });
  return formatter.format(price);
};
