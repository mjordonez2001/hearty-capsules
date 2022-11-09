import { useEffect, useState } from "react";

function Shop() {
  const [loading, setLoading] = useState(false);
  const [supplements, setSupplements] = useState([]);
  const [error, setError] = useState(null);

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

  if (error) {
    return <div>it failed</div>;
  }

  return <div>Shop</div>;
}

export default Shop;
