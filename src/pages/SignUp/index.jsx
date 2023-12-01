import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import Footer from "../../components/Footer";
import { loadUserData, userLoading } from "../../redux/actions/userActions";

const Signup = () => {
  const dispatch = useDispatch();
  const [userData, setUserData] = useState({
    userName: "",
    email: "",
    password: "",
    gender: "male",
    contactNumber: "",
  });

  const handleInputChange = (e) =>
    setUserData((prevData) => ({
      ...prevData,
      [e.target.name]: e.target.value,
    }));

  const handleSignUp = async (event) => {
    event.preventDefault();
    dispatch(userLoading());

    try {
      const response = await fetch("http://localhost:3001/api/users/signup", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(userData),
      });

      if (response.ok) {
        const data = await response.json();
        dispatch(loadUserData(data));
        console.log("Registration successful", data);

        // Redirect to a different page after successful registration
        // For example, navigate to the login page
        // This depends on your application flow
      } else {
        // Handle registration failure
        console.error("Registration failed");
        // You can extract error information from the response if available
        const errorData = await response.json();
        console.error("Error details:", errorData);
      }
    } catch (error) {
      console.error("Error during registration:", error);
    }
  };
  return (
    <>
      <form onSubmit={handleSignUp} className="container mt-5" method="post">
        <p className="Form_Text">
          Already have an account? <Link to="/login">Login</Link>
        </p>

        <div className="Form_Container">
          <h2>Sign Up</h2>

          {/* Username */}
          <div className="mb-3">
            <label htmlFor="userName" className="form-label">
              Username:
            </label>
            <input
              type="text"
              id="userName"
              name="userName"
              value={userData.userName}
              onChange={handleInputChange}
              className="form-control"
              required
            />
          </div>

          {/* Email */}
          <div className="mb-3">
            <label htmlFor="email" className="form-label">
              Email:
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={userData.email}
              onChange={handleInputChange}
              className="form-control"
              required
            />
          </div>

          {/* Password */}
          <div className="mb-3">
            <label htmlFor="password" className="form-label">
              Password:
            </label>
            <input
              type="password"
              id="password"
              name="password"
              value={userData.password}
              onChange={handleInputChange}
              className="form-control"
              required
            />
          </div>

          {/* Submit button */}
          <div className="button_container">
            <button type="submit" className="btn btn-primary">
              Submit
            </button>
          </div>
        </div>
      </form>
      <Footer />
    </>
  );
};

export default Signup;
