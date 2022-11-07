window.process = {
  env: {
    NODE_ENV: "development",
  },
};

const API_BASE_URL =
  process.env.REACT_APP_API_BASE_URL ?? "http://localhost:8000";

const headers = new Headers();
headers.append("Content-Type", "application/json");

async function fetchJson(url, options, onCancel) {
  try {
    const response = await fetch(url, options);

    if (response.status === 204) {
      return null;
    }

    const payload = await response.json();

    if (payload.error) {
      return await Promise.reject({ message: payload.error });
    }
    return payload.data;
  } catch (error) {
    if (error.name !== "AbortError") {
      console.error(error.stack);
      throw error;
    }
    return await Promise.resolve(onCancel);
  }
}

export async function listSupplements(signal) {
  console.log(`${API_BASE_URL}/supplements`);
  const url = new URL(`${API_BASE_URL}/supplements`);
  return await fetchJson(url, { headers, signal }, []);
}
