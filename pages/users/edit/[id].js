import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import RegisterForm from '../../../components/RegisterForm';
import { getSingleUser } from '../../../api/userData';

export default function UpdateUser() {
  const [editUser, setEditUser] = useState({});
  const router = useRouter();

  // GRAB ID
  const { id } = router.query;

  // MAKE CALL TO API TO GET USER DATA
  useEffect(() => {
    getSingleUser(id).then(setEditUser);
  }, [id]);

  // PASS OBJECT TO FORM
  return (<RegisterForm obj={editUser} />);
}
