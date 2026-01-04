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

  useEffect(() => {
    if (window.FB) {
      setReady(true);
      return;
    }

    window.fbAsyncInit = function () {
      window.FB.init({
        appId: process.env.NEXT_PUBLIC_FACEBOOK_APP_ID,
        cookie: true,
        xfbml: false,
        version: "v19.0",
      });

      console.log("Facebook SDK ready");
      setReady(true);
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
      alert("Facebook SDK not loaded yet");
      return;
    }

    window.FB.login(
      (response: any) => {
        if (response.authResponse) {
          console.log("Logged in!", response);
        } else {
          console.log("Login cancelled");
        }
      },
      { scope: "public_profile,email" }
    );
  };

  return (
    <button
      className="fb-login-btn"
      onClick={login}
      disabled={!ready}
      style={{ opacity: ready ? 1 : 0.5 }}
    >
      Login with Facebook
    </button>
  );
}
