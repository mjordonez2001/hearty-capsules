import { useQuery } from "@tanstack/react-query";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { findTotal } from "../../utils/format";
import { getCart } from "../../utils/routes";
import CheckoutForm from "./CheckoutForm";
import Summary from "./Summary";
import { useCreateOrder } from "./useCreateOrder";

function Checkout() {
  const navigate = useNavigate();

  const {
    error,
    isLoading,
    mutate: createOrder,
  } = useCreateOrder({
    onSuccess: () => {
      navigate("/order-confirmation");
    },
  });

  const query = useQuery(["cart"], async () => await getCart());
  const [state, setState] = useState("");

  if (query.isLoading) {
    return <div>Loading...</div>;
  }
  if (query.isError) {
    return <div>Something went wrong</div>;
  }

  const cart = query.data.data;
  const { subTotal, taxAmount, total } = findTotal(cart, state);

  return (
    <div className="m-4">
      <h2 className="mb-4 text-center">Checkout</h2>
      {!!error && (
        <div className="alert alert-danger" role="alert">
          Uh oh, something went wrong!
        </div>
      )}
      <form
        className="d-flex justify-content-center"
        onSubmit={(event) => {
          event.preventDefault();
          const data = Object.fromEntries(new FormData(event.currentTarget));

          createOrder({
            cart,
            name: `${data.first_name as string} ${data.last_name as string}`,
            total,
          });
        }}
      >
        <div className="mx-5 col-4">
          <CheckoutForm
            onStateChanged={(event) => {
              setState(event.currentTarget.value);
            }}
          />
        </div>

        <div className="col-3">
          <Summary
            cart={cart}
            subTotal={subTotal}
            taxAmount={taxAmount}
            total={total}
            isSubmitting={isLoading}
          />
        </div>
      </form>
    </div>
  );
}

export default Checkout;
