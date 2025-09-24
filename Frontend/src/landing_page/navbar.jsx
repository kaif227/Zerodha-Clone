import React from "react";
import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import ToggleButton from "@mui/material/ToggleButtonGroup";
import ViewListIcon from "@mui/icons-material/ViewList";

function Navbar() {
  const [user, setUser] = useState(null);
  const navigate = useNavigate();
  const [showDropdown, setShowDropdown] = useState(false);

  useEffect(() => {
    const storedUser = localStorage.getItem("user");

    // only parse if it's valid JSON (not null, not "undefined")
    if (storedUser && storedUser !== "undefined") {
      try {
        setUser(JSON.parse(storedUser));
      } catch (error) {
        console.error("Error parsing stored user:", error);
        localStorage.removeItem("user"); // clear bad data
      }
    }
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("user");
    setUser(null);
    navigate("/signup");
  };

  const toggleDropdown = () => {
    setShowDropdown(!showDropdown);
  };

  const goToKite = () => {
    // If dashboard is a separate app:
    window.location.href = `${import.meta.env.VITE_API_DASHBORD_URL}`;
  };
//   const goToKite = () => {
//   if (user) {
//     // ✅ Logged in → redirect to Kite app
//     // You can also append username if you need: ?username=...
//     window.location.href = `${import.meta.env.VITE_API_DASHBORD_URL}?user=${user.username}`;
//   } else {
//     navigate("/signup");
//   }
// };
  return (
    <nav
      className="navbar navbar-expand-lg border-bottom sticky-top"
      style={{ backgroundColor: "#fff" }}
    >
      <div className="container p-2">
        <Link className="navbar-brand" href="/">
          <img
            src="media/images/logo.svg"
            alt="logo"
            className="img-fluid"
            style={{ maxWidth: "120px", marginLeft: "40px" }}
          />
        </Link>

        {/* Toggler */}
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* Menu */}
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
            <li>
              {!user ? (
                <Link className="nav-link" to="/signup">
                  Signup
                </Link>
              ) : (
                <button className="btn btn-danger" onClick={handleLogout}>
                  Logout
                </button>
              )}
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/about">
                About
              </Link>
            </li>

            <li className="nav-item">
              <Link className="nav-link" to="/products">
                Products
              </Link>
            </li>

            <li className="nav-item">
              <Link className="nav-link" to="/pricing">
                Pricing
              </Link>
            </li>

            <li className="nav-item">
              <Link className="nav-link" to="/support">
                Support
              </Link>
            </li>

            {/* Toggler button */}
            <li className="nav-item position-relative">
              <ToggleButton
                className="nav-link "
                value="list"
                aria-label="list"
                onClick={toggleDropdown}
              >
                <ViewListIcon />
              </ToggleButton>
              {showDropdown && (
                <div
                  className="dropdown-menu show "
                  style={{
                    position: "absolute",
                    right: 0,
                    top: "100%",
                    marginTop: "15px",
                  }}
                >
                  <button className="dropdown-item" onClick={goToKite}>
                    <img
                      src="media/images/mainLogo.png" // change to your logo path
                      alt="Kite Logo"
                      style={{
                        width: "20px",
                        height: "20px",
                        marginRight: "8px",
                      }}
                    />
                    Kite
                  </button>
                </div>
              )}
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
