"use client";

import { useState } from "react";
import { supabase } from "@/app/lib/supabase";
import { useRouter } from "next/navigation";

export default function ResetPasswordPage() {
  const router = useRouter();
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");

  async function handleReset() {
    setError("");
    setMessage("");

    const { error } = await supabase.auth.updateUser({
      password,
    });

    if (error) {
      setError(error.message);
      return;
    }

    setMessage("Password updated successfully. Redirecting to login...");
    setTimeout(() => router.push("/login"), 2000);
  }

  return (
    <div
      style={{
        minHeight: "60vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        background: "#fff6e8",
      }}
    >
      <div
        style={{
          width: 420,
          background: "white",
          padding: 40,
          borderRadius: 12,
          border: "1px solid #eee",
          textAlign: "center",
        }}
      >
        <h1 style={{ marginBottom: 20 }}>Reset Password</h1>

        <input
          type="password"
          placeholder="New password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          style={{
            width: "100%",
            padding: 12,
            marginBottom: 16,
          }}
        />

        {error && <p style={{ color: "red" }}>{error}</p>}
        {message && <p style={{ color: "green" }}>{message}</p>}

        <button
          onClick={handleReset}
          style={{
            width: "100%",
            padding: 14,
            background: "#ff9abe",
            border: "none",
            fontWeight: 800,
            cursor: "pointer",
          }}
        >
          UPDATE PASSWORD
        </button>
      </div>
    </div>
  );
}
