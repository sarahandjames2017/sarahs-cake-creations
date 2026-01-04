import "./globals.css";

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
        <style>{`
          body {
            margin: 0;
            font-family: 'Montserrat', sans-serif;
            background-color: #ffeef5;
            color: #5e2a6b;
          }

          header {
            background: #f6f8b8;
            padding: 30px 15px;
            border-bottom: 6px solid #ff9abe;
            display: flex;
            align-items: center;
            justify-content: center;
            gap: 10px;
          }

          header img {
            width: 95px;
          }

          header h1 {
            font-size: 40px;
            margin: 0;
            font-weight: 900;
            color: #6b245d;
          }

          nav {
            display: flex;
            justify-content: center;
            gap: 30px;
            background: white;
            padding: 14px 0;
            border-bottom: 3px solid #ffd1e6;
          }

          nav a {
            text-decoration: none;
            color: #6b245d;
            font-weight: bold;
            font-size: 18px;
          }

          nav a:hover {
            color: #ff4d94;
          }

          footer {
            background-color: #ffb5ce;
            color: #6b245d;
            text-align: center;
            padding: 18px;
            font-weight: bold;
          }

          @media (max-width: 768px) {
            header img {
              width: 65px;
            }
            header h1 {
              font-size: 26px;
            }
            nav {
              gap: 14px;
            }
            nav a {
              font-size: 16px;
            }
          }
        `}</style>

        <header>
          <img src="/images/logo.png" alt="Sarah's Cake Creations Logo" />
          <h1>Sarah&apos;s Cake Creations</h1>
        </header>

        <nav>
          <a href="/">Home</a>
          <a href="/gallery">Gallery</a>
          <a href="/about">About</a>
          <a href="/reviews">Reviews</a>
          <a href="/contact">Contact</a>
        </nav>

        {children}

        <footer>
          © 2025 Sarah&apos;s Cake Creations. All Rights Reserved.
        </footer>
      </body>
    </html>
  );
}
