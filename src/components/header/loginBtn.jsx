import React from "react";
import LoginImg from "../../assets/icons/person-icon.svg";
import { useNavigate } from "react-router-dom";

const Login = ({ isLogged }) => {
  const navigate = useNavigate();
  const handleNavigate = (e) => {
    if (isLogged) {
      e.preventDefault();
      navigate("/my-account");
    }
  };
  return (
    <button
      className="btn text-dark border-0 p-0"
      data-bs-target={isLogged ? "" : "#loginPopupModal"}
      data-bs-toggle={isLogged ? "" : "modal"}
      onClick={handleNavigate}
    >
      <img src={LoginImg} alt="Login-Icon" />
    </button>
  );
};

export default Login;
