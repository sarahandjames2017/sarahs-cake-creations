"use client";

export default function About() {
  return (
    <>
      <style>{`
        .about-container{
          max-width:850px;
          margin:40px auto;
          padding:40px 20px;
          text-align:left;
          line-height:1.7;
          background:white;
          border-radius:15px;
          box-shadow:0 4px 10px rgba(0,0,0,0.08);
          border:3px solid #ffd1e6;
        }

        .divider{
          text-align:center;
          margin:30px 0;
          font-size:30px;
        }

        .about-container h2,
        .about-container h3{
          color:#6b245d;
          text-align:center;
          margin-top:25px;
          font-weight:900;
        }

        .about-container p{
          font-size:18px;
          color:#5e2a6b;
        }

        .badge-section {
          max-width: 1000px;
          margin: 40px auto;
          display: flex;
          flex-wrap: wrap;
          gap: 25px;
          justify-content: center;
        }

        .badge {
          background: #fff;
          border: 3px solid #ffd1e6;
          border-radius: 12px;
          padding: 15px 20px;
          width: 280px;
          min-height: 90px;
          display: flex;
          align-items: center;
          gap: 15px;
          font-size: 18px;
          font-weight: bold;
          color: #6b245d;
          box-shadow: 0 4px 10px rgba(0,0,0,0.08);
          text-align: left;
        }

        .badge img {
          width: 60px;
          height: auto;
          border-radius: 6px;
          flex-shrink: 0;
        }
      `}</style>

      <div className="about-container">
        <h2>Welcome to Sarah&apos;s Cake Creations</h2>

        <div className="divider">🍰</div>

        <p>
          At Sarah’s Cake Creations, every bake is created with passion, creativity,
          and a genuine love for making people smile. What started as a small hobby
          soon grew into a dedicated home bakery, specialising in bespoke cakes,
          cupcakes, brownies, cookies, and handmade sweet treats.
        </p>

        <p>
          I believe that every celebration deserves something unique and memorable.
          That’s why each order is baked fresh, decorated by hand, and tailored
          exactly to your theme or vision. No two cakes are ever the same — every
          design is crafted with care, precision, and high-quality ingredients.
        </p>

        <div className="divider">🎨</div>

        <h3>Made for Every Occasion</h3>

        <p>
          Whether you're celebrating a birthday, wedding, baby shower, themed party,
          corporate event, or simply treating yourself, I love bringing ideas to life
          through edible art. From elegant tiered cakes and character themes to
          cupcake bouquets and custom treats, every order is made to stand out.
        </p>

        <div className="divider">🧁</div>

        <h3>Your Vision, My Creativity</h3>

        <p>
          If you already have a design in mind — perfect! And if not, I’m always happy
          to help with inspiration, themes, colours, and flavours to match your event.
          Together we can create something that looks beautiful and tastes even better.
        </p>

        <div className="divider">💗</div>

        <h3>Baked Fresh With Care</h3>

        <p>
          Every bake is made in a registered and insured home kitchen, using
          high-quality ingredients and strict attention to detail. Quality, freshness,
          and customer satisfaction are at the heart of everything I do.
        </p>

        <p>
          Thank you so much for supporting a small local business. Your orders, kind
          messages, and recommendations mean the world. I can’t wait to create
          something special for your next occasion!
        </p>
      </div>

      <div className="badge-section">
        <div className="badge">
          <img src="/images/hygiene.png" alt="" />
          Food Hygiene Rating 5
        </div>

        <div className="badge">
          <img src="/images/insured.png" alt="" />
          Fully Insured Business
        </div>

        <div className="badge">
          <img src="/images/homebakery.png" alt="" />
          Registered Home Bakery
        </div>
      </div>
    </>
  );
}
