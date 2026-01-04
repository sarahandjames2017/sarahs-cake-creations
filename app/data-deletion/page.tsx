"use client";

export default function DataDeletion() {
  return (
    <>
      <style>{`
        body {
          margin: 0;
          font-family: 'Montserrat', sans-serif;
          background: #ffeef5;
          color: #5e2a6b;
        }

        .container {
          max-width: 900px;
          margin: 40px auto;
          background: #ffffff;
          padding: 40px;
          border-radius: 16px;
          box-shadow: 0 6px 14px rgba(0,0,0,0.1);
          border: 3px solid #ffd1e6;
        }

        h1, h2 {
          color: #6b245d;
        }

        h1 {
          text-align: center;
          margin-bottom: 20px;
        }

        p {
          font-size: 17px;
          line-height: 1.7;
        }

        footer {
          background: #ffb5ce;
          text-align: center;
          padding: 18px;
          font-weight: bold;
          margin-top: 40px;
        }
      `}</style>

      <div className="container">
        <h1>User Data Deletion Instructions</h1>

        <p>
          Sarah’s Cake Creations respects your privacy and your rights regarding your
          personal data.
        </p>

        <h2>How to Request Data Deletion</h2>

        <p>
          If you have logged in using Facebook and would like your data removed, please
          email us at:
        </p>

        <p>
          <strong>info@sarahscakecreations.co.uk</strong>
        </p>

        <p>
          Please include:
        </p>

        <ul>
          <li>Your full name</li>
          <li>The email address associated with your Facebook account</li>
          <li>A request for data deletion</li>
        </ul>

        <p>
          We will process your request within 30 days in accordance with applicable
          data protection laws.
        </p>

        <p><strong>Last updated:</strong> January 2026</p>
      </div>

      <footer>
        © 2025 Sarah&apos;s Cake Creations. All Rights Reserved.
      </footer>
    </>
  );
}
