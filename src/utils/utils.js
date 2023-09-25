export const findCartItem = (cartItems,name) => {
    const item = cartItems.filter((item,index) => item.name === name);
    return item;
}