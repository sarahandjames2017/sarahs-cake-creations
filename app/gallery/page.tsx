"use client";

import { useEffect, useMemo, useState } from "react";

type ImageItem = { src: string; title: string };

const gallery: Record<string, ImageItem[]> = {
  cakes: [
    { src: "2_tier_unicorn_cake.jpg", title: "2 Tier Unicorn Cake" },
    { src: "candyland_cake.jpg", title: "Candyland Cake" },
    { src: "80s_themed_cake.jpg", title: "80s Themed Cake" },
    { src: "90s_themed_cake.jpg", title: "90s Themed Cake" },
    { src: "ariel_cake.jpg", title: "Ariel Cake" },
    { src: "baby_shower.jpg", title: "Baby Shower Cake" },
    { src: "barbie_2_tier.jpg", title: "2 Tier Barbie Cake" },
    { src: "chocolate_overload_cake.jpg", title: "Chocolate Overload Cake" },
    { src: "labubu_cake.jpg", title: "Labubu Cake" },
    { src: "kpop_demon_hunters_cake.jpg", title: "K-Pop Cake" },
    { src: "minions_themed_cake.jpg", title: "Minions Cake" },
    { src: "minnie_mouse_themed_cake.jpg", title: "Minnie Mouse Cake" },
    { src: "newcastle_cake.jpg", title: "Newcastle Cake" },
    { src: "pink_cake.jpg", title: "Pink Cake" },
    { src: "spiderman_themed.jpg", title: "Spiderman Cake" },
    { src: "sunderland_themed_cake.jpg", title: "Sunderland Cake" },
    { src: "peter_rabbit_themed_cake.jpg", title: "Peter Rabbit Cake" },
    { src: "skye.png", title: "Skye Cake" },
    { src: "wedding_cake.jpg", title: "Wedding Cake" },
    { src: "red_heart.jpg", title: "Red Heart Cake" },
    { src: "black_and_white_heart.jpg", title: "Black & White Heart Cake" },
  ],

  "cake-slices": [
    { src: "gingerbread cake slice.jpg", title: "Gingerbread Cake Slice" },
    { src: "cinnamon swirl cake slice.jpg", title: "Cinnamon Swirl Cake Slice" },
    { src: "chocolate peppermint cake slice.jpg", title: "Chocolate Peppermint Cake Slice" },
  ],

  cupcakes: [
    { src: "blue_cupcake_bouquet.jpg", title: "Blue Bouquet" },
    { src: "pink_bouquet.jpg", title: "Pink Bouquet" },
    { src: "stitch_cupcakes.jpg", title: "Stitch Cupcakes" },
    { src: "floral_cupacke_box.jpg", title: "Floral Cupcake Box" },
    { src: "floral_box_2.jpg", title: "Flower Box" },
  ],

  cookies: [
    { src: "kinder_colossal_cookie.jpg", title: "Kinder Cookie" },
    { src: "labubu_colossal_cookies.jpg", title: "Labubu Cookies" },
    { src: "kinderella_cookie_pie.jpg", title: "Kinderella Cookie Pie" },
    { src: "mars_stuffed_cookie.jpg", title: "Mars Stuffed Cookie" },
    { src: "oreo_stuffed_cookie.jpg", title: "Oreo Stuffed Cookie" },
    { src: "red_velvet_cookies_sandwich.jpg", title: "Red Velvet Cookies" },
    { src: "peanut_mm_colossal_cookie.jpg", title: "Peanut & MM Cookie" },
    { src: "ferrero_rocher_colossal_cookie.jpg", title: "Ferrero Cookie" },
    { src: "snickers_and_peanutbutter_cookie_pie.jpg", title: "Snickers Cookie Pie" },
    { src: "smores cookie pie.jpg", title: "Smores Cookie Pie" },
    { src: "white chocolate gingerbread cookie.jpg", title: "White Chocolate Gingerbread Cookie" },
    { src: "smores cookies.jpg", title: "Smores Cookie" },
    { src: "kinder stuffed cookie.jpg", title: "Kinder Stuffed Cookie" },
    { src: "mince pie stuffed cookie.jpg", title: "Mince Pie Stuffed Cookie" },
    { src: "labubu colossal cookies.jpg", title: "Labubu Colossal Cookie" },
    { src: "chocolate orange cookie.jpg", title: "Chocolate Orange Cookie" },
    { src: "caramel gingerbread cookie bar.jpg", title: "Caramel Gingerbread Cookie Bar" },
    { src: "funfetti cookie sandwich.jpg", title: "Funfetti Cookie Sandwich" },
    { src: "biscoff and chocolate cookie pie.jpg", title: "Biscoff And Chocolate Cookie Pie" },
    { src: "cookies and cream cookie pie.jpg", title: "Cookies And Cream Cookie Pie" },
  ],

  brownies: [
    { src: "billionaires_brownie.jpg", title: "Billionaire's Brownie" },
    { src: "blondie_and_brownie_stack.jpg", title: "Blondie & Brownie Stack" },
    { src: "caramel cornflake brownie.jpg", title: "Caramel Cornflake Brownie" },
    { src: "cosmic_brownie.jpg", title: "Cosmic Brownie" },
    { src: "crunchie brownie.jpg", title: "Crunchie Brownie" },
    { src: "dubai_brownie.jpg", title: "Dubai Brownie" },
    { src: "gingerbread brownie.jpg", title: "GingerBread Brownie" },
    { src: "kitkat brownie.jpg", title: "KitKat Brownie" },
    { src: "oreo_brownie.jpg", title: "Oreo Brownie" },
    { src: "rolo blondie.jpg", title: "Rolo Blondie" },
    { src: "snowball brownie.jpg", title: "SnowBall Brownie" },
  ],

  cakepots: [
    { src: "black forest cake pot.jpg", title: "Black Forest Cake Pot" },
    { src: "biscoff_and_white_chocolate_cake_pot.jpg", title: "Biscoff Cake Pot" },
    { src: "chocolate and galaxy caramel cake pot.jpg", title: "Chocolate and galaxy caramel Cake Pot" },
    { src: "dubai_chocolate_cake_pot.jpg", title: "Dubai Cake Pot" },
    { src: "kinder cake pot.jpg", title: "Kinder Cake Pot" },
    { src: "lemon_meringue_cake_pot.jpg", title: "Lemon Meringue Pot" },
    { src: "old_school.jpg", title: "Old School Cake" },
    { src: "old school cake pot.jpg", title: "Old School Cake Pot" },
    { src: "strawberry cake pot.jpg", title: "Strawberry Cake Pot" },
  ],

  cheesecakes: [
    { src: "kinder_cheesecake_croissant.jpg", title: "Kinder Cheesecake Croissant" },
    { src: "cadbury caramel cheesecake croissant.jpg", title: "Cadbury Cheesecake" },
    { src: "biscoff cheesecake croissant.jpg", title: "Biscoff Croissant" },
    { src: "rolo brownie cheesecake.jpg", title: "Rolo Cheesecake" },
    { src: "twix & toffee cheesecake.jpg", title: "Twix Toffee Cheesecake" },
    { src: "strawberry cheesecake.jpg", title: "Strawberry Cheesecake" },
    { src: "kinder cheesecake.jpg", title: "Kinder Cheesecake" },
    { src: "biscoff cheesecake.jpg", title: "Biscoff Cheesecake" },
    { src: "black forest cheesecake.jpg", title: "Black Forest Cheesecake" },
  ],

  other: [
    { src: "billionaires_brownie.jpg", title: "Billionaire Brownie" },
    { src: "biscoff_roackyroad.jpg", title: "Biscoff Rocky Road" },
    { src: "milkyway_krispie_slice.jpg", title: "Milkyway Slice" },
    { src: "cornflake_tart.jpg", title: "Cornflake Tart" },
    { src: "dairymilk_rockyroad.jpg", title: "Dairy Milk Rocky Road" },
    { src: "pink wafer rockroad.jpg", title: "Pink Wafer Rocky Road" },
    { src: "white chocolate rockyroad.jpg", title: "White Chocolate Rocky Road" },
    { src: "jammy dodger flapjack.jpg", title: "Jammy Dodger Flapjack" },
    { src: "crunchie krispie.jpg", title: "Crunchie Krispie" },
    { src: "cheese_and_jalepeno_scone.jpg", title: "Cheese & Jalapeño Scone" },
    { src: "three cheese scone.jpg", title: "Three Cheese Scone" },
    { src: "salted_caramel_and_pretzel_rockyroad.jpg", title: "Salted Caramel Pretzel Rocky Road" },
    { src: "gingerbread rockyroad.jpg", title: "Gingerbread Rocky Road" },
    { src: "gold bar krispie.jpg", title: "Gold Bar Krispie" },
    { src: "guylian shell krispie.jpg", title: "Guylian Shell Krispie" },
    { src: "nutella krispie slice.jpg", title: "Nutella Krispie" },
    { src: "terry's chocolate orange rockyroad.jpg", title: "Terry's Chocolate Orange Rockyroad" },
    { src: "smarties millionaire krispie.jpg", title: "Smarties Millionaire Krispie" },
    { src: "bakewell shortbread slice.jpg", title: "Bakewell Shortbread Slice" },
  ],
};

