// src/api/api.js
const API_URL = import.meta.env.VITE_API_URL || "http://localhost:5000/api";

// Generic request wrapper
async function request(endpoint, method = "GET", body) {
  const config = {
    method,
    headers: { "Content-Type": "application/json" },
  };
  if (body) config.body = JSON.stringify(body);

  const res = await fetch(`${API_URL}${endpoint}`, config);
  const data = await res.json();

  if (!res.ok) throw new Error(data.message || "API Error");

  return data;
}

// API methods
export const api = {
  signup: (userData) => request("/auth/register", "POST", userData),
  login: (credentials) => request("/auth/login", "POST", credentials),
};
