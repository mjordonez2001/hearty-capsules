import React from "react";
import { states } from "./states";

function CheckoutForm({
  onStateChanged,
}: {
  onStateChanged: (e: React.FormEvent<HTMLSelectElement>) => void;
}) {
  return (
    <>
      <div className="fw-semibold fs-5">Shipping Details</div>
      <div className="d-flex my-3">
        <input
          type="text"
          name="first_name"
          className="form-control me-3"
          placeholder="First Name"
        />
        <input
          type="text"
          className="form-control"
          name="last_name"
          placeholder="Last Name"
        />
      </div>
      <input
        type="text"
        name="address1"
        className="form-control"
        placeholder="Address 1"
      />
      <div className="d-flex my-3">
        <input
          type="text"
          name="address2"
          className="form-control me-3"
          placeholder="Address 2"
        />
        <input
          type="text"
          className="form-control"
          name="city"
          placeholder="City"
        />
      </div>
      <div className="d-flex">
        <select
          className="form-select me-3"
          name="state"
          onChange={onStateChanged}
        >
          {states}
        </select>
        <input
          type="number"
          name="zip_code"
          className="form-control"
          placeholder="Zip Code"
        />
      </div>

      <div className="fw-semibold fs-5 mt-4 mb-3">Payment Information</div>
      <input
        type="number"
        className="form-control"
        name="card_number"
        placeholder="Card Number"
      />
      <div className="d-flex my-3">
        <input
          type="number"
          name="security_code"
          className="form-control me-3"
          placeholder="Security Code"
        />
        <input
          type="number"
          className="form-control"
          name="billing_zip"
          placeholder="Zip Code"
        />
      </div>
    </>
  );
}

export default CheckoutForm;
