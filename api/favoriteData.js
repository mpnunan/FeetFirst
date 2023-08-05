import { clientCredentials } from '../utils/client';
import { getAllProducts } from './productData';

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
  const response = await fetch(`${clientCredentials.databaseURL}/products/${productId}/unFavorite`, {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `${uid}`,
    },
  });
  return response;
};

// const findFavorites = async (uid) => {
//   await getAllProducts(uid).then((productArray) => {
//     const favoriteArray = [];
//     productArray.forEach((product) => {
//       if (getSingleProduct(product.id) === getFavoriteProduct({}.product, uid)) {
//         favoriteArray.push(product);
//       }
//     });
//     return favoriteArray;
//   });
// };

const findFavorites = async (uid) => {
  const products = await getAllProducts(uid);
  const favorites = products.forEach((product) => {
    if (getFavoriteProduct(product.id, uid) === true) {
      console.warn(product);
      favorites.push(product);
    }
  });
  return favorites;
};

export {
  getFavoriteProduct,
  deleteFavoriteProduct,
  createFavoriteProduct,
  findFavorites,
};
