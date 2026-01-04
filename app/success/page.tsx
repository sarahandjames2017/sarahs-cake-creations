"use client";

export default function Success() {
  return (
    <>
      <style>{`
        .success-wrapper {
          background: #ffeef5;
          min-height: 60vh;
          display: flex;
          justify-content: center;
          align-items: center;
          padding: 40px 20px;
        }

        .box {
          background: #ffffff;
          max-width: 500px;
          padding: 35px;
          border-radius: 12px;
          box-shadow: 0 4px 10px rgba(0,0,0,0.15);
          text-align: center;
        }

        .box h2 {
          font-size: 30px;
          color: #6b245d;
          margin-bottom: 10px;
          font-weight: 900;
        }

        .box p {
          font-size: 18px;
          line-height: 1.5;
          color: #5e2a6b;
        }

        .button {
          display: inline-block;
          margin-top: 25px;
          padding: 14px 25px;
          background: #ff7fbf;
          color: white;
          font-size: 18px;
          font-weight: bold;
          border-radius: 8px;
          text-decoration: none;
          transition: 0.25s;
        }

        .button:hover {
          background: #ff4da3;
        }
      `}</style>

      <div className="success-wrapper">
        <div className="box">
          <h2>Your Message Has Been Sent 🎉</h2>

          <p>
            Thank you for getting in touch.
            <br />
            We will reply as soon as possible!
          </p>

          <a href="/contact" className="button">
            Back to Contact Page
          </a>
        </div>
      </div>
    </>
  );
}
