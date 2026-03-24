import React from "react";

const Home = () => {
  return (
    <>
      <div className="container">
        <div className="row justify-content-center mt-5">
          <div className="col-md-3">
            <div className="card" style={{ width: "18rem" }}>
              <div className="card-body">
                <h5 className="card-title">Employee</h5>
              </div>
            </div>
          </div>
          <div className="col-md-3">
            <div className="card" style={{ width: "18rem" }}>
              <div className="card-body">
                <h5 className="card-title">Task</h5>
              </div>
            </div>
          </div>
          <div className="col-md-3">
            <div className="card" style={{ width: "18rem" }}>
              <div className="card-body">
                <h5 className="card-title">Pending Task</h5>
              </div>
            </div>
          </div>
          <div className="col-md-3">
            <div className="card" style={{ width: "18rem" }}>
              <div className="card-body">
                <h5 className="card-title">Complete Task</h5>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
