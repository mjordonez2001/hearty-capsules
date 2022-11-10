import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";

async function bootstrap() {
  // register msw (installs a service worker), only in development mode
  if (process.env.NODE_ENV === "development") {
    const { worker } = await import("./mocks/browser");
    await worker.start();
  }
}

await bootstrap().then(() => {
  ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
    <React.StrictMode>
      <App />
    </React.StrictMode>
  );
});
