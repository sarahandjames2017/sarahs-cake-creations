import "./globals.css";
import ClientNav from "./components/ClientNav";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <header className="site-header">
          <img src="/images/logo.png" alt="Sarah's Cake Creations Logo" />
          <h1>Sarah&apos;s Cake Creations</h1>
        </header>

        {/* ✅ NAV ONLY HERE */}
        <ClientNav />

        {children}

        <footer className="site-footer">
          © 2025 Sarah&apos;s Cake Creations. All Rights Reserved.
        </footer>
      </body>
    </html>
  );
}
