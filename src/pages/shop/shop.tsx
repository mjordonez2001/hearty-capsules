import { useEffect, useState } from "react";
import { axiosClient } from "../../utils/axios";

async function listSupplements() {
  return await axiosClient.get("/supplements");
}

function Shop() {
  const [supplements, setSupplements] = useState<
    Array<{ name: string; slug: string; category: string }>
  >([]);

  useEffect(() => {
    listSupplements()
      .then((response) => setSupplements(response.data))
      .catch(console.error);
  }, []);

  return (
    <div>
      {supplements.map((supplement) => {
        return <div key={supplement.slug}>{supplement.name}</div>;
      })}
    </div>
  );
}

export default Shop;
