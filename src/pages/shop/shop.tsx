import { axiosClient } from "../../utils/axios";
import { useQuery } from "@tanstack/react-query";

async function listSupplements() {
  return await axiosClient.get("/supplements");
}

type supplement = {
  name: string;
  slug: string;
  category: string;
  description: string;
  photo_url: string;
  unit_price: number;
  benefits: string[];
};

function Shop() {
  const query = useQuery(["supplements"], async () => await listSupplements());

  return (
    <div>
      {query.data?.data.map((supplement: supplement) => {
        return <div key={supplement.slug}>{supplement.name}</div>;
      })}
    </div>
  );
}

export default Shop;
