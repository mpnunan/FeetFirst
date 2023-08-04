import { clientCredentials } from '../utils/client';

const getAllProducts = async (uid) => {
  const response = await fetch(`${clientCredentials.databaseURL}/products`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `${uid}`,
    },
  });
  const products = await response.json();
  return Object.values(products);
};

const getSingleProduct = async (id) => {
  const response = await fetch(`${clientCredentials.databaseURL}/products/{${id}`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  });
  const product = await response.json();
  return product;
};

const createProduct = async (payload) => {
  const response = await fetch(`${clientCredentials.databaseURL}/products/`, {
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
  const response = await fetch(`${clientCredentials.databaseURL}/products/${payload.id}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(payload),
  });
  const product = await response.json();
  return product;
};

const deletePlayer = async (id) => {
  const response = await fetch(`${clientCredentials.databaseURL}/products/${id}`, {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json',
    },
  });
  const product = await response.json();
  return product;
};

export {
  getAllProducts,
  getSingleProduct,
  createProduct,
  updateProduct,
  deletePlayer,
};
