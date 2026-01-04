"use client";

import FacebookLoginButton from "./FacebookLoginButton";

export default function ClientNav() {
  return (
    <nav className="site-nav">
      <div className="nav-spacer"></div>

      <div className="site-nav-links">
        <a href="/">Home</a>
        <a href="/gallery">Gallery</a>
        <a href="/about">About</a>
        <a href="/reviews">Reviews</a>
        <a href="/contact">Contact</a>
      </div>

      <div className="login-area">
        <FacebookLoginButton />
      </div>
    </nav>
  );
}
