import { useQuery } from "@tanstack/react-query";
import clsx from "clsx";
import { useState } from "react";
import { listSupplements } from "../../utils/routes";
import { supplementProps } from "../../utils/types";
import Supplement from "./Supplement";

function Shop() {
  const [category, setCategory] = useState("All");

  const query = useQuery(
    ["supplements", category],
    async () => await listSupplements(category)
  );

  if (query.isLoading) {
    return <div>Loading...</div>;
  }

  if (query.isError) {
    return <div>Something went wrong</div>;
  }

  return (
    <div className="d-flex row justify-content-center m-5">
      <ul className="nav nav-tabs">
        <li className="nav-item">
          <button
            onClick={() => setCategory("All")}
            className={clsx("nav-link", category === "All" && "active")}
          >
            All
          </button>
        </li>
        <li className="nav-item">
          <button
            onClick={() => setCategory("Vitamin")}
            className={clsx("nav-link", category === "Vitamin" && "active")}
          >
            Vitamins
          </button>
        </li>
        <li className="nav-item">
          <button
            onClick={() => setCategory("Mineral")}
            className={clsx("nav-link", category === "Mineral" && "active")}
          >
            Minerals
          </button>
        </li>
        <li className="nav-item">
          <button
            onClick={() => setCategory("Herb")}
            className={clsx("nav-link", category === "Herb" && "active")}
          >
            Herbs
          </button>
        </li>
        <li className="nav-item">
          <button
            onClick={() => setCategory("Specialty")}
            className={clsx("nav-link", category === "Specialty" && "active")}
          >
            Specialty
          </button>
        </li>
      </ul>

      {query.data.data.map((supplement: supplementProps) => {
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
