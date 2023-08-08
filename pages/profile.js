import React from 'react';
import UserProfile from '../components/userProfile';
import Footer from '../components/Footer';

export default function Profile() {
  return (
    <div className="user-profile">
      <UserProfile />
      <div className="footer">
        <Footer />
      </div>
    </div>
  );
}
