import { useState } from "react";
import { OperationsMethodName } from "../interfaces/OperationsMethodName";
import logo from "./../assets/img/react.png";

export const Header = (obj: OperationsMethodName) => {
  return (
    <div>
      <nav className="navbar navbar-dark bg-dark fixed-top">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">
            <img src={logo} alt="" className="d-inline-block align-text-top" />{" "}
            React with TypeScript || 2271557
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
                    href="/#"
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
                          obj.selection("Addition");
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
                          obj.selection("Substract");
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
                          obj.selection("Multiply");
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
                          obj.selection("Division");
                        }}
                      >
                        Division
                      </a>
                    </li>
                  </ul>
                </li>
              </ul>
              <ul className="navbar-nav justify-content-end flex-grow-1 pe-3">
                <li className="nav-item dropdown">
                  <a
                    className="nav-link dropdown-toggle"
                    href="/#"
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    Number Type
                  </a>
                  <ul className="dropdown-menu dropdown-menu-dark">
                    <li>
                      <a
                        className="dropdown-item"
                        href="/#"
                        onClick={() => {
                          obj.selectionNumber("Even");
                        }}
                      >
                        Even
                      </a>
                    </li>
                    <li>
                      <a
                        className="dropdown-item"
                        href="/#"
                        onClick={() => {
                          obj.selectionNumber("Odd");
                        }}
                      >
                        Odd
                      </a>
                    </li>
                  </ul>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};
