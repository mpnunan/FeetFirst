import { clientCredentials } from '../utils/client';

const getSingleUser = async (id) => {
  const response = await fetch(`${clientCredentials.databaseURL}/users/${id}`, {
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

const editUser = (user, uid) => new Promise((resolve, reject) => {
  fetch(`${clientCredentials.databaseURL}/users/${user.id}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `${uid}`,
    },
    body: JSON.stringify(user),
  })
    .then((data) => resolve(data))
    .catch(reject);
});

const deleteUser = async (id) => {
  const response = await fetch(`${clientCredentials.databaseURL}/users/${id}`, {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json',
    },
  });
  return response;
};

export {
  getSingleUser,
  createUser,
  editUser,
  deleteUser,
};
