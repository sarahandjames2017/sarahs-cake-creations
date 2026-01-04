"use client";

export default function TermsOfService() {
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
        <h1>Terms of Service</h1>

        <p>
          Welcome to Sarah’s Cake Creations. By using this website, you agree to the
          following terms.
        </p>

        <h2>Use of Website</h2>
        <p>
          This website is provided for information, enquiries, and customer interaction.
          You agree not to misuse the site or attempt to access restricted areas.
        </p>

        <h2>Orders & Enquiries</h2>
        <p>
          Submitting an enquiry does not guarantee availability. All orders are confirmed
          directly with Sarah’s Cake Creations.
        </p>

        <h2>Facebook Login</h2>
        <p>
          If you choose to log in using Facebook, you consent to Facebook sharing
          basic profile information with this site, as permitted by Facebook.
        </p>

        <h2>Limitation of Liability</h2>
        <p>
          Sarah’s Cake Creations is not liable for any indirect damages resulting from
          the use of this website.
        </p>

        <h2>Changes</h2>
        <p>
          These terms may be updated at any time without notice.
        </p>

        <p>
          <strong>Contact:</strong> info@sarahscakecreations.co.uk
        </p>

        <p><strong>Last updated:</strong> January 2026</p>
      </div>

      <footer>
        © 2025 Sarah&apos;s Cake Creations. All Rights Reserved.
      </footer>
    </>
  );
}
