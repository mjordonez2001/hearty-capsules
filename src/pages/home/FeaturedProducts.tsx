import { useQuery } from "@tanstack/react-query";
import { listFeatured } from "../../utils/routes";
import { supplementProps } from "../../utils/types";
import Featured from "./Featured";

function FeaturedProducts() {
  const query = useQuery(["featured"], async () => await listFeatured());

  if (query.isLoading) {
    return <div>Loading...</div>;
  }
  if (query.isError) {
    return <div>Something went wrong</div>;
  }

  const featured = query.data.data;

  return (
    <div className="d-flex flex-column text-center mt-5">
      <h4>Featured Products</h4>
      <div>
        Explore our curated selection of vitamins, minerals, herbs, and
        speciality products.
      </div>
      <div>
        {featured.map((supplement: supplementProps) => {
          return (
            <div key={supplement.slug} className="mb-5 mt-3 col-2 mx-3">
              <Featured
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

export default FeaturedProducts;
