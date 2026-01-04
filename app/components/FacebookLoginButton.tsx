"use client";

import { useEffect } from "react";

declare global {
  interface Window {
    FB: any;
  }
}

export default function FacebookLoginButton() {
  useEffect(() => {
    if (document.getElementById("facebook-jssdk")) return;

    const script = document.createElement("script");
    script.id = "facebook-jssdk";
    script.src = "https://connect.facebook.net/en_US/sdk.js";
    script.async = true;
    script.defer = true;
    script.crossOrigin = "anonymous";

    script.onload = () => {
      window.FB.init({
        appId: "940451454977117",
        cookie: true,
        xfbml: false,
        version: "v19.0",
      });
    };

    document.body.appendChild(script);
  }, []);

  const login = () => {
    window.FB.login(
      (response: any) => {
        if (response.authResponse) {
          console.log("Logged in with Facebook:", response);
        } else {
          console.log("Facebook login cancelled");
        }
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
