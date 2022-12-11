import { useQuery } from "@tanstack/react-query";
import { listSuggested } from "../../utils/routes";

type SuggestedProductsProps = {
  current: string;
};

function SuggestedProducts({ current }: SuggestedProductsProps) {
  const query = useQuery(
    ["suggested", current],
    async () => await listSuggested(current)
  );

  console.log(query.data?.data);
  return (
    <div>
      <div>Suggested Products</div>
    </div>
  );
}

export default SuggestedProducts;
