import React, { useState } from "react";

const AccountDetails = () => {
  const [fName, setFname] = useState("Ahmed");
  const [lName, setLname] = useState("Adel");
  const [displayName, setDisplayName] = useState("Ahmed");
  const [userEmail, setUserEmail] = useState("ahmedkhalil4774@gmail.com");
  const [userCurrentPass, setUserCurrentPass] = useState("");
  const [userNewPass, setUserNewPass] = useState("");
  const [userConNewPass, setUserConNewPass] = useState("");
  const [notMatchMsg, setNotMatchMsg] = useState("");

  const matchingPass = () => {
    if (
      userCurrentPass.length > 0 &&
      userNewPass.length > 0 &&
      userConNewPass.length > 0 &&
      userCurrentPass !== userNewPass &&
      userCurrentPass !== userConNewPass &&
      userNewPass === userConNewPass
    ) {
      setNotMatchMsg("Good :)");
    } else {
      setNotMatchMsg("Sorry Try Again :(");
    }
  };

  return (
    <div className="my-account-details-container mt-4 mt-md-0">
      <form action="#" onSubmit={(e) => e.preventDefault()}>
        <div className="d-flex flex-column mb-3">
          <label htmlFor="FN">First name *</label>
          <input
            type="text"
            id="FN"
            value={fName}
            onChange={(e) => setFname(e.target.value)}
          />
        </div>
        <div className="d-flex flex-column mb-3">
          <label htmlFor="LN">Last name *</label>
          <input
            type="text"
            id="LN"
            value={lName}
            onChange={(e) => setLname(e.target.value)}
          />
        </div>
        <div className="d-flex flex-column mb-3">
          <label htmlFor="DN">Display name *</label>
          <input
            type="text"
            id="DN"
            value={displayName}
            onChange={(e) => setDisplayName(e.target.value)}
          />
          <small>
            This will be how your name will be displayed in the account section
            and in reviews
          </small>
        </div>

        <div className="d-flex flex-column mb-3">
          <label htmlFor="UE">Email address *</label>
          <input
            type="email"
            id="UE"
            value={userEmail}
            onChange={(e) => setUserEmail(e.target.value)}
          />
        </div>
        <h2>Password change</h2>
        <div className="d-flex flex-column mb-3">
          <label htmlFor="UCP">
            Current password (leave blank to leave unchanged)
          </label>
          <input
            type="password"
            id="UCP"
            value={userCurrentPass}
            onChange={(e) => setUserCurrentPass(e.target.value)}
          />
          {notMatchMsg === "Good :)" ? (
            <small className="notmatchingPass text-success">
              {notMatchMsg}
            </small>
          ) : (
            <small className="notmatchingPass text-danger">{notMatchMsg}</small>
          )}
        </div>

        <div className="d-flex flex-column mb-3">
          <label htmlFor="UNP">
            New password (leave blank to leave unchanged)
          </label>
          <input
            type="password"
            id="UNP"
            value={userNewPass}
            onChange={(e) => setUserNewPass(e.target.value)}
          />
        </div>

        <div className="d-flex flex-column mb-3">
          <label htmlFor="UCNP">Confirm new password</label>
          <input
            type="password"
            id="UCNP"
            value={userConNewPass}
            onChange={(e) => setUserConNewPass(e.target.value)}
          />
        </div>
        <button type="submit" onClick={() => matchingPass()}>
          save changes
        </button>
      </form>
    </div>
  );
};

export default AccountDetails;
