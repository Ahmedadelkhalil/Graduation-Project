import React, { useState } from "react";

// Font Awesome
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faEyeSlash } from "@fortawesome/free-regular-svg-icons";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import { NavLink } from "react-router-dom";

const RegisterModal = ({ setActiveLoginModal }) => {
  const [userNameOrEmail, setUserNameOrEmail] = useState("");
  const [userPassword, setUserPassword] = useState("");
  const [showPass, setShowPass] = useState(false);
  const [msg, setMsg] = useState("");
  const [error, setError] = useState("");
  return (
    <div className="registerModal-container">
      <button
        type="button"
        data-bs-dismiss="modal"
        className="register-closeBtn"
      >
        <FontAwesomeIcon icon={faXmark} />
      </button>
      <div className="main-register-content">
        <h2>REGISTER</h2>
        <form action="#" onSubmit={(e) => e.preventDefault()}>
          {error.length > 0 ? (
            <p className="text-center text-danger fw-semibold">{error}</p>
          ) : (
            ""
          )}
          <div>
            <input
              type="email"
              name="user-name-or-email"
              id="user-name-or-email"
              value={userNameOrEmail}
              className="mb-3"
              onChange={(e) => setUserNameOrEmail(e.target.value)}
              placeholder="Username or Email"
              required
              minLength={10}
              onBlur={() => {
                let url = "http://localhost/react/useremail.php";
                let headers = {
                  "Content-Type": "application/json",
                  Accept: "application/json",
                };
                let data = {
                  userNameOrEmail: userNameOrEmail,
                };
                let body = JSON.stringify(data);

                fetch(url, {
                  method: "POST",
                  headers: headers,
                  body: body,
                })
                  .then((response) => response.json())
                  .then((data) => {
                    setError(data[0].result);
                  })
                  .catch((err) => {
                    setError(err);
                    console.log(err);
                  });
              }}
            />
          </div>
          <div className="position-relative">
            <input
              type={`${showPass ? "text" : "password"}`}
              name="user-password"
              id="user-password"
              value={userPassword}
              className="mb-3"
              onChange={(e) => setUserPassword(e.target.value)}
              placeholder="Password"
              required
              minLength={8}
            />
            <span
              className="pass-eye position-absolute"
              onClick={() => {
                setShowPass(!showPass);
              }}
            >
              {showPass ? (
                <FontAwesomeIcon icon={faEye} />
              ) : (
                <FontAwesomeIcon icon={faEyeSlash} />
              )}
            </span>
          </div>
          {msg.length > 0 ? (
            <p className="text-center fw-semibold text-success">{msg}</p>
          ) : (
            ""
          )}
          <div className="register-btns-sec d-flex flex-column mt-4">
            <button
              onClick={() => {
                if (userNameOrEmail.length > 9 && userPassword.length > 7) {
                  let url = "http://localhost/react/registration.php";
                  let headers = {
                    Accept: "application/json",
                    "Content-Type": "application/json",
                  };
                  let data = {
                    userNameOrEmail: userNameOrEmail,
                    userPassword: userPassword,
                  };
                  let body = JSON.stringify(data);

                  fetch(url, {
                    method: "POST",
                    headers: headers,
                    body: body,
                  })
                    .then((response) => response.json())
                    .then((data) => {
                      setMsg(data[0].result);
                    })
                    .catch((err) => {
                      setError(err);
                      console.log(err);
                    });
                  setUserNameOrEmail("");
                  setUserPassword("");
                } else {
                  setError("All Fields Are Required !");
                }
              }}
              className="mb-3"
              type="submit"
            >
              <NavLink>REGISTER</NavLink>
            </button>
            <button type="button" onClick={() => setActiveLoginModal("SignIn")}>
              <NavLink>ALREADY HAVE AN ACCOUNT</NavLink>
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default RegisterModal;
