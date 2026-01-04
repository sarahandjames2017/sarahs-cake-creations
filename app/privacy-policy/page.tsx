"use client";

export default function PrivacyPolicy() {
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

        p, li {
          font-size: 17px;
          line-height: 1.7;
        }

        ul {
          margin-left: 20px;
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
        <h1>Privacy Policy</h1>

        <p>
          Sarah’s Cake Creations respects your privacy and is committed to protecting
          your personal data. This Privacy Policy explains how we collect, use, and
          protect your information.
        </p>

        <h2>Information We Collect</h2>
        <ul>
          <li>Name and contact details (email, phone number)</li>
          <li>Messages submitted via our contact form</li>
          <li>Information provided when logging in with Facebook (public profile, email if permitted)</li>
        </ul>

        <h2>How We Use Your Information</h2>
        <ul>
          <li>To respond to enquiries</li>
          <li>To provide customer support</li>
          <li>To improve our services</li>
          <li>To authenticate users via Facebook Login</li>
        </ul>

        <h2>Facebook Login</h2>
        <p>
          When you use Facebook Login, we receive basic profile information as
          permitted by Facebook. We do not post to Facebook or access private data.
        </p>

        <h2>Data Protection</h2>
        <p>
          Your information is stored securely and is never sold or shared with third
          parties except where legally required.
        </p>

        <h2>Your Rights</h2>
        <p>
          You may request access, correction, or deletion of your personal data at
          any time by contacting us.
        </p>

        <h2>Contact</h2>
        <p>
          Email: <strong>info@sarahscakecreations.co.uk</strong>
        </p>

        <p><strong>Last updated:</strong> January 2026</p>
      </div>

      <footer>
        © 2025 Sarah&apos;s Cake Creations. All Rights Reserved.
      </footer>
    </>
  );
}
