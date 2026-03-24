import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { createUser, getAllUser } from "../features/user/userSlice";

const Add_Employee = () => {
  const [user, setUser] = useState({});
  const dispatch = useDispatch();
  const { editData } = useSelector(state => state.users);
  const navigator = useNavigate();

  const handleChange = (e) => {
    const { name, value} = e.target;
    setUser({...user , [name] : value});
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(createUser(user));
    console.log(user);
    // navigator('/view-employee');
    setUser({});
  }
  
  return (
    <>
      <div className="container">
        <div className="row justify-content-center mt-5">
          <div className="col-md-6">
            <form method="post" onSubmit={handleSubmit}>
              <h2 className="mb-3">Add Employee</h2>
              <div className="mb-3">
                <label htmlFor="fname" className="form-label">
                  First Name
                </label>
                <input
                  type="text"
                  name="fname"
                  className="form-control"
                  onChange={handleChange}
                  value={user.fname || ""}
                  id="fname"
                />
              </div>
              <div className="mb-3">
                <label htmlFor="lname" className="form-label">
                  Last Name
                </label>
                <input
                  type="text"
                  name="lname"
                  className="form-control"
                  onChange={handleChange}
                  value={user.lname || ""}
                  id="lname"
                />
              </div>
              <div className="mb-3">
                <label htmlFor="email" className="form-label">
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  className="form-control"
                  onChange={handleChange}
                  value={user.email || ""}
                  id="email"
                />
              </div>
              <div className="mb-3">
                <label htmlFor="password" className="form-label">
                  Password
                </label>
                <input
                  type="password"
                  name="password"
                  className="form-control"
                  onChange={handleChange}
                  value={user.password || ""}
                  id="password"
                />
              </div>
              <div className="mb-3">
                <label htmlFor="department" className="form-label">
                  Department
                </label>
                <input
                  type="text"
                  name="department"
                  className="form-control"
                  onChange={handleChange}
                  value={user.department || ""}
                  id="department"
                />
              </div>
              <div className="mb-3">
                <label htmlFor="salary" className="form-label">
                  Salary
                </label>
                <input
                  type="number"
                  name="salary"
                  className="form-control"
                  onChange={handleChange}
                  value={user.salary || ""}
                  id="salary"
                />
              </div>
              <button type="submit" className="btn btn-primary">
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Add_Employee;
