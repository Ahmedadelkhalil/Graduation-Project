import React from "react";

const Alert = React.forwardRef((props, ref) => {
  return (
    <div className="toast-container position-fixed top-0 end-0 p-3">
      <div
        ref={ref}
        className="toast"
        role="alert"
        aria-live="assertive"
        aria-atomic="true"
      >
        <div className="toast-header">
          <strong>Notification</strong>
          <div>
            <small className="fw-semibold">Just Now</small>
            <button
              type="button"
              class="ml-2 mb-1 close"
              data-bs-dismiss="toast"
              aria-label="Close"
            >
              X
            </button>
          </div>
        </div>
        <div className="toast-body bg-black text-white d-flex justify-content-between gap-2">
          <p className="mb-0">{props.msg}</p>
        </div>
      </div>
    </div>
  );
});

export default Alert;
