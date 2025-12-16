import Navbar from "../../../components/layout/Navbar.jsx";
import Footer from "../../../components/layout/Footer.jsx";
import { useNavigate, Link } from "react-router-dom";
import { useState } from "react";
import { toast } from "react-hot-toast";
import { useAuthStore } from "../store.js";
import { api } from "../../../api/api.js";
import Card from "../../../components/ui/Card.jsx";
import Button from "../../../components/ui/Button.jsx";
import Input from "../../../components/ui/Input.jsx";

export default function SignIn() {
  const nav = useNavigate();
  const login = useAuthStore((s) => s.login);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  async function onSubmit(e) {
    e.preventDefault();
    setLoading(true);
    try {
      // ✅ Use the helper method defined in api.js
      const res = await api.login({ email, password });

      // res already contains { token, user } from backend
      login({ user: res.user, token: res.token });

      toast.success("Signed in successfully");
      nav("/courses");
    } catch (err) {
      toast.error(err.message || "Sign in failed");
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="min-h-screen bg-gray-50 text-gray-900">
      <Navbar />
      <main className="mx-auto max-w-md px-4 py-10 md:px-6">
        <Card>
          <h1 className="mb-4 text-2xl font-bold">Sign In</h1>
          <form onSubmit={onSubmit} className="space-y-3">
            <div>
              <label className="text-sm">Email Address</label>
              <Input
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                type="email"
                required
              />
            </div>
            <div>
              <label className="text-sm">Password</label>
              <Input
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                type="password"
                required
              />
            </div>
            <Button className="w-full" disabled={loading}>
              {loading ? "Signing in…" : "Sign In"}
            </Button>
            <p className="mt-3 text-center text-sm text-gray-600">
              Don’t have an account?{" "}
              <Link to="/signup" className="text-emerald-700">
                Create one
              </Link>
            </p>
          </form>
        </Card>
      </main>
      <Footer />
    </div>
  );
}
