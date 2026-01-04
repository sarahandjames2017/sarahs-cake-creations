"use client";

export default function Contact() {
  return (
    <>
      <style>{`
        .contact-container {
          display: flex;
          justify-content: center;
          gap: 30px;
          max-width: 1100px;
          margin: 40px auto;
          padding: 0 20px;
          flex-wrap: wrap;
        }

        .contact-box {
          background: #fff6fa;
          width: 450px;
          padding: 25px;
          border-radius: 12px;
          box-shadow: 0 4px 8px rgba(0,0,0,0.08);
          text-align: center;
        }

        .enquiry-box {
          background: #fff;
          width: 450px;
          padding: 25px;
          border-radius: 12px;
          box-shadow: 0 4px 8px rgba(0,0,0,0.08);
          text-align: left;
          box-sizing: border-box;
        }

        .enquiry-box h2,
        .contact-box h2 {
          text-align: center;
          color: #6b245d;
        }

        .enquiry-box label {
          font-weight: bold;
          color: #6b245d;
        }

        .enquiry-box input,
        .enquiry-box textarea {
          width: 100%;
          padding: 12px;
          margin: 8px 0 15px;
          border: 2px solid #ffd1e6;
          border-radius: 8px;
          font-size: 16px;
          box-sizing: border-box;
        }

        .enquiry-box button {
          width: 100%;
          background: #ff7fbf;
          color: white;
          padding: 14px;
          font-size: 18px;
          border: none;
          border-radius: 8px;
          cursor: pointer;
          transition: 0.25s;
          font-weight: bold;
        }

        .enquiry-box button:hover {
          background: #ff4da3;
        }

        .socials a {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          margin: 8px;
          font-size: 16px;
          text-decoration: none;
          color: #6b245d;
          font-weight: bold;
        }

        .socials img {
          width: 26px;
          height: 26px;
          border-radius: 5px;
        }
      `}</style>

      <div className="contact-container">
        <div className="contact-box">
          <h2>Get In Touch</h2>

          <p><strong>📍 Location:</strong> South Shields, UK</p>
          <p><strong>📱 WhatsApp:</strong> 07708585121</p>

          <h3>Business Hours</h3>
          <p>Mon - Fri: 9am – 6pm</p>
          <p>Sat: 10am – 4pm</p>
          <p>Sun: Closed</p>

          <div className="socials">
            <h3>Follow Us</h3>

            <a
              href="https://www.facebook.com/profile.php?id=100092547950205"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src="/images/facebook.png" alt="" /> Facebook
            </a>

            <a
              href="https://instagram.com/sarahscakes5"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src="/images/instagram.png" alt="" /> Instagram
            </a>

            <a
              href="https://www.tiktok.com/@sarahscakecreations"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src="/images/tiktok.png" alt="" /> TikTok
            </a>
          </div>
        </div>

        <div className="enquiry-box">
          <h2>Enquiry Form</h2>

          <form
            action="https://formsubmit.co/info@sarahscakecreations.co.uk"
            method="POST"
          >
            <input
              type="hidden"
              name="_next"
              value="https://sarahscakecreations.co.uk/success"
            />
            <input type="hidden" name="_captcha" value="false" />

            <label>Your Name</label>
            <input type="text" name="name" required />

            <label>Your Email</label>
            <input type="email" name="email" required />

            <label>Your Message</label>
            <textarea name="message" rows={6} required />

            <button type="submit">Send Enquiry</button>
          </form>
        </div>
      </div>
    </>
  );
}
