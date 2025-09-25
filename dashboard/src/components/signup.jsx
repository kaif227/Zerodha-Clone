import React, { useState } from "react";
import axios from "axios";
import {Link, useNavigate } from "react-router-dom";
import { Eye, EyeOff, Shield } from "lucide-react";

function Signup() {
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setFormData((prevData) => ({
      ...prevData,
      [e.target.name]: e.target.value,
    }));
  };

  // Handle form submit
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await axios.post(`${import.meta.env.VITE_API_URL}/signup`, formData, {
        withCredentials: true, // important for cookies (JWT)
      });

      if (res.data && res.data.success === true) {
        alert(`Hi,${formData.username} you are successfully signed in `);
        localStorage.setItem("user", JSON.stringify(res.data.user)); // store user
        navigate("/");
      } else {
        alert(res.data.message || "Signup failed!");
      }
    } catch (err) {
      console.error(err);
      alert("Error while signing up");
    }
  };

  return (
    <div className="d-flex justify-content-center align-items-center vh-100 bg-light">
      <div className="card shadow-lg border-0 rounded-3 overflow-hidden" style={{ width: "420px" }}>
        {/* Header */}
        <div style={{ backgroundColor: "#387ED1" }} className="card-header text-center py-4">
          <div className="d-flex justify-content-center align-items-center mb-2">
            <Shield className="me-2 text-white" size={28} />
            <h4 className="mb-0 fw-bold text-white">Zerodha</h4>
          </div>
          <small className="text-white-50">India's largest stock broker</small>
        </div>

        {/* Signup Form */}
        <div className="card-body p-4">
          <h5 className="text-center fw-semibold mb-3">Create your account</h5>
          <form onSubmit={handleSubmit}>
            {/* Username */}
            <div className="mb-3">
              <label htmlFor="username" className="form-label fw-semibold">
                Username
              </label>
              <input
                type="text"
                id="username"
                name="username"
                className="form-control form-control-md"
                placeholder="Enter username"
                value={formData.username}
                onChange={handleChange}
                required
              />
            </div>

            {/* Email */}
            <div className="mb-3">
              <label htmlFor="email" className="form-label fw-semibold">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                className="form-control form-control-md"
                placeholder="Enter email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>

            {/* Password with toggle */}
            <div className="mb-3">
              <label htmlFor="password" className="form-label fw-semibold">
                Password
              </label>
              <div className="input-group">
                <input
                  type={showPassword ? "text" : "password"}
                  id="password"
                  name="password"
                  className="form-control form-control-md"
                  placeholder="Enter password"
                  value={formData.password}
                  onChange={handleChange}
                  required
                />
                <button
                  type="button"
                  className="btn btn-outline-secondary"
                  onClick={() => setShowPassword(!showPassword)}
                >
                  {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                </button>
              </div>
            </div>

            {/* Submit Button */}
            <button  style={{ backgroundColor: "#387ED1",color:'white' }} type="submit" className="btn  w-100 btn-lg mt-2">
              Sign Up
            </button>
          </form>

          {/* Footer Links */}
          <div className="text-center mt-4">
            <p className="mb-1 text-muted" style={{ fontSize: "14px" }}>
              Already have an account?{" "}
              <Link to="/login" className="text-decoration-none fw-semibold" style={{ color: "#387ED1" }}>
                Login
              </Link>
              
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Signup;
