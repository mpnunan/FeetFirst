import { clientCredentials } from '../utils/client';

const getSingleUser = async (primaryKey) => {
  const response = await fetch(`${clientCredentials.databaseURL}/users/{${primaryKey}.json`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  });
  const user = await response.json();
  return user;
};

const createUser = async (payload) => {
  const response = await fetch(`${clientCredentials.databaseURL}/users/.json`, {
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
  const response = await fetch(`${clientCredentials.databaseURL}/users/${payload.primaryKey}.json`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(payload),
  });
  const user = await response.json();
  return user;
};

const deleteUser = async (primaryKey) => {
  const response = await fetch(`${clientCredentials.databaseURL}/users/${primaryKey}.json`, {
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
