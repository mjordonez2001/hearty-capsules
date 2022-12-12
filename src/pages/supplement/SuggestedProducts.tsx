import { useQuery } from "@tanstack/react-query";
import { listSuggested } from "../../utils/routes";
import { supplementProps } from "../../utils/types";
import Supplement from "../shop/Supplement";

type SuggestedProductsProps = {
  current: string;
};

function SuggestedProducts({ current }: SuggestedProductsProps) {
  const query = useQuery(
    ["suggested", current],
    async () => await listSuggested(current)
  );

  if (query.isLoading) {
    return <div>Loading...</div>;
  }
  if (query.isError) {
    return <div>Something went wrong</div>;
  }

  const suggested = query.data.data;

  return (
    <div className="d-flex flex-column text-center m-5">
      <h3>You may also like</h3>
      <div className="d-flex justify-content-center">
        {suggested.map((supplement: supplementProps) => {
          return (
            <div key={supplement.slug} className="mb-5 mt-3 col-2 mx-3">
              <Supplement
                slug={supplement.slug}
                name={supplement.name}
                unit_price={supplement.unit_price}
                photo_url={supplement.photo_url}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default SuggestedProducts;
