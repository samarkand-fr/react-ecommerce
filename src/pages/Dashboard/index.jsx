// // Dashboard.js
// import React, { useState } from "react";
// import { Link } from "react-router-dom";
// import ViewOrders from "../../Components/Orders/ViewOrder"; // Correct the casing in the import

// const Dashboard = () => {
//   // State to manage the visibility of ViewOrders component
//   const [isViewOrdersVisible, setViewOrdersVisible] = useState(false);

//   return (
//     <div>
//       <h2>Welcome to Your Dashboard</h2>
//       <p>This is your personalized dashboard. You can view your profile, orders, and other information here.</p>

//       <div>
//         <Link to="/profile">View Profile</Link>
//       </div>

//       <div>
//         {/* Toggle visibility when clicking on "View Orders" link */}
//         <Link to="/orders" onClick={() => setViewOrdersVisible(!isViewOrdersVisible)}>
//           View Orders
//         </Link>
//         {/* Render the ViewOrders component only when isViewOrdersVisible is true */}
//         {isViewOrdersVisible && <ViewOrders />}
//       </div>

//       <div>
//         <Link to="/settings">Account Settings</Link>
//       </div>
//     </div>
//   );
// };

// export default Dashboard;
// Dashboard.js

import React from "react";
import { Routes, Route } from "react-router-dom";
import DashboardNav from "./NavLinks/DashboardNav";
import ViewOrders from "../../components/Orders";
import Profile from "./NavLinks/Profile";

const Dashboard = () => {
  return (
    <div>
      <h2>Welcome to Your Dashboard</h2>
      <p>
        This is your personalized dashboard. You can view your profile, orders,
        and other information here.
      </p>

      <DashboardNav />

      <Routes>
        {/* Add the /dashboard/* prefix here */}
        <Route path="/*" element={<div>Dashboard content</div>} />
        <Route path="profile" element={<Profile />} />
        <Route path="orders" element={<ViewOrders />} />
        <Route path="settings" element={<div>Account Settings content</div>} />
      </Routes>
    </div>
  );
};

export default Dashboard;
