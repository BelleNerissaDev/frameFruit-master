import React, { useContext } from "react";
import { NavLink } from "react-router-dom";
import CartBtn from "./buttons/CartBtn";
import Login from "../pages/login";

import StoreContext from "../redux/Login/Context";
import { Redirect } from "react-router-dom/cjs/react-router-dom.min";

const Header = () => {
  const { token } = useContext(StoreContext);
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-dark app-header py-4 px-5">
        <div className="container">
          <NavLink className="navbar-brand fw-bold" to="/">
            <h4>FrameFruit</h4>
          </NavLink>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <NavLink className="nav-link" to="/">
                  Home
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/products">
                  Produtos
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/about">
                  Sobre
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/contact">
                  Contato
                </NavLink>
              </li>
            </ul>
          </div>
          <div className="text-center"></div>
          {token ? (
            <button
              type="button"
              className="btn btn-outline-light ms-2"
              onClick={() => {
                localStorage.removeItem("token");
                window.location.reload(false);
              }}
            >
              <span className="fa fa-sign-in me-1"></span> Deslogar
            </button>
          ) : (
            <NavLink
              type="button"
              className="btn btn-outline-light ms-2"
              to="/login"
            >
              <span className="fa fa-sign-in me-1"></span> Login
            </NavLink>
          )}

          <CartBtn />
          <button
            className="navbar-toggler "
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
        </div>
      </nav>
    </>
  );
};

export default Header;
