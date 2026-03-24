import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { getAllUser } from "../features/user/userSlice";

const View_Employee = () => {
  const list = useSelector((state) => state.users.users);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllUser());
  },[dispatch]);

  return (
    <>
      <div className="container">
        <div className="row justify-content-center mt-5">
          <div className="col-md-10">
            <table className="table table-bordered table-striped table-hover caption-top">
              <caption>
                <h2>Employee Details</h2>
              </caption>
              <thead>
                <tr>
                  <th>Sr. No</th>
                  <th>Employee Name</th>
                  <th>Email</th>
                  <th>Department</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {
                  list?.map((emp, index) => {
                  return (
                    <tr key={emp.id}>
                      <td>{index + 1}</td>
                      <td>{emp.fname + " " + emp.lname}</td>
                      <td>{emp.email}</td>
                      <td>{emp.department}</td>
                      <td>
                        {emp.isActive ? (
                          <button
                            type="button"
                            className="btn btn-danger me-2"
                          >
                            Deactive
                          </button>
                        ) : (
                          <button
                            type="button"
                            className="btn btn-success me-2"
                          >
                            Active
                          </button>
                        )}
                        <button type="button" className="btn btn-warning">
                          Change Details
                        </button>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  );
};

export default View_Employee;
