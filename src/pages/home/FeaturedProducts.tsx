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
      <h3>Featured Products</h3>
      <div>
        Explore our curated selection of vitamins, minerals, herbs, and
        speciality products.
      </div>
      <div className="d-flex justify-content-center m-2">
        {featured.map((supplement: supplementProps) => {
          return (
            <div key={supplement.slug} className="m-2 col-2">
              <Featured
                name={supplement.name}
                slug={supplement.slug}
                description={supplement.description}
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
