/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable @next/next/no-img-element */
import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
// import Image from 'next/image';
// import PropTypes from 'prop-types';
import { Button } from 'react-bootstrap';
import { useAuth } from '../utils/context/authContext';
import { getSingleUser } from '../api/userData';
// import { updateUser } from '../api/userData';

export default function UserProfile() {
  const { user } = useAuth();
  const router = useRouter();

  // SET A STATE FOR THE USER
  const [userDetails, setUserDetails] = useState({});

  // API FUNCTION TO GET SINGLE USER
  const getTheSingleUser = () => {
    getSingleUser(user.id).then(setUserDetails);
  };
  console.warn(userDetails);

  // API CALL TO GET THE USER ON COMPONENT RENDER
  useEffect(() => {
    document.title = 'Feet First';
    getTheSingleUser(user.id);
  }, []);

  return (
    <div><h1>{user.username}</h1>
      <img src={user.profile_image_url} alt="user" width="100px" height="100px" />
      <h3>{user.first_name} {user.last_name}</h3>
      <h4><b>Email:</b> {user.email}</h4>
      <Button
        type="button"
        size="lg"
        className="copy-btn"
        onClick={() => {
          router.push(`/users/edit/${userDetails.id}`);
        }}
      >
        Update
      </Button>
      <Button
        type="button"
        variant="danger"
        size="lg"
        className="copy-btn"
        onClick={() => {
          router.push(`/users/edit/${userDetails.id}`);
        }}
      >
        Delete
      </Button>
    </div>
  );
}
// DOES PROPTYPES NEED TO BE HERE? THROWS AN ERROR WHEN ACTIVE BUT NOT WHEN DISABLED OR REMOVED
// UserProfile.propTypes = {
//   userObj: PropTypes.shape({
//     username: PropTypes.string,
//     first_name: PropTypes.string,
//     last_name: PropTypes.string,
//     email: PropTypes.string,
//     uid: PropTypes.string,
//     profile_image_url: PropTypes.string,

//   }).isRequired,
// };
// BELOW GOES AFTER userObj PropTypes
// .isRequired,
