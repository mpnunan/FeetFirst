import { clientCredentials } from '../utils/client';

const getUserProducts = async (uid) => {
  const response = await fetch(`${clientCredentials.databaseURL}/products.json?orderBy="uid"&equalTo="${uid}"`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  });
  const products = await response.json();
  return Object.values(products);
};

const getAllProducts = async () => {
  const response = await fetch(`${clientCredentials.databaseURL}/products.json`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  });
  const products = await response.json();
  return Object.values(products);
};

const getSingleProduct = async (primaryKey) => {
  const response = await fetch(`${clientCredentials.databaseURL}/products/{${primaryKey}.json`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  });
  const product = await response.json();
  return product;
};

const createProduct = async (payload) => {
  const response = await fetch(`${clientCredentials.databaseURL}/products/.json`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(payload),
  });
  const newProduct = await response.json();
  return newProduct;
};

const updateProduct = async (payload) => {
  const response = await fetch(`${clientCredentials.databaseURL}/products/${payload.primaryKey}.json`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(payload),
  });
  const product = await response.json();
  return product;
};

const deletePlayer = async (primaryKey) => {
  const response = await fetch(`${clientCredentials.databaseURL}/products/${primaryKey}.json`, {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json',
    },
  });
  const product = await response.json();
  return product;
};

export {
  getUserProducts,
  getAllProducts,
  getSingleProduct,
  createProduct,
  updateProduct,
  deletePlayer,
};
