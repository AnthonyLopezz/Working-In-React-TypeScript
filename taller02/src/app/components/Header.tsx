import logo from "../../assets/img/happy.png";
import { Link } from "react-router-dom";

export const Header = () => {
  return (
    <div className="header">
      <div className="container">
        <div className="row">
          <div className="col-lg-2 d-inline d-flex">
            <div className="header__logo">
              <h3> Cars Website</h3>
            </div>
          </div>
          <div className="col-lg-10">
            <div className="header__nav">
              <nav className="header__menu">
                <ul>
                  <li>
                    <Link to="/" className="nav-link px-2 text-secondary">
                      Home
                    </Link>
                  </li>
                  <li>
                    <Link to="/create" className="nav-link px-2 text-secondary">
                      Create
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/catalog"
                      className="nav-link px-2 text-secondary"
                    >
                      Catalog
                    </Link>
                  </li>
                  <li>
                    <a className="nav-link px-2 text-secondary">Vehicles</a>
                    <ul className="dropdown">
                      <li>
                        <Link to="/manage">Manage</Link>
                      </li>
                    </ul>
                  </li>
                </ul>
              </nav>
            </div>
          </div>
        </div>
        <div className="canvas__open">
          <span className="fa fa-bars"></span>
        </div>
      </div>
    </div>
  );
};
