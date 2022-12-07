import { getCart } from "../../utils/routes";
import { useQuery } from "@tanstack/react-query";
import { CartItem } from "../../utils/types";
import { findTotal, formatPrice } from "../../utils/format";

function Summary() {
  const query = useQuery(["cart"], async () => await getCart());

  if (query.isLoading) {
    return <div>Loading...</div>;
  }
  if (query.isError) {
    return <div>Something went wrong</div>;
  }

  const cart = query.data.data;
  const subtotal = findTotal(cart);
  const tax = subtotal * 0.07;
  const total = subtotal + tax;

  return (
    <div className="card">
      <div className="card-body">
        <h3 className="card-title">Summary</h3>
        <hr />
        <div className="card-text">
          <div>
            {cart.map((item: CartItem) => {
              return (
                <div
                  key={item.product_sku}
                  className="d-flex justify-content-between m-2 fw-semibold"
                >
                  <div>
                    {item.product_name} x {item.quantity}
                  </div>
                  <div>
                    {formatPrice(item.quantity * item.unit_price, true)}
                  </div>
                </div>
              );
            })}
            <div className="m-2 mt-4 d-flex justify-content-between">
              <div className="fs-5">Subtotal</div>
              <div>{formatPrice(subtotal, true)}</div>
            </div>
          </div>

          <hr />
          <div>
            <div className="m-2 d-flex justify-content-between">
              <div>Shipping</div>
              <div>Free</div>
            </div>
            <div className="m-2 d-flex justify-content-between">
              <div>Taxes</div>
              <div>{formatPrice(tax, true)}</div>
            </div>
          </div>
          <hr />
        </div>

        <div className="m-2 my-3 fs-3 d-flex justify-content-between">
          <div>Total</div>
          <div>{formatPrice(total, true)}</div>
        </div>
        <div className="d-flex justify-content-center">
          <button className="btn btn-primary">Place Order</button>
        </div>
      </div>
    </div>
  );
}

export default Summary;
