import { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const Menu = () => {
  const [selectedMenu, setSelectedMenu] = useState(0);
  const [username, setUsername] = useState(null);
  const [isProfileOpen, setIsProfileOpen] = useState(false);

  // for user verification
  // useEffect(() => {
  //   axios
  //     .post("http://localhost:8080/verify", {}, { withCredentials: true })
  //     .then((res) => {
  //       if (res.data.status) {
  //         setUsername(res.data.user); // backend sends username
  //       } else {
  //         setUsername(null);
  //       }
  //     })
  //     .catch((err) => {
  //       console.error("User not verified:", err);
  //       setUsername(null);
  //     });
  // }, []);
  useEffect(() => {
  axios
    .post(`${import.meta.env.VITE_API_URL}/verify`, {}, { withCredentials: true })
    .then((res) => {
      if (res.data.status) {
        setUsername(res.data.user);
      } else {
        setUsername(null); // Guest
      }
    })
    .catch(() => setUsername(null));
}, []);

  const handleMenuClick = (index) => {
    setSelectedMenu(index);
  };

  const handleProfileClick = () => {
    setIsProfileOpen(!isProfileOpen);
  };

  // const handleLogout = () => {
  //   // Optionally call backend logout endpoint if needed
  //   setUsername(null);
  //   setIsProfileOpen(false);
  // };
const handleLogout = () => {
  axios.post(`${import.meta.env.VITE_API_URL}/logout`, {}, { withCredentials: true })
    .then(() => {
      setUsername(null); // reset to Guest
      setIsProfileOpen(false);
    })
    .catch(err => console.error("Logout failed:", err));
};


//   const handleSignupRedirect = () => {
//   const url = `${import.meta.env.VITE_API_FRONTEND_URL}/signup`;
//   console.log("Redirecting to:", url);
//   window.location.href = url;
// };
const handleSignupRedirect = () => {
  const url = import.meta.env.VITE_API_FRONTEND_URL
  console.log("Redirecting to:", url);
  window.location.replace(url); // replace is safer than href here
};



  const menuClass = "menu";
  const activeMenuClass = "menu selected";

  return (
    <div className="menu-container">
      <img src="/mainLogo.png" style={{ width: "50px" }} />
      <div className="menus">
        <ul>
          <li>
            <Link
              style={{ textDecoration: "none" }}
              to="/"
              onClick={() => handleMenuClick(0)}
            >
              <p className={selectedMenu === 0 ? activeMenuClass : menuClass}>
                Dashboard
              </p>
            </Link>
          </li>
          <li>
            <Link
              style={{ textDecoration: "none" }}
              to="/orders"
              onClick={() => handleMenuClick(1)}
            >
              <p className={selectedMenu === 1 ? activeMenuClass : menuClass}>
                Orders
              </p>
            </Link>
          </li>
          <li>
            <Link
              style={{ textDecoration: "none" }}
              to="/holdings"
              onClick={() => handleMenuClick(2)}
            >
              <p className={selectedMenu === 2 ? activeMenuClass : menuClass}>
                Holdings
              </p>
            </Link>
          </li>
          <li>
            <Link
              style={{ textDecoration: "none" }}
              to="/positions"
              onClick={() => handleMenuClick(3)}
            >
              <p className={selectedMenu === 3 ? activeMenuClass : menuClass}>
                Positions
              </p>
            </Link>
          </li>
          <li>
            <Link
              style={{ textDecoration: "none" }}
              to="/funds"
              onClick={() => handleMenuClick(4)}
            >
              <p className={selectedMenu === 4 ? activeMenuClass : menuClass}>
                Funds
              </p>
            </Link>
          </li>
          <li>
            <Link
              style={{ textDecoration: "none" }}
              to="/apps"
              onClick={() => handleMenuClick(6)}
            >
              <p className={selectedMenu === 6 ? activeMenuClass : menuClass}>
                Apps
              </p>
            </Link>
          </li>
        </ul>
        <hr />

        {/* Profile section */}
        <div
          className="profile position-relative"
          onClick={handleProfileClick}
          style={{ cursor: "pointer" }}
        >
          <div
            className="avatar"
            style={{
              fontSize: "24px",
              padding: "10px",
              background: "#ccc",
              borderRadius: "50%",
            }}
          >
            {username ? username[0].toUpperCase() : "G"}
          </div>
          <p className="username">{username ? username : "Guest"}</p>

          {/* Dropdown menu */}
          {isProfileOpen && (
            <div
              className="dropdown-menu show"
              style={{
                position: "fixed",
                top: "20%",
                left: "90%",
                transform: "translate(-50%, -50%)",
                minWidth: "200px",
                padding: "20px",
                background: "#fff",
                border: "1px solid #333",
                boxShadow: "0 4px 8px rgba(0,0,0,0.2)",
                zIndex: 9999,
                textAlign: "center",
              }}
            >
              {username ? (
                <button
                  className="dropdown-item p-5"
                  style={{ padding: "10px 20px", cursor: "pointer", backgroundColor:"orange",color:"white",border:"none" }}
                  onClick={handleLogout}
                >
                  Logout
                </button>
              ) : (
                <button
                  className="dropdown-item"
                  onClick={handleSignupRedirect}
                  style={{ padding: "10px 20px", cursor: "pointer", backgroundColor:"orange",color:"white",border:"none" }}
                >
                  Signup
                </button>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Menu;
