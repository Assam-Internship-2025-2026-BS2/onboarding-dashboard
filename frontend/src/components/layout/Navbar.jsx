import { NavLink } from "react-router-dom";
import { useContext, useState } from "react";
import { ThemeContext } from "../../context/ThemeContext";
import { FaBell, FaUserCircle, FaBars, FaMoon, FaSun } from "react-icons/fa";
import "./Navbar.css";

const Navbar = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="navbar">
      <div className="navbar-left">
        <img src="/hdfc-logo.png" alt="HDFC Logo" className="logo" />
      </div>

      <nav className={`nav-links ${menuOpen ? "open" : ""}`}>
        <NavLink to="/" end>
          Dashboard
        </NavLink>
        <NavLink to="/products">Products</NavLink>
        <NavLink to="/customer-insights">Customer Insights</NavLink>
        <NavLink to="/analysis">Analysis</NavLink>
      </nav>

      <div className="navbar-right">
        <button onClick={toggleTheme} className="icon-btn">
          {theme === "light" ? <FaMoon /> : <FaSun />}
        </button>

        <FaBell className="icon" />
        <FaUserCircle className="icon" />

        <FaBars
          className="icon menu-icon"
          onClick={() => setMenuOpen(!menuOpen)}
        />
      </div>
    </header>
  );
};

export default Navbar;