import logo from "../../assets/img/happy.png";
import { Link } from "react-router-dom";

export const Header = () => {
  return (
    <div>
      <header className="p-3 text-bg-dark">
        <div className="container">
          <div className="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start">
            <a className="navbar-brand" href="/#">
              <img
                src={logo}
                width="30"
                height="30"
                className="d-inline-block align-text-top"
              />{" "}
              {"  "}
            </a>

            <ul className="nav col-12 col-lg-auto me-lg-auto mb-2 justify-content-center mb-md-0">
              <li>
                <Link to="/" className="nav-link px-2 text-secondary">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/create" className="nav-link px-2 text-white">
                  Create
                </Link>
              </li>
              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle px-2 text-white"
                  href="/#"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Vehicles
                </a>
                <ul className="dropdown-menu">
                  <li>
                    <Link to="/catalog" className="dropdown-item">
                      Calatog
                    </Link>
                  </li>
                  <li>
                    <Link to="/manage" className="dropdown-item">
                      Manage
                    </Link>
                  </li>
                </ul>
              </li>
            </ul>

            <form
              className="col-12 col-lg-auto mb-3 mb-lg-0 me-lg-3"
              role="search"
            >
              <input
                type="search"
                className="form-control form-control-dark text-bg-dark"
                placeholder="Search..."
                aria-label="Search"
              />
            </form>

            <div className="text-end">
              <button type="button" className="btn btn-outline-light me-2">
                Login
              </button>
              <button type="button" className="btn btn-warning">
                Sign-up
              </button>
            </div>
          </div>
        </div>
      </header>
    </div>
  );
};
