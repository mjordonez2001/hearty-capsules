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

  if (query.isLoading) {
    return null;
  }

  if (query.isError) {
    return <div>Something went wrong</div>;
  }

  if (query.data) {
    return (
      <div>
        {query.data.data.map((supplement: supplement) => {
          return <div key={supplement.slug}>{supplement.name}</div>;
        })}
      </div>
    );
  }

  return <div>Supplement not found</div>;
}

export default Shop;
