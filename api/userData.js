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

// const getSingleUser = (id) => new Promise((resolve, reject) => {
//   fetch(`${clientCredentials.databaseURL}/users/${id}`)
//     .then((response) => response.json())
//     .then(resolve)
//     .catch(reject);
// });

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

// const updateUser = async (payload, uid) => {
//   const response = await fetch(`${clientCredentials.databaseURL}/users/${payload.id}`, {
//     method: 'PUT',
//     headers: {
//       'Content-Type': 'application/json',
//       Authorization: `${uid}`,
//     },
//     body: JSON.stringify(payload),
//   });
//   const user = await response.json();
//   return user;
// };

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
  const user = await response.json();
  return user;
};

export {
  getSingleUser,
  createUser,
  editUser,
  deleteUser,
};
