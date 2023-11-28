// // import React from "react";
// // import { Routes, Route } from "react-router-dom";
// // import Home from "./pages/Home/Home";
// // import SingleProduct from './pages/ProductPage/SingleProduct';
// // import Cart from './pages/Cart/Cart';
// // import Dashboard from "./pages/Dashboard/Dashboard";
// // import Checkout from './pages/Checkout';
// // import Login from './pages/Login/Login';
// // import SignUP from './pages/Signup/SignUP';
// // import AboutPage from './pages/AboutPage';
// // import ContactPage from './pages/ContactPage';
// // import ViewOrders from './Components/Orders/ViewOrder';
// // import Products from './Components/Products/ProductCard';
// // import Favorites from './Components/Favorites';

// // const AppRoutes = () => {
// //   return (
// //     <Routes>
// //       <Route path="/" element={<Home />} />
// //       <Route path="/products" element={<Products />} />
// //       <Route path="/products/:id" element={<SingleProduct />} />
// //       <Route path="/cart" element={<Cart />} />
// //       <Route path="/checkout" element={<Checkout />} />
// //       <Route path="/login" element={<Login />} />
// //       <Route path="/signup" element={<SignUP />} />
// //       <Route path="/aboutus" element={<AboutPage />} />
// //       <Route path="/contactus" element={<ContactPage />} />
// //       <Route path="/dashboard" element={<Dashboard />} />
// //       <Route path="/orders" element={<ViewOrders />} />
// //        <Route path="/favorites" element={<Favorites />} /> 
// //     </Routes>
// //   );
// // };

// // export default AppRoutes;
// // AppRoutes.js
// import React from "react";
// import { Routes, Route } from "react-router-dom";
// import Home from "./pages/Home/Home";
// import SingleProduct from './pages/ProductPage/SingleProduct';
// import Cart from './pages/Cart/Cart';
// import Dashboard from "./pages/Dashboard/Dashboard";
// import Checkout from './pages/Checkout';
// import Login from './pages/Login/Login';
// import SignUP from './pages/Signup/SignUP';
// import AboutPage from './pages/AboutPage';
// import ContactPage from './pages/ContactPage';
// import ViewOrders from './Components/Orders/ViewOrder';
// import Products from './Components/Products/ProductCard';
// import Favorites from './Components/Favorites';

// const AppRoutes = () => {
//   return (
//     <Routes>
//       <Route path="/" element={<Home />} />
//       <Route path="/products" element={<Products />} />
//       <Route path="/products/:id" element={<SingleProduct />} />
//       <Route path="/cart" element={<Cart />} />
//       <Route path="/checkout" element={<Checkout />} />
//       <Route path="/login" element={<Login />} />
//       <Route path="/signup" element={<SignUP />} />
//       <Route path="/aboutus" element={<AboutPage />} />
//       <Route path="/contactus" element={<ContactPage />} />
//       <Route path="/dashboard/*" element={<Dashboard />}>
//         <Route path="profile" element={<div>Profile content</div>} />
//         <Route path="orders" element={<ViewOrders />} />
//         <Route path="settings" element={<div>Account Settings content</div>} />
//       </Route>
//       <Route path="/orders" element={<ViewOrders />} />
//       <Route path="/favorites" element={<Favorites />} />
//     </Routes>
//   );
// };

// export default AppRoutes;
import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Home from "./pages/Home";
import SingleProduct from './pages/ProductPage';
import Cart from './pages/Cart';
import Dashboard from "./pages/Dashboard";
import Checkout from './pages/checkOut';
import Login from './pages/Login';
import SignUP from './pages/SignUp';
import AboutPage from './pages/AboutPage';
import ContactPage from './pages/ContactPage';
import ViewOrders from './components/Orders';
import Products from './components/Products/ProductCard';
import Favorites from './components/Favorites';
import { useSelector } from 'react-redux';

const PrivateRoute = ({ element, authenticated, redirectTo }) => {
  return authenticated ? (
    <>{element}</>
  ) : (
    <Navigate to={redirectTo} replace />
  );
};


const AppRoutes = () => {
  const isAuthenticated = useSelector(state => state.user.isAuthenticated);

  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/products" element={<Products />} />
      <Route path="/products/:id" element={<SingleProduct />} />
      <Route path="/cart" element={<Cart />} />
      <Route path="/checkout" element={<Checkout />} />
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<SignUP />} />
      <Route path="/aboutus" element={<AboutPage />} />
      <Route path="/contactus" element={<ContactPage />} />

      {/* Wrap the dashboard route with the PrivateRoute component */}
      <Route
        path="/dashboard/*"
        element={<PrivateRoute element={<Dashboard />} authenticated={isAuthenticated} redirectTo="/login" />}
      >
        <Route path="profile" element={<div>Profile content</div>} />
        <Route path="orders" element={<ViewOrders />} />
        <Route path="settings" element={<div>Account Settings content</div>} />
      </Route>

      <Route path="/orders" element={<ViewOrders />} />
      <Route path="/favorites" element={<Favorites />} />
    </Routes>
  );
};

export default AppRoutes;
