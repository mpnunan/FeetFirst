import { clientCredentials } from '../utils/client';

const getSingleUser = async (id) => {
  const response = await fetch(`${clientCredentials.databaseURL}/users/{${id}`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  });
  const user = await response.json();
  return user;
};

const createUser = async (payload) => {
  const response = await fetch(`${clientCredentials.databaseURL}/users/`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(payload),
  });
  const newUser = await response.json();
  return newUser;
};

const updateUser = async (payload) => {
  const response = await fetch(`${clientCredentials.databaseURL}/users/${payload.id}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(payload),
  });
  const user = await response.json();
  return user;
};

const deleteUser = async (id) => {
  const response = await fetch(`${clientCredentials.databaseURL}/users/${id}`, {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json',
    },
  });
  const user = await response.json();
  return user;
};

export {
  getSingleUser,
  createUser,
  updateUser,
  deleteUser,
};
