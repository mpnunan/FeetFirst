import { clientCredentials } from '../utils/client';

const getFavoriteProduct = async (productId, uid) => {
  const response = await fetch(`${clientCredentials.databaseURL}/products/${productId}/favorite`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `${uid}`,
    },
  });
  const products = await response.json();
  return Object.values(products);
};

const createFavoriteProduct = async (productId, uid) => {
  const response = await fetch(`${clientCredentials.databaseURL}/products/${productId}/favorite`, {
    method: 'Post',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `${uid}`,
    },
  });
  const products = await response.json();
  return Object.values(products);
};

const deleteFavoriteProduct = async (productId, uid) => {
  const response = await fetch(`${clientCredentials.databaseURL}/products/${productId}/unfavorite`, {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `${uid}`,
    },
  });
  return response;
};

export { getFavoriteProduct, deleteFavoriteProduct, createFavoriteProduct };
