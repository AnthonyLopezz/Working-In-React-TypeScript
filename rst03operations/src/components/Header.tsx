import { useState } from "react";
import logo from "./../assets/img/react.png";
import { SumForm } from "./SumForm";

export const Header = () => {
  const [select, setSelect] = useState<String>("Addition");

  return (
    <div>
      <nav className="navbar navbar-dark bg-dark fixed-top">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">
            <img src={logo} alt="" className="d-inline-block align-text-top" />
            &nbsp; React with TypeScript
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="offcanvas"
            data-bs-target="#offcanvasDarkNavbar"
            aria-controls="offcanvasDarkNavbar"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div
            className="offcanvas offcanvas-end text-bg-dark"
            tabIndex={1}
            id="offcanvasDarkNavbar"
            aria-labelledby="offcanvasDarkNavbarLabel"
          >
            <div className="offcanvas-header">
              <h5 className="offcanvas-title" id="offcanvasDarkNavbarLabel">
                Basic Calculator
              </h5>
              <button
                type="button"
                className="btn-close btn-close-white"
                data-bs-dismiss="offcanvas"
                aria-label="Close"
              ></button>
            </div>
            <div className="offcanvas-body">
              <ul className="navbar-nav justify-content-end flex-grow-1 pe-3">
                <li className="nav-item dropdown">
                  <a
                    className="nav-link dropdown-toggle"
                    href="#"
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    Basic Operations
                  </a>
                  <ul className="dropdown-menu dropdown-menu-dark">
                    <li>
                      <a
                        className="dropdown-item"
                        href="/#"
                        onClick={() => {
                          setSelect("Addition");
                        }}
                      >
                        Addition
                      </a>
                    </li>
                    <li>
                      <a
                        className="dropdown-item"
                        href="/#"
                        onClick={() => {
                          setSelect("Substract");
                        }}
                      >
                        Substract
                      </a>
                    </li>
                    <li>
                      <a
                        className="dropdown-item"
                        href="/#"
                        onClick={() => {
                          setSelect("Multiply");
                        }}
                      >
                        Multiply
                      </a>
                    </li>
                    <li>
                      <a
                        className="dropdown-item"
                        href="/#"
                        onClick={() => {
                          setSelect("Division");
                        }}
                      >
                        Division
                      </a>
                    </li>
                  </ul>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </nav>
     <SumForm nameOperation = {select} /> 
    </div>
  );
};
