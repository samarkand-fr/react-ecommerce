import React from "react";
import { Link, useNavigate } from "react-router-dom";  // Import useNavigate from react-router-dom
import { useDispatch } from 'react-redux';
import { userLogout } from '../../../redux/actions/userActions';

const DashboardNav = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();  // Use useNavigate hook

  const handleLogout = () => {
    // Dispatch action to logout (clear user data from Redux store)
    dispatch(userLogout());

    // Navigate to the home page
    navigate('/');
  };

  return (
    <nav>
      <ul>
        <li>
          <Link to="/dashboard/profile">View Profile</Link>
        </li>
        <li>
          <Link to="/dashboard/orders">View Orders</Link>
        </li>
        <li>
          <button onClick={handleLogout}>Logout</button>
        </li>
      </ul>
    </nav>
  );
};

export default DashboardNav;
