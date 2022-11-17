import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";

async function prepare() {
  const { worker } = await import("./mocks/browser");

  await worker.start({
    onUnhandledRequest: "bypass",
  });

  ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
    <React.StrictMode>
      <App />
    </React.StrictMode>
  );
}

prepare().catch(console.error);
