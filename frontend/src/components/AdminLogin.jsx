import { useState } from "react";
import api from "../api/axios";

export default function AdminLogin({ onLoginAsAdmin, onEnterAsUser }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const res = await api.post("/auth/login", { email, password });
      localStorage.setItem("token", res.data.token);
      setError("");
      onLoginAsAdmin(res.data.token);
    } catch (err) {
      setError("Invalid credentials");
    }
  };
  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-blue-100 to-indigo-200">
      <form
        onSubmit={handleLogin}
        className="bg-white p-6 rounded-lg shadow-md w-full max-w-md space-y-4"
      >
        <h2 className="text-xl font-bold text-center">Admin Login</h2>

        {error && <p className="text-red-500 text-sm">{error}</p>}

        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full p-2 border rounded"
        />

        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="w-full p-2 border rounded"
        />

        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700"
        >
          Login as Admin
        </button>

        <div className="text-center mt-4">
          <button
            type="button"
            onClick={onEnterAsUser}
            className="text-blue-600 underline hover:text-blue-800"
          >
            Continue as User (View Only)
          </button>
        </div>
      </form>
    </div>
  );
}
