import { states } from "./states";

function CheckoutForm() {
  return (
    <form>
      <div className="fw-semibold fs-5">Shipping Details</div>
      <div className="d-flex my-3">
        <input
          type="text"
          className="form-control me-3"
          placeholder="First Name"
        />
        <input type="text" className="form-control" placeholder="Last Name" />
      </div>
      <input type="text" className="form-control" placeholder="Address 1" />
      <div className="d-flex my-3">
        <input
          type="text"
          className="form-control me-3"
          placeholder="Address 2"
        />
        <input type="text" className="form-control" placeholder="City" />
      </div>
      <div className="d-flex">
        <select className="form-select me-3">{states}</select>
        <input type="number" className="form-control" placeholder="Zip Code" />
      </div>

      <div className="fw-semibold fs-5 mt-4 mb-3">Payment Information</div>
      <input type="number" className="form-control" placeholder="Card Number" />
      <div className="d-flex my-3">
        <input
          type="number"
          className="form-control me-3"
          placeholder="Security Code"
        />
        <input type="number" className="form-control" placeholder="Zip Code" />
      </div>
    </form>
  );
}

export default CheckoutForm;
