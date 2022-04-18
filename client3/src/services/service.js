const url = "http://localhost:/6400/api";

export const addProduct = async (carts, cart, userId) => {
  const response = await fetch(`${url}/product/${userId}`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ items, userId }),
  });
  return await response.json();
};

export const deleteCart = async (userId, cartId) => {
  const response = await fetch(`${url}/carts/${userId}/${cartId}`, {
    method: "DELETE",
    headers: {
      "Content-type": "application/json",
    },
  });

  return await response.json();
};
