import React, { useState } from "react";

import SignInModal from "./signInModal";
import RegisterModal from "./registerModal";

import { useAutoAnimate } from "@formkit/auto-animate/react";

const LoginModal = ({ isLogged, handlingLogIn }) => {
  const [activeLoginModal, setActiveLoginModal] = useState("SignIn");
  const [parent] = useAutoAnimate({ duration: 300 });
  return (
    <>
      {!isLogged ? (
        <div className="login-modal-container">
          <div
            className="modal fade"
            id="loginPopupModal"
            tabIndex="-1"
            role="dialog"
            aria-labelledby="loginPopupModal"
            aria-hidden="true"
          >
            <div className="modal-dialog modal-dialog-centered" role="document">
              <div className="modal-content border-0">
                <div className="modal-body" ref={parent}>
                  {activeLoginModal === "SignIn" ? (
                    <SignInModal
                      handlingLogIn={handlingLogIn}
                      setActiveLoginModal={setActiveLoginModal}
                    />
                  ) : activeLoginModal === "RegisterModel" ? (
                    <RegisterModal setActiveLoginModal={setActiveLoginModal} />
                  ) : (
                    ""
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : (
        ""
      )}
    </>
  );
};

export default LoginModal;
