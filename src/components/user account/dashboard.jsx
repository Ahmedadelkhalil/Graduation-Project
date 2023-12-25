import React from "react";

const Dashboard = ({ logeOut, setActive }) => {
  return (
    <div className="dashboard-container mt-4 mt-md-0">
      <p className="mb-4 dashboard-main-title">
        Hello <span className="userName">Ahmed</span> ( not{" "}
        <span className="userName">Ahmed</span> ?{" "}
        <span onClick={logeOut} className="l-out">
          log out{" "}
        </span>
        )
      </p>
      <p className="m-0 dashboard-info">
        From your account dashboard you can view your{" "}
        <span onClick={() => setActive("Orders")}>recent orders</span> , manage
        your{" "}
        <span onClick={() => setActive("Addresses")}>
          shipping and billing addresses
        </span>
        ,{" "}
        <span onClick={() => setActive("Account details")}>
          and edit your password & account details .
        </span>
      </p>
    </div>
  );
};

export default Dashboard;
