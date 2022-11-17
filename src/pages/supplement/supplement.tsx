import { axiosClient } from "../../utils/axios";
import { useParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";

async function getSupplement(slug: string) {
  return await axiosClient.get(`/supplement/${slug}`);
}

function Supplement() {
  const params = useParams();

  const query = useQuery(
    ["supplement", params.slug],
    async () => await getSupplement(params.slug ?? "")
  );

  return <div>{query.data?.data.name}</div>;
}

export default Supplement;
