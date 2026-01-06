import "./globals.css";
import Header from "./components/Header";
import Providers from "./providers";
import MiniCart from "./components/MiniCart";

export const metadata = {
  title: "Sarah's Cake Creations",
  description: "Freshly baked treats made with love",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        {/* ✅ CLIENT PROVIDERS WRAPPER */}
        <Providers>
          {/* TOP RESTOCK BAR */}
          <div className="restockBar">
            Website restocked every Saturday at 12:00 & Tuesday at 18:00
          </div>

          {/* HEADER */}
          <Header />

          {/* MAIN */}
          <main>{children}</main>

          {/* FOOTER */}
          <footer className="siteFooter">
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                gap: 28,
                padding: "24px 0",
                borderBottom: "1px solid #eee",
              }}
            >
              <a
                href="https://www.facebook.com/profile.php?id=100092547950205"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src="/icons/facebook.svg" alt="Facebook" />
              </a>

              <a
                href="https://www.instagram.com/sarahscakes5/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src="/icons/instagram.svg" alt="Instagram" />
              </a>

              <a
                href="https://www.tiktok.com/@sarahscakecreations"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src="/icons/tiktok.svg" alt="TikTok" />
              </a>
            </div>

            <div className="footerBottom">
              © {new Date().getFullYear()} Sarah’s Cake Creations. All rights reserved.
            </div>
          </footer>

          {/* MINI CART (GLOBAL) */}
          <MiniCart />
        </Providers>
      </body>
    </html>
  );
}
