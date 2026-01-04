"use client";

import { useEffect } from "react";

declare global {
  interface Window {
    FB: any;
    fbAsyncInit: () => void;
  }
}

export default function FacebookLoginButton() {
  useEffect(() => {
    if (typeof window === "undefined") return;
    if (window.FB) return;

    window.fbAsyncInit = function () {
      window.FB.init({
        appId: process.env.NEXT_PUBLIC_FACEBOOK_APP_ID!,
        cookie: true,
        xfbml: false,
        version: "v19.0",
      });
    };

    const script = document.createElement("script");
    script.src = "https://connect.facebook.net/en_US/sdk.js";
    script.async = true;
    script.defer = true;
    script.crossOrigin = "anonymous";
    document.body.appendChild(script);
  }, []);

  const login = () => {
    if (!window.FB) {
      console.error("Facebook SDK not loaded");
      return;
    }

    window.FB.login(
      async (response: any) => {
        if (!response.authResponse) return;

        await fetch("/api/auth/facebook", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            accessToken: response.authResponse.accessToken,
          }),
        });

        window.location.reload();
      },
      { scope: "public_profile,email" }
    );
  };

  return (
    <button className="fb-login-btn" onClick={login}>
      Login with Facebook
    </button>
  );
}
