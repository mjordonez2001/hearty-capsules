import { useEffect, useState } from "react";

// src/services/http.ts
export const axiosClient = axios.create({
  baseUrl,
  ...
})

// src/domains/supplements/api.ts
async function getSupplementById(id: string) {
  return axiosClient.get(`/supplements/${id}`)
}

// 500 => "Sorry, it broke"
//   show It Broke at the current url
// 404 => "Not found"
//   show a 404 page at the current url OR redirect to `/not-found`
// 403 => "Forbidden, you don't have permission to do that"
//   show a descriptive permission/access control error message inline
// 401 => "Unauthorized, you need to be logged in to do that"
//   if the user has a session, log them out (get them to reauthenticate)

function Supplement() {
  return <div>Supplement</div>;
  // const params = useParams();
  // const query = useQuery(['supplement', params.id], () => getSupplementById(params.id))

  // if (query.isLoading) {
  //   return <Spinner />
  // }

  // if (query.isError) {
  //   return <ItBroke />
  // }

  // if (query.data) {
  //   return <Supplement supplement={query.data} />
  // }

  // return <SupplementNotFound />
}

export default Supplement;
