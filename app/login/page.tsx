"use client";

import Link from "next/link";
import { useState } from "react";
import { supabase } from "@/app/lib/supabase";
import { useRouter } from "next/navigation";

export default function LoginPage() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  // ✅ NEW
  const [showPassword, setShowPassword] = useState(false);
  const [message, setMessage] = useState("");

  async function handleLogin() {
    setError("");
    setMessage("");

    const { error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });

    if (error) {
      setError(error.message);
    } else {
      router.push("/account");
    }
  }

  // ✅ NEW – forgot password
  async function handleForgotPassword() {
    setError("");
    setMessage("");

    if (!email) {
      setError("Please enter your email address first.");
      return;
    }

    const { error } = await supabase.auth.resetPasswordForEmail(email, {
      redirectTo: "https://www.sarahscakecreations.co.uk/reset-password",
    });

    if (error) {
      setError(error.message);
    } else {
      setMessage("Password reset email sent. Please check your inbox.");
    }
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
          background: "#fff3e6",
          padding: 40,
          borderRadius: 12,
          textAlign: "center",
        }}
      >
        <h1 style={{ marginBottom: 30 }}>Login</h1>

        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: 16,
            textAlign: "left",
          }}
        >
          <label>Email</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            style={{ padding: 10 }}
          />

          <label>Password</label>

          {/* ✅ PASSWORD + EYE */}
          <div style={{ position: "relative" }}>
            <input
              type={showPassword ? "text" : "password"}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              style={{ padding: 10, width: "100%" }}
            />

            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              style={{
                position: "absolute",
                right: 10,
                top: "50%",
                transform: "translateY(-50%)",
                background: "none",
                border: "none",
                cursor: "pointer",
                fontSize: 13,
              }}
            >
              {showPassword ? "Hide" : "Show"}
            </button>
          </div>

          {/* ✅ FORGOT PASSWORD */}
          <div style={{ textAlign: "right" }}>
            <button
              onClick={handleForgotPassword}
              style={{
                background: "none",
                border: "none",
                textDecoration: "underline",
                cursor: "pointer",
                fontSize: 14,
              }}
            >
              Forgot your password?
            </button>
          </div>

          {error && (
            <p style={{ color: "red", fontSize: 14 }}>{error}</p>
          )}

          {message && (
            <p style={{ color: "green", fontSize: 14 }}>{message}</p>
          )}

          <button
            onClick={handleLogin}
            style={{
              marginTop: 10,
              background: "#ff9abe",
              border: "none",
              padding: "14px",
              fontWeight: 800,
              cursor: "pointer",
            }}
          >
            SIGN IN
          </button>

          <Link href="/register" style={{ textAlign: "center" }}>
            <button
              style={{
                background: "transparent",
                border: "1px solid #ccc",
                padding: "12px",
                cursor: "pointer",
                width: "100%",
              }}
            >
              Create account
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}
