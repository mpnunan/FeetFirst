/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable @next/next/no-img-element */
import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { Button, Image } from 'react-bootstrap';
import Head from 'next/head';
// import PropTypes from 'prop-types';
import { useAuth } from '../utils/context/authContext';
import { signOut } from '../utils/auth';
import { getSingleUser, deleteUser } from '../api/userData';

export default function UserProfile() {
  const { user } = useAuth();
  const router = useRouter();

  // SET A STATE FOR THE USER
  const [userDetails, setUserDetails] = useState({});

  // FUNCTION TO DELETE USER PROFILE
  const deleteProfile = () => {
    if (window.confirm('Are you sure you would like to delete your profile? You cannot undo this action.')) {
      deleteUser(user.id).then(() => signOut());
    }
  };

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
    <>
      <Head>
        <title>Profile Page</title>
      </Head>
      <div className="d-flex flex-column">
        <Image
          className="plant-image"
          src={userDetails.profile_image_url}
          alt={userDetails.name}
          style={{
            width: '300px', borderRadius: '0px', border: '3px solid #014415', boxShadow: '6px 6px rgb(216, 208, 208)',
          }}
        />
      </div>
      <div className="profile-font" style={{ marginTop: '35px' }}>
        <h2 className="post-details-title">{userDetails.first_name} {userDetails.last_name}</h2>
        <h5 className="post-details-title">{userDetails.email}</h5>
        <p className="post-details-text">User Name: <em>{userDetails.username}</em> </p>
        <Button
          className="profile-btn"
          variant="info"
          onClick={() => {
            router.push(`/users/edit/${userDetails.id}`);
          }}
        >
          Edit Profile
        </Button>
        <Button variant="danger" className="profile-btn" style={{ marginLeft: 5 }} onClick={deleteProfile}> Delete Profile
        </Button>
      </div>
    </>
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