const labels: Record<string, string> = {
  cakes: "🍰 Cakes",
  "cake-slices": "🍰 Cake slices",
  cupcakes: "🧁 Cupcakes",
  cookies: "🍪 Cookies",
  brownies: "🍫 Brownies",
  cakepots: "🍰 Cake Pots",
  cheesecakes: "🧀 Cheesecakes",
  other: "🍬 Other Treats",
};

export default function GalleryPage() {
  const categories = useMemo(() => Object.keys(gallery), []);
  const [active, setActive] = useState<string>("cakes");
  const [open, setOpen] = useState(false);
  const [index, setIndex] = useState(0);

  const items = gallery[active];

  useEffect(() => {
    const hash = window.location.hash.replace("#", "");
    if (gallery[hash]) setActive(hash);
  }, []);

  function openModal(i: number) {
    setIndex(i);
    setOpen(true);
  }

  function closeModal() {
    setOpen(false);
  }

  function next() {
    setIndex((prev) => (prev + 1) % items.length);
  }

  function prev() {
    setIndex((prev) => (prev - 1 + items.length) % items.length);
  }

  return (
    <>
      <style>{`
        /* page wrapper like your old site */
        .gallery-page {
          max-width: 1050px;
          margin: 0 auto;
          padding: 30px 12px 40px;
        }

        .gallery-title {
          font-size: 44px;
          font-weight: 900;
          color: #6b245d;
          margin: 20px 0 10px;
        }

        /* category pills */
        .category-bar {
          display: flex;
          flex-wrap: wrap;
          justify-content: center;
          gap: 14px;
          padding: 18px 0 26px;
        }

        .cat-pill {
          background: white;
          border: 2px solid #ff8ac1;
          border-radius: 14px;
          padding: 12px 18px;
          font-size: 16px;
          font-weight: 800;
          color: #6b245d;
          cursor: pointer;
          transition: 0.25s;
          min-width: 135px;
        }

        .cat-pill:hover,
        .cat-pill.active {
          background: #ff8ac1;
          color: white;
        }

        /* card grid (stops the "stretched" look) */
        .grid {
          display: grid;
          grid-template-columns: repeat(4, minmax(0, 1fr));
          gap: 34px 34px;
          justify-items: center;
        }

        @media (max-width: 1000px) {
          .grid { grid-template-columns: repeat(3, minmax(0, 1fr)); }
        }
        @media (max-width: 780px) {
          .grid { grid-template-columns: repeat(2, minmax(0, 1fr)); gap: 22px; }
          .cat-pill { min-width: 120px; padding: 10px 14px; }
        }

        .card {
          width: 230px;
          max-width: 100%;
          background: white;
          border: 3px solid #ffd1ec;
          border-radius: 14px;
          padding: 14px 14px 10px;
          box-shadow: 0 4px 10px rgba(0,0,0,0.06);
        }

        .card img {
          width: 100%;
          height: 200px;
          object-fit: cover;
          border-radius: 12px;
          cursor: pointer;
          transition: 0.3s;
        }

        .card img:hover {
          transform: scale(1.03);
          border-color: #ff8ac1;
        }

        .caption {
          margin: 12px 0 0;
          font-weight: 700;
          color: #6b245d;
        }

        /* modal (same behaviour as old) */
        .modal {
          display: flex;
          position: fixed;
          inset: 0;
          z-index: 9999;
          background: rgba(0,0,0,0.8);
          align-items: center;
          justify-content: center;
          padding: 30px;
        }

        .modal img {
          max-width: 90%;
          max-height: 80vh;
          border-radius: 12px;
          box-shadow: 0 0 25px rgba(255,255,255,0.35);
        }

        .close,
        .prev,
        .next {
          position: absolute;
          color: white;
          font-weight: 900;
          cursor: pointer;
          user-select: none;
        }

        .close { top: 20px; right: 35px; font-size: 40px; }
        .prev, .next { top: 50%; transform: translateY(-50%); font-size: 52px; padding: 10px; }
        .prev { left: 20px; }
        .next { right: 20px; }

        .prev:hover, .next:hover, .close:hover { opacity: 0.75; }
      `}</style>

      <div className="gallery-page">
        <h1 className="gallery-title">Gallery</h1>

        <div className="category-bar">
          {categories.map((c) => (
            <button
              key={c}
              className={`cat-pill ${active === c ? "active" : ""}`}
              onClick={() => {
                setActive(c);
                // keep old behaviour: hash changes (optional)
                window.location.hash = c;
              }}
            >
              {labels[c] ?? c}
            </button>
          ))}
        </div>

        <div className="grid">
          {items.map((it, i) => (
            <div className="card" key={`${active}-${it.src}-${i}`}>
              <img
                src={`/images/${it.src}`}
                alt={it.title}
                onClick={() => openModal(i)}
              />
              <div className="caption">{it.title}</div>
            </div>
          ))}
        </div>
      </div>

      {open && (
        <div className="modal" onClick={closeModal}>
          <div className="close" onClick={(e) => { e.stopPropagation(); closeModal(); }}>
            ×
          </div>
          <div className="prev" onClick={(e) => { e.stopPropagation(); prev(); }}>
            ‹
          </div>
          <img
            src={`/images/${items[index].src}`}
            alt={items[index].title}
            onClick={(e) => e.stopPropagation()}
          />
          <div className="next" onClick={(e) => { e.stopPropagation(); next(); }}>
            ›
          </div>
        </div>
      )}
    </>
  );
}
