import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { getSingleUser } from '../../../api/userData';
import RegisterForm from '../../../components/RegisterForm';

export default function UpdateUser() {
  const [editUser, setEditUser] = useState({});
  const router = useRouter();

  // GRAB ID
  const { id } = router.query;

  // MAKE CALL TO API TO GET USER DATAs
  useEffect(() => {
    getSingleUser(id).then(setEditUser);
  }, [id]);

  // PASS OBJECT TO FORM
  return (
    <div>
      <RegisterForm user={editUser} />
    </div>
  );
}
