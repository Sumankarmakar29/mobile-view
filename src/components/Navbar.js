import React from "react";
import {useLocation ,Link}  from 'react-router-dom'
import { useEffect } from "react";

export default function Navbar(props) {
  // let location = useLocation();
  // useEffect(() => {
  // console.log(location.pathname);
  // }, [location]);

  return (
    <div className="container ">
      <nav className="navbar navbar-expand-lg bg-dark top-fixed">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">
         Adista
          </a>
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
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#">
                  Home
                </a>
              </li>
             
             
             
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}
