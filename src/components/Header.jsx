import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { logoutUser } from "../features/user/userSlice";

const Header = () => {

  const { user } = useSelector((state) => state.users);
  const dispatch = useDispatch();

  const handleLogout = () => {
    dispatch(logoutUser());
    localStorage.removeItem('user');
  }

  return (
    <>
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">
            EMS
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="/">
                  Home
                </Link>
              </li>
              <li className="nav-item dropdown">
                <Link
                  className="nav-link dropdown-toggle"
                  to="#"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Employee
                </Link>
                <ul className="dropdown-menu">
                  <li>
                    <Link className="dropdown-item" to="/add-employee">
                      Add Employee
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" to="/view-employee">
                      View Employee
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" to="/add-task">
                      Add Task
                    </Link>
                  </li>
                  <li>
                    <button type="button" onClick={handleLogout} className="dropdown-item">
                      Logout
                    </button>
                  </li>
                </ul>
              </li>
            </ul>
            <form className="d-flex" role="search">
              <input
                className="form-control me-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
              />
              <button className="btn btn-outline-success" type="submit">
                Search
              </button>
            </form>
            <strong className="ms-3">
              Hello, {user.fname}
            </strong>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Header;
