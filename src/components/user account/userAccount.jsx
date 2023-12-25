import React, { useState } from "react";
import SectionHeader from "../global/sectionHeader";
import Dashboard from "./dashboard";
import Orders from "./orders";
import Addresses from "./addresses";
import AccountDetails from "./accountDetails";
import { useAutoAnimate } from "@formkit/auto-animate/react";

const UserAccount = ({ isLogged, logeOut }) => {
  const [active, setActive] = useState("Dashboard");
  const navLinks = [
    {
      title: "Dashboard",
      page: <Dashboard logeOut={logeOut} setActive={setActive} />,
    },
    {
      title: "Orders",
      page: <Orders />,
    },
    {
      title: "Addresses",
      page: <Addresses />,
    },
    {
      title: "Account details",
      page: <AccountDetails />,
    },
  ];
  const [parent] = useAutoAnimate({ duration: 400 });
  return (
    <>
      <SectionHeader page="My Account" pageLink="my-account" />
      {isLogged ? (
        <div className="my-account-container container-fluid row my-5 m-0">
          <div className="my-account-leftSide col-md-4 col-lg-4">
            <ul className="list-unstyled">
              {navLinks.map((nav, indx) => (
                <li
                  key={indx}
                  onClick={() => {
                    setActive(nav.title);
                  }}
                >
                  {nav.title}
                </li>
              ))}
              <li onClick={logeOut}>Logout</li>
            </ul>
          </div>
          <div className="my-account-rightSide col-md-8 col-lg-8">
            {navLinks.map((item, indx) => (
              <div key={indx} ref={parent}>
                {active === item.title ? item.page : ""}
              </div>
            ))}
          </div>
        </div>
      ) : (
        <p className="userAccount-sign-first-msg">
          Please Sign In First To Access Your Data ..
        </p>
      )}
    </>
  );
};

export default UserAccount;
