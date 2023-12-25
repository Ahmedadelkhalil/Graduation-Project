import React, { useState } from "react";
import { useAutoAnimate } from "@formkit/auto-animate/react";

const PaymentMethod = () => {
  const [parent] = useAutoAnimate();
  const [method, setMethod] = useState("Direct bank transfer");
  const MethodsToChoose = [
    {
      id: 0,
      method: "Direct bank transfer",
      methodDes:
        "Make your payment directly into our bank account. Please use your Order ID as the payment reference. Your order will not be shipped until the funds have cleared in our account.",
    },
    {
      id: 1,
      method: "Check payments",
      methodDes:
        "Please send a check to Store Name, Store Street, Store Town, Store State / County, Store Postcode.",
    },
    {
      id: 2,
      method: "Cash on delivery",
      methodDes: "Pay with cash upon delivery.",
    },
    {
      id: 3,
      method: "PayPal",
      methodDes:
        "Pay via PayPal; you can pay with your credit card if you don’t have a PayPal account.",
    },
  ];
  return (
    <div className="p-method-container">
      {MethodsToChoose.map((ele, indx) => (
        <div className="d-flex flex-column mb-2" ref={parent}>
          <div className="d-flex align-items-center mb-1">
            <input
              type="radio"
              id={indx}
              name="p-method"
              value={ele.method}
              onChange={(e) => setMethod(e.target.value)}
              checked={method === ele.method ? true : false}
            />
            <label htmlFor={indx} className="fw-semibold">
              {ele.method}
            </label>
          </div>
          {method === ele.method ? (
            <p className="m-0 method-des">{ele.methodDes}</p>
          ) : (
            ""
          )}
        </div>
      ))}
    </div>
  );
};

export default PaymentMethod;
