import { Link, NavLink } from "react-router-dom";
import logo from "./../assets/img/react.png";

export const Header = () => {
  return (
    <nav className="navbar navbar-expand-lg bg-light navbar-dark bg-dark">
      <div className="container-fluid">
        <Link to="/" className="navbar-brand">
          <img src={logo} alt="" className="d-inline-block align-text-top" />{" "}
          Home
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNavDropdown"
          aria-controls="navbarNavDropdown"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavDropdown">
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link to="/form" className="nav-link">
                Form
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/listed" className="nav-link">
                Listed
              </Link>
            </li>
            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle"
                href="/#"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Product
              </a>
              <ul className="dropdown-menu">
                <li>
                  <Link to="/shop" className="dropdown-item">
                    Shopping
                  </Link>
                </li>
                <li>
                  <Link to="/login" className="dropdown-item">
                    Login
                  </Link>
                </li>
                <li>
                  <Link to="/blog" className="dropdown-item">
                    Blog
                  </Link>
                </li>
              </ul>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};
