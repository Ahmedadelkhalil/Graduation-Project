import React from "react";
import { NavLink } from "react-router-dom";

const Orders = () => {
  return (
    <div className="my-account-order-sec-container mt-4 mt-md-0">
      <table className="w-100">
        <tr>
          <th>Order</th>
          <th>Date</th>
          <th>Status</th>
          <th>Total</th>
          <th>Actions</th>
        </tr>
        <tr>
          <td>#1357</td>
          <td>Nov 22, 2023</td>
          <td>Processing</td>
          <td>$1025.00 for 3 items</td>
          <td>
            <NavLink to="#">
              <button>View</button>
            </NavLink>
          </td>
        </tr>
        <tr>
          <td>#2468</td>
          <td>Nov 23, 2023</td>
          <td>Completed</td>
          <td>$2500.00 for 5 items</td>
          <td>
            <NavLink to="#">
              <button>View</button>
            </NavLink>
          </td>
        </tr>
        <tr>
          <td>#2366</td>
          <td>Nov 24, 2023</td>
          <td>Completed</td>
          <td>$280.00 for 1 item</td>
          <td>
            <NavLink to="#">
              <button>View</button>
            </NavLink>
          </td>
        </tr>
      </table>
    </div>
  );
};

export default Orders;
