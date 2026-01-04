"use client";

export default function Reviews() {
  return (
    <>
      <style>{`
        .reviews-wrapper {
          background: #ffeef5;
          padding: 40px 15px;
          text-align: center;
        }

        .review-box {
          max-width: 900px;
          margin: 0 auto;
          background: white;
          padding: 25px;
          border-radius: 15px;
          box-shadow: 0 4px 10px rgba(0,0,0,0.1);
          border: 3px solid #ffd1e6;
        }

        .review-box h2 {
          font-size: 32px;
          color: #6b245d;
          font-weight: 900;
          margin-bottom: 10px;
        }

        .review-box p {
          font-size: 18px;
          margin-bottom: 25px;
        }
      `}</style>

      <div className="reviews-wrapper">
        <div className="review-box">
          <h2>What Our Customers Say 💗</h2>
          <p>Thank you for all your wonderful reviews! They mean the world to us.</p>

          {/* ⭐ ELFSIGHT REVIEWS WIDGET ⭐ */}
          <script
            src="https://elfsightcdn.com/platform.js"
            async
          ></script>

          <div
            className="elfsight-app-384a4158-58c2-42ea-a439-1843e1148cf1"
            data-elfsight-app-lazy
          ></div>
        </div>
      </div>
    </>
  );
}
