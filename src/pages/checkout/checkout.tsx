import { states } from "./states";

function Checkout() {
  return (
    <div className="m-4">
      <h2 className="mb-4 text-center">Checkout</h2>
      <div className="d-flex justify-content-center">
        <div>
          <div>
            <form>
              Shipping details
              <div className="d-flex">
                <input
                  type="text"
                  className="form-control"
                  placeholder="First Name"
                />
                <input
                  type="text"
                  className="form-control"
                  placeholder="Last Name"
                />
              </div>
              <input
                type="text"
                className="form-control"
                placeholder="Address 1"
              />
              <div className="d-flex">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Address 2"
                />
                <input
                  type="text"
                  className="form-control"
                  placeholder="City"
                />
              </div>
              <div className="d-flex">
                <select className="form-select">{states}</select>
                <input
                  type="number"
                  className="form-control"
                  placeholder="Zip Code"
                />
              </div>
              Payment Information
              <input
                type="number"
                className="form-control"
                placeholder="Card Number"
              />
              <div className="d-flex">
                <input
                  type="number"
                  className="form-control"
                  placeholder="Security Code"
                />
                <input
                  type="number"
                  className="form-control"
                  placeholder="Zip Code"
                />
              </div>
            </form>
          </div>
        </div>
        <div>summary</div>
      </div>
    </div>
  );
}

export default Checkout;
