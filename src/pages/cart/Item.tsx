import { useEffect, useState } from "react";
import { formatPrice } from "../../utils/format";
import { CartItem } from "../../utils/types";
import { SlArrowUp, SlArrowDown } from "react-icons/sl";
import { useQueryClient } from "@tanstack/react-query";
import { useUpdateCart } from "./useUpdateCart";

type ItemProps = {
  item: CartItem;
};

function Item({ item }: ItemProps) {
  const [quantity, setQuantity] = useState(item.quantity);
  const queryClient = useQueryClient();

  const { error: updateItemError, mutate: updateItem } = useUpdateCart(
    {
      ...item,
      quantity,
    },
    {
      onSuccess: () => {
        queryClient
          .invalidateQueries({ queryKey: ["cart"] })
          .catch(console.error);
      },
    }
  );

  useEffect(() => {
    updateItem();
  }, [quantity]);

  return (
    <div className="d-flex m-3 justify-content-betweens align-items-center">
      <img
        src={item.product_img}
        className="col-3"
        alt={`Photo of ${item.product_name} supplement`}
      />
      <div className="fs-5">{item.product_name}</div>

      <div className="d-flex justify-content-center">
        <div className="input-group input-group-sm">
          <span className="input-group-text">Qty: {quantity}</span>

          <button
            className="btn btn-outline-secondary d-flex align-items-center"
            disabled={quantity < 2}
            onClick={() =>
              setQuantity((currentQuantity) => currentQuantity - 1)
            }
          >
            <SlArrowDown />
          </button>
          <button
            className="btn btn-outline-secondary d-flex align-items-center"
            onClick={() =>
              setQuantity((currentQuantity) => currentQuantity + 1)
            }
          >
            <SlArrowUp />
          </button>
        </div>
      </div>
      <div className="fs-4">{formatPrice(item.quantity * item.unit_price)}</div>
    </div>
  );
}

export default Item;
