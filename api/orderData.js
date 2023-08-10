import { clientCredentials } from '../utils/client';

const getOrdersByUser = async (userId, uid) => {
  const response = await fetch(`${clientCredentials.databaseURL}/orders?user=${userId}`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `${uid}`,
    },
  });
  const products = await response.json();
  return Object.values(products);
};

const getCartProducts = async (userId, uid) => {
  const response = await fetch(`${clientCredentials.databaseURL}/order_products?user=${userId}`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `${uid}`,
    },
  });
  const products = await response.json();
  return Object.values(products);
};

const createCartProduct = async (productId, uid) => {
  const response = await fetch(`${clientCredentials.databaseURL}/products/${productId}/add`, {
    method: 'Post',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `${uid}`,
    },
  });
  const products = await response.json();
  return Object.values(products);
};

const deleteCartProduct = async (productId, uid) => {
  const response = await fetch(`${clientCredentials.databaseURL}/products/${productId}/remove`, {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `${uid}`,
    },
  });
  return response;
};

export {
  getOrdersByUser,
  getCartProducts,
  deleteCartProduct,
  createCartProduct,
};
