import { useQuery } from "@tanstack/react-query";
import { Link } from "react-router-dom";
import { CartItem } from "../../utils/types";
import Item from "./Item";
import { getCart } from "../../utils/routes";

function Cart() {
  const query = useQuery(["cart"], async () => await getCart());
  const cart = query.data?.data;

  return (
    <div className="m-5">
      <h2 className="mb-4 text-center">Cart</h2>
      <div className="d-flex justify-content-center">
        {!cart?.length ? (
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
          <div className="col-6">
            {cart.map((item: CartItem) => {
              return <Item item={item} key={item.product_sku} />;
            })}
          </div>
        )}
      </div>
    </div>
  );
}

export default Cart;
