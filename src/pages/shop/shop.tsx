import { useEffect, useState } from "react";

function Shop() {
  const [loading, setLoading] = useState(true);
  const [supplements, setSupplements] = useState([]);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    const fetchSupplements = async () => {
      setLoading(true);

      return await fetch("/api/supplements", {
        headers: {
          Accept: "application/json",
        },
      })
        .then(async (response) => {
          setLoading(false);
          return await response.json();
        })
        .catch((error) => {
          setLoading(false);
          setError(error);
        });
    };

    fetchSupplements().then((data) => setSupplements(data), console.error);
  }, []);

  if (loading) {
    return <div>loading...</div>;
  }

  if (error !== null) {
    return <div>it failed</div>;
  }

  console.log("we have the data", supplements);

  return <div>Shop</div>;
}

export default Shop;
