import { Link } from "react-router-dom";

function OrderConfirmation() {
  // TODO: generate a random tracking number

  return (
    <div className="d-flex flex-column text-center m-4">
      <h3>Congrats! Your order is confirmed</h3>
      <p className="m-4">Your tracking number is 9274890312833861327869</p>
      <div>
        <Link to="/shop" className="btn btn-primary purple-btn">
          Continue shopping
        </Link>
      </div>
    </div>
  );
}

export default OrderConfirmation;
