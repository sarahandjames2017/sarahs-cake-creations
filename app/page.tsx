"use client";

import FacebookLoginButton from "./components/FacebookLoginButton";

export default function Home() {
  return (
    <>
      <style>{`
        .hero {
          background-image: url('/images/wedding_cake.jpg');
          background-size: cover;
          background-position: center;
          height: 65vh;
          display: flex;
          align-items: center;
          justify-content: center;
          color: white;
          font-weight: 900;
          font-size: 38px;
          text-shadow: 2px 2px 6px rgba(0,0,0,0.6);
        }

        .section-title {
          font-size: 32px;
          margin-top: 40px;
          color: #6b245d;
          font-weight: 800;
          text-align: center;
        }

        .category-row {
          display: flex;
          justify-content: center;
          flex-wrap: wrap;
          gap: 15px;
          max-width: 1000px;
          margin: 25px auto;
        }

        .category-btn {
          background: white;
          border: 2px solid #ff8bb6;
          border-radius: 12px;
          padding: 14px 22px;
          font-size: 17px;
          font-weight: bold;
          color: #6b245d;
          cursor: pointer;
          transition: 0.25s;
        }

        .category-btn:hover {
          background: #ff8bb6;
          color: white;
        }

        .slider {
          overflow: hidden;
          width: 100%;
          background-color: #fff;
          padding: 35px 0;
          margin-bottom: 40px;
        }

        .slide-track {
          display: flex;
          width: calc(180px * 40);
          animation: scroll 50s linear infinite;
        }

        .slide-track img {
          width: 180px;
          height: 180px;
          border-radius: 50%;
          object-fit: cover;
          margin: 0 15px;
          box-shadow: 0 4px 6px rgba(0,0,0,0.18);
        }

        @keyframes scroll {
          0% { transform: translateX(0); }
          100% { transform: translateX(calc(-180px * 20)); }
        }
      `}</style>

      {/* HERO */}
      <div className="hero">
        Custom Cakes for Every Occasion
      </div>

      {/* CATEGORIES */}
      <h2 className="section-title">Shop by Category</h2>

      <div className="category-row">
        <button className="category-btn" onClick={() => location.href = "/gallery#cakes"}>🎂 Cakes</button>
        <button className="category-btn" onClick={() => location.href = "/gallery#cake-slices"}>🎂 Cake Slices</button>
        <button className="category-btn" onClick={() => location.href = "/gallery#cupcakes"}>🧁 Cupcakes</button>
        <button className="category-btn" onClick={() => location.href = "/gallery#cookies"}>🍪 Cookies</button>
        <button className="category-btn" onClick={() => location.href = "/gallery#brownies"}>🍫 Brownies</button>
        <button className="category-btn" onClick={() => location.href = "/gallery#cakepots"}>🍰 Cake Pots</button>
        <button className="category-btn" onClick={() => location.href = "/gallery#cheesecakes"}>🧀 Cheesecakes</button>
        <button className="category-btn" onClick={() => location.href = "/gallery#other"}>🍬 Other Treats</button>
      </div>

      {/* FEATURED */}
      <h2 className="section-title">Featured Creations</h2>

      <div className="slider">
        <div className="slide-track">
          {[
            "pink_cake.jpg",
            "wedding_cake.jpg",
            "newcastle_cake.jpg",
            "sunderland_themed_cake.jpg",
            "chocolate_overload_cake.jpg",
            "minions_themed_cake.jpg",
            "ghost_spider.png",
            "dino.png",
            "stitch_cupcakes.jpg",
            "peanut_mm_colossal_cookie.jpg",
            "billionaires_brownie.jpg",
            "biscoff_and_white_chocolate_cake_pot.jpg",
          ].map((img, i) => (
            <img key={i} src={`/images/${img}`} alt="" />
          ))}

          {[
            "pink_cake.jpg",
            "wedding_cake.jpg",
            "newcastle_cake.jpg",
            "sunderland_themed_cake.jpg",
            "chocolate_overload_cake.jpg",
            "minions_themed_cake.jpg",
            "ghost_spider.png",
            "dino.png",
            "stitch_cupcakes.jpg",
            "peanut_mm_colossal_cookie.jpg",
            "billionaires_brownie.jpg",
            "biscoff_and_white_chocolate_cake_pot.jpg",
          ].map((img, i) => (
            <img key={`dup-${i}`} src={`/images/${img}`} alt="" />
          ))}
        </div>
      </div>

      

    </>
  );
}
