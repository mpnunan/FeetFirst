import React from 'react';
import Image from 'next/image';
import PropTypes from 'prop-types';
import { Button } from 'react-bootstrap';
import { useAuth } from '../utils/context/authContext';
import
{ signOut } from '../utils/auth';

export default function UserProfile() {
  const { user } = useAuth();
  return (
    <div><h1>{user.username}</h1>
      <Image src={user.photoURL} alt="user" width="100px" height="100px" />
      <h3>{user.first_name} {user.last_name}</h3>
      <h4><b>Email:</b> {user.email}</h4>
      <Button type="button" size="lg" className="copy-btn" onClick={signOut}>
        Sign Out
      </Button>
    </div>
  );
}

UserProfile.propTypes = {
  userObj: PropTypes.shape({
    username: PropTypes.string,
    first_name: PropTypes.string,
    last_name: PropTypes.string,
    email: PropTypes.string,
    uid: PropTypes.string,
    firebaseKey: PropTypes.string,

  }).isRequired,
};
