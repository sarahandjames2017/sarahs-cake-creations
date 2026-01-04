import "./globals.css";
import React from "react";
import ClientNav from "./components/ClientNav";

export const metadata = {
  title: "Sarah's Cake Creations",
  description: "Custom cakes for every occasion",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        {/* Header */}
        <header className="site-header">
          <img src="/images/logo.png" alt="Sarah's Cake Creations Logo" />
          <h1>Sarah&apos;s Cake Creations</h1>
        </header>

        {/* Client-side navigation */}
        <ClientNav />

        {/* Page content */}
        {children}

        {/* Footer */}
        <footer className="site-footer">
          © 2025 Sarah&apos;s Cake Creations. All Rights Reserved.
        </footer>
      </body>
    </html>
  );
}
