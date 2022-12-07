import { useQuery } from "@tanstack/react-query";
import { Link } from "react-router-dom";
import { CartItem } from "../../utils/types";
import Item from "./Item";
import { getCart } from "../../utils/routes";
import { formatPrice } from "../../utils/format";

function Cart() {
  const query = useQuery(["cart"], async () => await getCart());

  if (query.isLoading) {
    return <div>Loading...</div>;
  }
  if (query.isError) {
    return <div>Something went wrong</div>;
  }

  const cart = query.data.data;
  let total = 0;
  cart.forEach((item: CartItem) => {
    total += item.unit_price * item.quantity;
  });

  return (
    <div className="m-4">
      <h2 className="mb-4 text-center">Cart</h2>
      <div className="d-flex justify-content-center">
        {!cart.length ? (
          <div>
            <div className="fs-5 text-center">
              Your cart is empty! Browse our products to begin your wellness
              journey
            </div>
            <div className="d-flex justify-content-center my-3">
              <Link to="/shop" className="btn btn-primary">
                Shop Now
              </Link>
            </div>
          </div>
        ) : (
          <div className="col-8">
            <div>
              {cart.map((item: CartItem) => {
                return <Item item={item} key={item.product_sku} />;
              })}
            </div>
            <div className="d-flex justify-content-end my-3">
              <div>
                <div className="fs-3">Total: {formatPrice(total)}</div>
                <div className="d-flex justify-content-end fw-lighter">
                  Before taxes
                </div>
              </div>
            </div>
            <div className="d-flex justify-content-end">
              <Link to="/shop" className="btn btn-outline-secondary mx-2">
                Continue shopping
              </Link>
              <Link to="/checkout" className="btn btn-primary">
                Checkout
              </Link>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default Cart;
