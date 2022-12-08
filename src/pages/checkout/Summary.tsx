import { formatPrice } from "../../utils/format";
import { CartItem } from "../../utils/types";

type Props = {
  cart: CartItem[];
  isSubmitting: boolean;
  subTotal: number;
  taxAmount: number;
  total: number;
};

function Summary({ cart, subTotal, taxAmount, total, isSubmitting }: Props) {
  return (
    <div className="card">
      <div className="card-body">
        <h3 className="mx-2 card-title">Summary</h3>
        <hr />
        <div className="card-text">
          <div>
            {cart.map((item) => {
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
              <div>{formatPrice(subTotal, true)}</div>
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
              <div>{taxAmount ? formatPrice(taxAmount, true) : "-"}</div>
            </div>
          </div>
          <hr />
        </div>

        <div className="m-2 my-3 fs-3 d-flex justify-content-between">
          <div>Total</div>
          <div>{formatPrice(total, true)}</div>
        </div>
        <div className="d-flex justify-content-center">
          <button
            className="btn btn-primary"
            type="submit"
            disabled={isSubmitting}
          >
            {isSubmitting ? "Loading..." : "Place Order"}
          </button>
        </div>
      </div>
    </div>
  );
}

export default Summary;
