// import React, { useState } from "react";
// import { Link, useNavigate } from "react-router-dom";
// import Footer from "../../Components/Footer/Footer";
// import "./Login.css"; // Make sure to include your custom CSS file

// const Login = () => {
//   const [loginData, setLoginData] = useState({
//     userName: "",
//     password: "",
//   });

//   const [error, setError] = useState("");
//   const navigate = useNavigate();

//   const handleInputChange = (e) => {
//     const { name, value } = e.target;
//     setLoginData((prevData) => ({
//       ...prevData,
//       [name]: value,
//     }));
//   };

//   const handleLogin = (event) => {
//     event.preventDefault();

//     const users = JSON.parse(localStorage.getItem("users")) || [];
//     const user = users.find(
//       (u) => u.userName === loginData.userName && u.password === loginData.password
//     );

//     if (user) {
//       // Successful login, perform necessary actions
//       console.log("Login successful");
//       setError("");
//       setLoginData({
//         userName: "",
//         password: "",
//       });

//       // Redirect to a different page after successful login
//       navigate("/dashboard"); // Replace "/dashboard" with the desired route
//     } else {
//       setError("Invalid username or password");
//     }
//   };

//   return (
//     <>
//       <form onSubmit={handleLogin} className="container mt-5">
//         <div className="Fields mb-3">
//           <div>
//             <label htmlFor="userName" className="form-label">
//               Username:
//             </label>
//           </div>
//           <div>
//             <input
//               type="text"
//               id="userName"
//               name="userName"
//               value={loginData.userName}
//               onChange={handleInputChange}
//               className="form-control"
//               required
//             />
//           </div>
//         </div>

//         <div className="Fields mb-3">
//           <div>
//             <label htmlFor="password" className="form-label">
//               Password:
//             </label>
//           </div>
//           <div>
//             <input
//               type="password"
//               id="password"
//               name="password"
//               value={loginData.password}
//               onChange={handleInputChange}
//               className="form-control"
//               required
//             />
//           </div>
//         </div>

//         <div className="button_container">
//           <button type="submit" className="btn btn-primary">
//             Login
//           </button>
//         </div>
//       </form>

//       <p className="mt-3">{error}</p>
//       <Link to="/signup" id="signup" className="mt-3">
//         Don't have an account? Sign Up
//       </Link>
//       <Footer />
//     </>
//   );
// };

// export default Login;
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Footer from "../../components/Footer";
import { useDispatch } from "react-redux";
import { loadUserData } from '../../redux/actions/userActions';

const Login = () => {
  const [loginData, setLoginData] = useState({
    userName: "",
    password: "",
  });

  const dispatch = useDispatch();
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setLoginData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleLogin = async (event) => {
    event.preventDefault();

    try {
      const response = await fetch("http://localhost:3001/api/users/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(loginData),
      });

      if (response.ok) {
        const user = await response.json();
        console.log("Login successful", user);

        setError("");
        setLoginData({
          userName: "",
          password: "",
        });

        // Dispatch the userLogin action to update the Redux store
        dispatch(loadUserData(user));

        // Redirect to a different page after successful login
        navigate("/dashboard"); // Replace "/dashboard" with the desired route
      } else {
        // Handle login failure
        setError("Invalid username or password");
        // You can extract error information from the response if available
        const errorData = await response.json();
        console.error('Error details:', errorData);
      }
    } catch (error) {
      console.error("Error during login:", error);
      setError("Error during login");
    }
  };
  
  return (
    <>
      <form onSubmit={handleLogin} className="container mt-5">
        <div className="Fields mb-3">
          <div>
            <label htmlFor="userName" className="form-label">
              Username:
            </label>
          </div>
          <div>
            <input
              type="text"
              id="userName"
              name="userName"
              value={loginData.userName}
              onChange={handleInputChange}
              className="form-control"
              required
            />
          </div>
        </div>

        <div className="Fields mb-3">
          <div>
            <label htmlFor="password" className="form-label">
              Password:
            </label>
          </div>
          <div>
            <input
              type="password"
              id="password"
              name="password"
              value={loginData.password}
              onChange={handleInputChange}
              className="form-control"
              required
            />
          </div>
        </div>

        <div className="button_container">
          <button type="submit" className="btn btn-primary">
            Login
          </button>
        </div>
      </form>

      <p className="mt-3">{error}</p>
      <Link to="/signup" id="signup" className="mt-3">
        Don't have an account? Sign Up
      </Link>
      <Footer />
    </>
  );
};

export default Login;
