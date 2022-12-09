import { useMutation, useQueryClient } from "@tanstack/react-query";
import React from "react";
import { useNavigate } from "react-router-dom";
import { addCartItem } from "../../utils/routes";
import { CartItem } from "../../utils/types";

type Options = {
  onSuccess?: () => void;
};

export function useAddToCart(options?: Options) {
  const queryClient = useQueryClient();
  const navigate = useNavigate();

  const { data, error, isLoading, isSuccess, mutate } = useMutation(
    async (item: CartItem) => await addCartItem(item),
    {
      onSuccess: () => {
        if (options?.onSuccess) {
          options.onSuccess();
        }

        queryClient
          .invalidateQueries({ queryKey: ["cart"] })
          .catch(console.error);
      },
    }
  );

  const SuccessModal = React.useMemo(() => {
    const Modal = () => {
      return (
        <div id="success" className="modal fade">
          <div className="modal-dialog modal-dialog-centered">
            <div className="modal-content">
              <div className="modal-header">
                <h1 className="modal-title fs-5" id="exampleModalLabel">
                  Successfully added to cart!
                </h1>
                <button
                  type="button"
                  className="btn-close"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                ></button>
              </div>
              <div className="modal-footer">
                <button
                  type="button"
                  className="btn btn-secondary"
                  data-bs-dismiss="modal"
                  onClick={() => navigate("/cart")}
                >
                  View Cart
                </button>
                <button
                  type="button"
                  className="btn btn-primary"
                  data-bs-dismiss="modal"
                >
                  Continue shopping
                </button>
              </div>
            </div>
          </div>
        </div>
      );
    };
    return Modal;
  }, [navigate]);

  return { data, error, isLoading, isSuccess, mutate, SuccessModal };
}
