/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable @next/next/no-img-element */
import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { Button, Image } from 'react-bootstrap';
import Head from 'next/head';
import { useAuth } from '../utils/context/authContext';
import { signOut } from '../utils/auth';
import { getSingleUser, deleteUser } from '../api/userData';

export default function UserProfile() {
  const { user } = useAuth();
  const router = useRouter();

  const [userDetails, setUserDetails] = useState({});

  const deleteProfile = () => {
    if (window.confirm('Are you sure you would like to delete your profile? You cannot undo this action.')) {
      deleteUser(user.id).then(() => signOut());
    }
  };

  const getTheSingleUser = () => {
    getSingleUser(user.id).then(setUserDetails);
  };
  console.warn(userDetails);

  useEffect(() => {
    document.title = 'Feet First';
    getTheSingleUser(user.id);
  }, []);

  return (
    <>
      <Head>
        <title>Profile</title>
      </Head>
      <div className="user-profile-page">
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
        <h1 className="post-details-title">{userDetails.first_name} {userDetails.last_name}</h1>
        <h4 className="post-details-title">{userDetails.email}</h4>
        <h4 className="post-details-text">User Name: <em>{userDetails.username}</em> </h4>
        <Button
          className="profile-btn"
          variant="outline-dark"
          onClick={() => {
            router.push(`/users/edit/${userDetails.id}`);
          }}
        >
          Edit Profile
        </Button>
        <Button variant="outline-dark" className="profile-btn" style={{ marginLeft: 5 }} onClick={deleteProfile}> Delete Profile
        </Button>
      </div>
    </>
  );
}
