import { useParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { addToCart } from "../cart/addToCart";
import { getSupplement } from "../../utils/routes";

function Supplement() {
  const params = useParams();
  const { isLoading, mutate: addItem } = addToCart();

  const query = useQuery(
    ["supplement", params.slug],
    async () => await getSupplement(params.slug ?? "")
  );

  if (query.isLoading) {
    return <div>Loading...</div>;
  }
  if (query.isError) {
    return <div>Something went wrong</div>;
  }

  return (
    <div className="d-flex m-5 justify-content-evenly">
      <img src={query.data?.data.photo_url} className="col-5" alt="..." />
      <div className="px-5 col-6">
        <div className="fst-italic">{query.data?.data.category}</div>
        <h2>{query.data?.data.name}</h2>
        <div>{query.data?.data.description}</div>
        <div className="my-2">
          Good for:
          <ul>
            {query.data?.data.benefits.map((benefit: string) => {
              return <li key={benefit}>{benefit}</li>;
            })}
          </ul>
        </div>
        <div className="fs-3">${query.data?.data.unit_price}</div>
        <button
          type="button"
          className="btn btn-primary my-2"
          onClick={() => addItem()}
        >
          {isLoading ? "Loading..." : "Add to Cart"}
        </button>
      </div>
    </div>
  );
}

export default Supplement;
