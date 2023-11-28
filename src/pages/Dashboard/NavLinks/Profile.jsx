// UserProfile.js
import React from 'react';
import { useSelector } from 'react-redux';

const UserProfile = () => {
  const user = useSelector((state) => state.user); // Access user property
  console.log('User data:', user);
  if (!user) {
    return <p>No user data found.</p>;
  }

  return (
    <div>
      <h2>User Profile</h2>
      <p>Name: {user.user.userName}</p>
      <p>Email: {user.user.email}</p>
      {/* Add more profile information here */}
    </div>
  );
};

export default UserProfile;
