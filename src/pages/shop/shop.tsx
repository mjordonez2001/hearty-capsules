import { axiosClient } from "../../utils/axios";
import { useQuery } from "@tanstack/react-query";
import Supplement, { supplementProps } from "./Supplement";

async function listSupplements() {
  return await axiosClient.get("/supplements");
}

function Shop() {
  const query = useQuery(["supplements"], async () => await listSupplements());

  return (
    <div className="d-flex row justify-content-center m-5">
      {query.data?.data.map((supplement: supplementProps) => {
        return (
          <div key={supplement.slug} className="my-4 col-8 col-md-4 col-lg-3">
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
  );
}

export default Shop;
