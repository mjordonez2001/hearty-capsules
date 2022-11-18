import { BrowserRouter } from "react-router-dom";
import Pages from "./pages/Pages";
import { QueryClientProvider, QueryClient } from "@tanstack/react-query";

function App() {
  const queryClient = new QueryClient();

  return (
    <BrowserRouter>
      <QueryClientProvider client={queryClient}>
        <Pages />
      </QueryClientProvider>
    </BrowserRouter>
  );
}

export default App;
