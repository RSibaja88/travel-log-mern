const API_URL = "http://localhost:1337";

export async function listEntries() {
  const response = await fetch(`${API_URL}/api/logs`);
  return response.json();
}

export async function createEntry(entry) {
  const apiKey = entry.apiKey;
  delete entry.apiKey;
  const response = await fetch(`${API_URL}/api/logs`, {
    method: "POST",
    headers: {
      "content-type": "application/json",
      "X-API-KEY": apiKey,
    },
    body: JSON.stringify(entry),
  });
  const json = await response.json();
  if (response.ok) {
    return json;
  }
  const error = new Error(json.message);
  error.response = json;
  throw error;
}

export async function deleteEntries(id) {
  const response = await fetch(`${API_URL}/api/logs/${id}`, {
    method: "DELETE",
  });
  return response.json();
}
