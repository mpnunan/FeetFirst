/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from 'react';
import { Button, Image } from 'react-bootstrap';
import Head from 'next/head';
import { useRouter } from 'next/router';
import { useAuth } from '../utils/context/authContext';
import { signOut } from '../utils/auth';
import { deleteUser, getSingleUser } from '../api/userData';

export default function UserProfile() {
  const [userDetails, setUserDetails] = useState({});
  const { user } = useAuth();
  const router = useRouter();
  // const { id } = router.query;

  const deleteProfile = () => {
    if (window.confirm('Are you sure you would like to delete your profile? You cannot undo this.')) {
      deleteUser(user.id).then(() => signOut());
    }
  };

  const getAUser = () => {
    getSingleUser(user.id).then((data) => setUserDetails(data));
  };

  useEffect(() => {
    getAUser(user.id);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [user.id]);

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
        <p className="post-details-text">Bio: {userDetails.username} </p>
        <Button
          className="sub-btn"
          onClick={() => {
            router.push(`/users/edit/${userDetails.id}`);
          }}
        >
          Edit Profile
        </Button>
        <Button variant="danger" className="unsub-btn" onClick={deleteProfile}> Delete Profile</Button>
        <Button variant="success" className="signout-btn" onClick={signOut}> Sign Out</Button>
      </div>
    </>
  );
}
