import { BrowserRouter } from "react-router-dom";
import Pages from "./pages/Pages";
import { QueryClientProvider, QueryClient } from "@tanstack/react-query";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 5 * 60 * 1000, // cache responses for 5 minutes
      refetchOnWindowFocus: false,
    },
  },
});

function App() {
  return (
    <BrowserRouter>
      <QueryClientProvider client={queryClient}>
        <Pages />
      </QueryClientProvider>
    </BrowserRouter>
  );
}

export default App;
