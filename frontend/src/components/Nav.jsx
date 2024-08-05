import React from "react";
import { Link } from "react-router-dom";
const Nav = () => {
  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
      <div className="container-fluid">
        <a className="navbar-brand" href="#">
          MERN
        </a>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link to="/create" className="nav-link" href="#">
                Create Post
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/" className="nav-link" href="#">
                All Posts
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
