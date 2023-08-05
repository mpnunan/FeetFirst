// import React, { useEffect, useState } from 'react';
// import { useRouter } from 'next/router';
// import {
//   getSingleUser,
//   deleteUser,
// }
//   from '../../../api/userData';

// export default function DeleteUser() {
//   const [deleteTheUser, setDeleteUser] = useState({});
//   const router = useRouter();

//   // GRAB ID
//   const { id } = router.query;

//   // MAKE CALL TO API TO GET USER DATA
//   useEffect(() => {
//     getSingleUser(id).then(setDeleteUser);
//   }, [id]);

//   // PASS OBJECT TO FORM
//   return (<DeleteUser user={deleteTheUser} />);
// }
