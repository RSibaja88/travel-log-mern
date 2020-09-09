const API_URL = "http://localhost:1337";

export async function listEntries() {
  const response = await fetch(`${API_URL}/api/logs`);
  return response.json();
}

export async function createEntry(entry) {
  const response = await fetch(`${API_URL}/api/logs`, {
    method: "POST",
    headers: {
      "content-type": "application/json",
    },
    body: JSON.stringify(entry),
  });
  return response.json();
}

export async function deleteEntries(id) {
  const response = await fetch(`${API_URL}/api/logs/${id}`, {
    method: "DELETE",
  });
  return response.json();
}
