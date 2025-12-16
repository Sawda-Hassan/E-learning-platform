import { useState } from "react";
import { useAuthStore } from "../store.js";
import { api } from "../../../api/api.js"; // import your api helper

export default function SignUp() {
  const login = useAuthStore((s) => s.login);
  const [loading, setLoading] = useState(false);
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  async function handleSubmit(e) {
    e.preventDefault();
    setLoading(true);
    setError("");

    try {
      // ✅ Use centralized api helper
      const data = await api.signup({ fullName, email, password });

      // login the user in the store
      login({ user: data.user, token: data.token });

      alert("Account created and logged in!");
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  }

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        minHeight: "100vh",
        background: "#f8f9fa",
      }}
    >
      <div
        style={{
          background: "#fff",
          padding: 32,
          borderRadius: 8,
          boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
          width: 400,
        }}
      >
        <h2 style={{ marginBottom: 24 }}>Create Account</h2>
        {error && <p style={{ color: "red", marginBottom: 16 }}>{error}</p>}
        <form onSubmit={handleSubmit}>
          <label style={{ display: "block", marginBottom: 8 }}>
            Full Name
            <input
              type="text"
              required
              value={fullName}
              onChange={(e) => setFullName(e.target.value)}
              style={{
                width: "100%",
                padding: 8,
                marginTop: 4,
                marginBottom: 16,
                borderRadius: 4,
                border: "1px solid #ccc",
              }}
            />
          </label>

          <label style={{ display: "block", marginBottom: 8 }}>
            Email Address
            <input
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              style={{
                width: "100%",
                padding: 8,
                marginTop: 4,
                marginBottom: 16,
                borderRadius: 4,
                border: "1px solid #ccc",
              }}
            />
          </label>

          <label style={{ display: "block", marginBottom: 8 }}>
            Password
            <input
              type="password"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              style={{
                width: "100%",
                padding: 8,
                marginTop: 4,
                marginBottom: 16,
                borderRadius: 4,
                border: "1px solid #ccc",
              }}
            />
          </label>

          <button
            type="submit"
            disabled={loading}
            style={{
              width: "100%",
              padding: 12,
              background: "#00b57b",
              color: "#fff",
              border: "none",
              borderRadius: 4,
              cursor: "pointer",
            }}
          >
            {loading ? "Creating..." : "Create Account"}
          </button>
        </form>
        <p style={{ marginTop: 16, textAlign: "center" }}>
          Already have an account? <a href="/signin">Sign In</a>
        </p>
      </div>
    </div>
  );
}
