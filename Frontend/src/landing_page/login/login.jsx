import { useState,useEffect } from "react";
import { Eye, EyeOff, Shield } from "lucide-react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import TextField from "@mui/material/TextField";

const ZerodhaLoginPage = () => {
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const [username, setUsername] = useState(null);
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    rememberMe: false,
  });
   useEffect(() => {
  axios.post(`${import.meta.env.VITE_API_URL }/verify`, {}, { withCredentials: true })
    .then((res) => {
      if (res.data.status) {
        setUsername(res.data.user);
        console.log(res.data.status)
      } else {
        setUsername(null); // Guest
      }
    })
    .catch(() => setUsername(null));
}, []);

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  // Handle form submit
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await axios.post(
        `${import.meta.env.VITE_API_URL}/login`,
        formData,
        {
          withCredentials: true, // important for cookies (JWT)
        }
      );

      if (res.data && res.data.success === true) {
        alert(`Login successful! 🎉 Welcome back, ${username}.`);
        console.log(res.data);
        localStorage.setItem("user", JSON.stringify(res.data.user)); // store user
        navigate("/");
      } else {
        alert(res.data.message || "Login failed!");
      }
    } catch (err) {
      console.error(err);
      alert("Error while loging up");
    }
  };

  return (
    <div className="d-flex align-items-center justify-content-center vh-100 bg-light">
      <div
        className="card shadow-lg"
        style={{ maxWidth: "420px", width: "100%" }}
      >
        {/* Header */}
        <div
          style={{ backgroundColor: "#387ED1", color: "white" }}
          className="card-header text-white text-center py-4"
        >
          <div className="d-flex justify-content-center align-items-center mb-2">
            <Shield className="me-2" size={28} />
            <h4 className="mb-0 fw-bold">Zerodha</h4>
          </div>
          <small style={{ color: "white" }}>India's largest stock broker</small>
        </div>

        {/* Form */}
        <div className="card-body p-4">
          <h5 className="fw-semibold mb-3">Login</h5>

          <form onSubmit={handleSubmit}>
            {/* User ID */}
            <TextField
              className="form-control"
              id="email"
              name="email"
              label="Phone or User Id"
              style={{ width: "100%" }}
              value={formData.email}
              onChange={handleInputChange}
              variant="outlined"
            /> <br/><br/>

            {/* password */}
             <TextField
              className="form-control"
              type={showPassword ? "text" : "password"}
              id="password"
              name="password"
              label="Password"
              style={{ width: "88%", }}
              value={formData.password}
              onChange={handleInputChange}
              variant="outlined"
            /> <button
                  type="button"
                  style={{height:"56px"}}
                  className="btn btn-outline-secondary"
                  onClick={() => setShowPassword(!showPassword)}
                >
                  {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                </button>



            
            

            {/* Remember Me */}
            <div className="form-check mb-3">
              <input
                className="form-check-input"
                type="checkbox"
                id="rememberMe"
                name="rememberMe"
                checked={formData.rememberMe}
                onChange={handleInputChange}
              />
              <label className="form-check-label" htmlFor="rememberMe">
                Remember me
              </label>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              style={{ backgroundColor: "#387ED1", color: "white" }}
              className="btn  w-100 fw-semibold"
            >
              Login
            </button>
          </form>

          {/* Extra Links */}
          <div className="text-center mt-4">
            <a
              href="#"
              style={{ color: "#387ED1" }}
              className="d-block small  mb-2"
            >
              Forgot user ID or password?
            </a>
            <Link
              to="/signup"
              style={{ color: "#387ED1" }}
              className="d-block small "
            >
              Don’t have an account? Sign up
            </Link>
          </div>
        </div>

        {/* Footer */}
        <div className="card-footer text-center bg-light small text-muted">
          © 2025 Zerodha. All rights reserved. |{" "}
          <a
            href="#"
            style={{ color: "#387ED1" }}
            className="text-decoration-none"
          >
            Privacy Policy
          </a>{" "}
          |{" "}
          <a
            href="#"
            style={{ color: "#387ED1" }}
            className="text-decoration-none"
          >
            Terms of Service
          </a>
        </div>
      </div>
    </div>
  );
};

export default ZerodhaLoginPage;
