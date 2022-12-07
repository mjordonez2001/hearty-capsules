import CheckoutForm from "./CheckoutForm";
import Summary from "./Summary";

function Checkout() {
  return (
    <div className="m-4">
      <h2 className="mb-4 text-center">Checkout</h2>
      <div className="d-flex justify-content-center">
        <div className="mx-5 col-4">
          <CheckoutForm />
        </div>
        <div className="col-3">
          <Summary />
        </div>
      </div>
    </div>
  );
}

export default Checkout;
