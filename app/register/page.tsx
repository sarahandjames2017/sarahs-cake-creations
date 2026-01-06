"use client";

import { useState } from "react";
import { supabase } from "@/app/lib/supabase";
import { useRouter } from "next/navigation";
import Link from "next/link";

export default function RegisterPage() {
  const router = useRouter();

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [error, setError] = useState("");
  const [success, setSuccess] = useState(false);

  async function handleRegister() {
    setError("");
    setSuccess(false);

    const { error } = await supabase.auth.signUp({
      email,
      password,
      options: {
        data: {
          first_name: firstName,
          last_name: lastName,
        },
      },
    });

    if (error) {
      setError(error.message);
      return;
    }

    // ✅ SHOW SUCCESS MESSAGE INSTEAD OF REDIRECT
    setSuccess(true);
  }

  return (
    <div
      style={{
        minHeight: "60vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        background: "#fff6e8",
        padding: "60px 0",
      }}
    >
      <div
        style={{
          width: 520,
          background: "white",
          padding: 46,
          borderRadius: 12,
          textAlign: "center",
          border: "1px solid #eee",
        }}
      >
        {!success ? (
          <>
            <h1 style={{ marginBottom: 30 }}>Create Account</h1>

            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: 16,
                textAlign: "left",
              }}
            >
              <label>First Name</label>
              <input
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
                style={{ padding: 10 }}
              />

              <label>Last Name</label>
              <input
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
                style={{ padding: 10 }}
              />

              <label>Email</label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                style={{ padding: 10 }}
              />

              <label>Password</label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                style={{ padding: 10 }}
              />

              {error && (
                <p style={{ color: "red", fontSize: 14 }}>{error}</p>
              )}

              <button
                onClick={handleRegister}
                style={{
                  marginTop: 10,
                  background: "#ff9abe",
                  border: "none",
                  padding: "14px",
                  fontWeight: 800,
                  cursor: "pointer",
                }}
              >
                CREATE
              </button>

              <div style={{ textAlign: "center", marginTop: 6 }}>
                <Link href="/login" style={{ textDecoration: "underline" }}>
                  Already have an account? Sign in
                </Link>
              </div>
            </div>
          </>
        ) : (
          /* ✅ SUCCESS STATE */
          <>
            <h1 style={{ marginBottom: 16 }}>🎉 Account Created!</h1>

            <p style={{ marginBottom: 20 }}>
              Your account has been created successfully.
            </p>

            <p style={{ marginBottom: 30, fontSize: 14 }}>
              Please check your email to confirm your account before logging in.
            </p>

            <button
              onClick={() => router.push("/login")}
              style={{
                background: "#ff9abe",
                border: "none",
                padding: "14px 24px",
                fontWeight: 800,
                cursor: "pointer",
              }}
            >
              GO TO LOGIN
            </button>
          </>
        )}
      </div>
    </div>
  );
}
