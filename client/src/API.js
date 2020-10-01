const API_URL = "https://travel-mern-rss88.herokuapp.com";

export async function listEntries() {
  const response = await fetch(
    "https://travel-mern-rss88.herokuapp.com/api/logs"
  );
  return response.json();
}

export async function createEntry(entry) {
  const response = await fetch(
    "https://travel-mern-rss88.herokuapp.com/api/logs",
    {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(entry),
    }
  );
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
