import { useEffect, useState } from "react";
import { listSupplements } from "../../utils/api";

function Shop() {
  const [supplements, setSupplements] = useState([]);
  const [supplementsError, setSupplementsError] = useState(null);

  useEffect(() => {
    const abortController = new AbortController();
    setSupplementsError(null);

    async function loadSupplements() {
      listSupplements(abortController.signal)
        .then(setSupplements)
        .catch(setSupplementsError);
    }

    loadSupplements();
    return () => abortController.abort();
  }, []);

  console.log(supplements);
  console.log(supplementsError);

  const allSupplements = supplements.map((supplement) => {
    console.log(supplement);
    return (
      <div key={supplement.id}>
        {supplement.name}:&nbsp;{supplement.description}
      </div>
    );
  });
  return <div>{allSupplements}</div>;
}

export default Shop;
