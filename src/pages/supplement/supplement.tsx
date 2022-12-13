import { useParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { useAddToCart } from "../cart/useAddToCart";
import { getSupplement } from "../../utils/routes";
import { useState } from "react";
import { SlArrowUp, SlArrowDown } from "react-icons/sl";
import { formatPrice } from "../../utils/format";
import * as bootstrap from "bootstrap";
import SuggestedProducts from "./SuggestedProducts";

function Supplement() {
  const params = useParams();

  const [quantity, setQuantity] = useState(1);

  const query = useQuery(
    ["supplement", params.slug],
    async () => await getSupplement(params.slug ?? "")
  );

  const {
    SuccessModal,
    error: addToCartError,
    isLoading,
    mutate: addItem,
  } = useAddToCart({
    onSuccess: () => {
      new bootstrap.Modal("#success").show();
    },
  });

  if (query.isLoading) {
    return <div>Loading...</div>;
  }
  if (query.isError) {
    return <div>Something went wrong</div>;
  }

  const supplement = query.data.data;

  return (
    <div>
      <div className="d-flex m-5 justify-content-evenly">
        <img
          src={supplement.photo_url}
          className="col-5"
          alt={`Photo of ${supplement.name} supplement`}
        />
        <div className="px-5 col-6">
          <div className="fst-italic">{supplement.category}</div>
          <h2>{supplement.name}</h2>
          <div>{supplement.description}</div>
          <div className="my-2">
            Good for:
            <ul>
              {supplement.benefits.map((benefit: string) => {
                return <li key={benefit}>{benefit}</li>;
              })}
            </ul>
          </div>
          <div className="fs-3">{formatPrice(supplement.unit_price)}</div>

          <div className="my-2">
            <div className="input-group input-group-sm mb-2">
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
            <button
              type="button"
              className="btn btn-primary"
              onClick={() =>
                addItem({
                  product_name: supplement.name,
                  product_sku: supplement.sku,
                  unit_price: supplement.unit_price,
                  quantity,
                  product_img: supplement.photo_url,
                })
              }
              disabled={isLoading}
            >
              {isLoading ? "Loading..." : "Add to Cart"}
            </button>
            {!!addToCartError && (
              <div className="alert alert-danger" role="alert">
                Uh oh, something went wrong!
              </div>
            )}

            <SuccessModal />
          </div>
        </div>
      </div>

      <div>
        <SuggestedProducts current={supplement.slug} />
      </div>
    </div>
  );
}

export default Supplement;
