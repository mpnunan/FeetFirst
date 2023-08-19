import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import RegisterForm from '../../../components/RegisterForm';
import { getSingleUser } from '../../../api/userData';

export default function UpdateUser() {
  const [editUser, setEditUser] = useState({});
  const router = useRouter();

  const { id } = router.query;

  useEffect(() => {
    getSingleUser(id).then(setEditUser);
  }, [id]);

  return (<RegisterForm user={editUser} />);
}
