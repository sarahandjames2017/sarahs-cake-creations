"use client";

import { useEffect, useState } from "react";

declare global {
  interface Window {
    FB: any;
    fbAsyncInit: () => void;
  }
}

export default function FacebookLoginButton() {
  const [ready, setReady] = useState(false);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (typeof window !== "undefined" && window.FB) {
      setReady(true);
      return;
    }

    if (document.getElementById("facebook-jssdk")) return;

    window.fbAsyncInit = function () {
      window.FB.init({
        appId: process.env.NEXT_PUBLIC_FACEBOOK_APP_ID!,
        cookie: true,
        xfbml: false,
        version: "v19.0",
      });

      console.log("✅ Facebook SDK initialized");
      setReady(true);
    };

    const script = document.createElement("script");
    script.id = "facebook-jssdk";
    script.src = "https://connect.facebook.net/en_US/sdk.js";
    script.async = true;
    script.defer = true;
    document.body.appendChild(script);
  }, []);

  const login = () => {
    if (!ready || !window.FB) {
      console.error("❌ Facebook SDK not ready");
      return;
    }

    setLoading(true);

    window.FB.login(
      (response: any) => {
        if (!response.authResponse) {
          console.log("❌ Facebook login cancelled");
          setLoading(false);
          return;
        }

        // ✅ async work is wrapped safely
        (async () => {
          try {
            const res = await fetch("/api/auth/facebook", {
              method: "POST",
              headers: { "Content-Type": "application/json" },
              body: JSON.stringify({
                accessToken: response.authResponse.accessToken,
              }),
            });

            const data = await res.json();

            if (!res.ok) {
              alert(data.error || "Login failed");
              setLoading(false);
              return;
            }

            // ✅ SUCCESS
            window.location.reload();
          } catch (err) {
            console.error("❌ Network error", err);
            setLoading(false);
          }
        })();
      },
      { scope: "email,public_profile" }
    );
  };

  return (
    <button
      className="fb-login-btn"
      onClick={login}
      disabled={!ready || loading}
    >
      {loading ? "Logging in..." : "Login with Facebook"}
    </button>
  );
}
