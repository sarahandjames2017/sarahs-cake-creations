"use client";

import { useEffect, useState } from "react";
import FacebookLoginButton from "./FacebookLoginButton";

type SessionUser = {
  id: string;
  name?: string;
};

export default function ClientNav() {
  const [user, setUser] = useState<SessionUser | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("/api/auth/me")
      .then((res) => (res.ok ? res.json() : null))
      .then((data) => {
        setUser(data?.user ?? null);
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, []);

  const logout = async () => {
    await fetch("/api/auth/logout", { method: "POST" });
    window.location.reload();
  };

  return (
    <nav className="site-nav">
      <div className="nav-spacer" />

      {/* Center links */}
      <div className="site-nav-links">
        <a href="/">Home</a>
        <a href="/gallery">Gallery</a>
        <a href="/about">About</a>
        <a href="/reviews">Reviews</a>
        <a href="/contact">Contact</a>
      </div>

      {/* Right side */}
      <div className="login-area">
        {!loading && user ? (
          <>
            <span style={{ marginRight: "10px", fontWeight: "bold" }}>
              Logged in as {user.name || "User"}
            </span>
            <button className="fb-login-btn" onClick={logout}>
              Logout
            </button>
          </>
        ) : (
          <FacebookLoginButton />
        )}
      </div>
    </nav>
  );
}
