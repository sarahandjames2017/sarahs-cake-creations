"use client";

import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { useCart } from "@/app/context/CartContext";
import { supabase } from "@/app/lib/supabase";

export default function Header() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  /* 🛒 CART STATE */
  const { items } = useCart();
  const itemCount = items.reduce((sum, item) => sum + item.quantity, 0);

  /* 🔐 AUTH STATE */
  const [user, setUser] = useState<any>(null);

  /* 🔍 BADGE PREVIEW STATE */
  const [activeBadge, setActiveBadge] = useState<string | null>(null);

  useEffect(() => {
    supabase.auth.getUser().then(({ data }) => {
      setUser(data.user);
    });

    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange((_event, session) => {
      setUser(session?.user ?? null);
    });

    return () => subscription.unsubscribe();
  }, []);

  return (
    <header style={{ background: "white", borderBottom: "1px solid #eee" }}>
      <div
        className="container"
        style={{
          display: "grid",
          gridTemplateColumns: "1fr auto 1fr",
          alignItems: "center",
          padding: "32px 0",
        }}
      >
        {/* LEFT SPACER */}
        <div />

        {/* LOGO + NAV */}
        <div style={{ textAlign: "center" }}>
          <img
            src="/images/logo.png"
            alt="Sarah's Cake Creations"
            style={{ height: 120, marginBottom: 14 }}
          />

          <nav className="navLinks desktopNav">
            <Link href="/" className={pathname === "/" ? "active" : ""}>Home</Link>
            <Link href="/faqs" className={pathname === "/faqs" ? "active" : ""}>FAQs</Link>
            <Link href="/products" className={pathname.startsWith("/products") ? "active" : ""}>Products</Link>
            <Link href="/refund-policy" className={pathname === "/refund-policy" ? "active" : ""}>Refund Policy</Link>
            <Link href="/shipping-policy" className={pathname === "/shipping-policy" ? "active" : ""}>Shipping Policy</Link>
            <Link href="/contact" className={pathname === "/contact" ? "active" : ""}>Contact</Link>
          </nav>
        </div>

        {/* ICONS */}
        <div className="headerIcons">
          <img src="/icons/search.svg" alt="Search" />

          {/* 👤 ACCOUNT ICON (FIXED) */}
          {user ? (
            <Link href="/account">
              <img
                src="/icons/user.svg"
                alt="My Account"
                style={{ cursor: "pointer" }}
              />
            </Link>
          ) : (
            <Link href="/login">
              <img
                src="/icons/user.svg"
                alt="Login"
                style={{ cursor: "pointer" }}
              />
            </Link>
          )}

          {/* 🛒 BASKET */}
          <Link href="/cart" style={{ position: "relative" }}>
            <img src="/icons/bag.svg" alt="Basket" />
            {itemCount > 0 && (
              <span
                style={{
                  position: "absolute",
                  top: -6,
                  right: -6,
                  background: "#ff4d94",
                  color: "white",
                  fontSize: 11,
                  fontWeight: 800,
                  width: 18,
                  height: 18,
                  borderRadius: "50%",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                {itemCount}
              </span>
            )}
          </Link>

          <button
            className="menuButton"
            onClick={() => setOpen(!open)}
            aria-label="Menu"
          >
            {open ? "✕" : "☰"}
          </button>
        </div>
      </div>

      {/* TRUST BADGES */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          alignItems: "center",
          padding: "10px 0",
        }}
      >
        <div style={{ paddingLeft: 20 }}>
          <button
            onClick={() => setActiveBadge("/badges/fully-insured.png")}
            style={{ background: "none", border: "none", cursor: "pointer" }}
          >
            <img src="/badges/fully-insured.png" alt="Fully insured" style={{ height: 48 }} />
          </button>
        </div>

        <div
          style={{
            display: "flex",
            justifyContent: "flex-end",
            alignItems: "center",
            gap: 16,
            paddingRight: 20,
          }}
        >
          <button
            onClick={() => setActiveBadge("/badges/home-bakery.png")}
            style={{ background: "none", border: "none", cursor: "pointer" }}
          >
            <img src="/badges/home-bakery.png" alt="Home bakery" style={{ height: 42 }} />
          </button>

          <button
            onClick={() => setActiveBadge("/badges/food-hygiene-5.png")}
            style={{ background: "none", border: "none", cursor: "pointer" }}
          >
            <img src="/badges/food-hygiene-5.png" alt="Food hygiene rating 5" style={{ height: 52 }} />
          </button>
        </div>
      </div>

      {/* BADGE LIGHTBOX */}
      {activeBadge && (
        <div
          onClick={() => setActiveBadge(null)}
          style={{
            position: "fixed",
            inset: 0,
            background: "rgba(0,0,0,0.6)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            zIndex: 9999,
          }}
        >
          <div
            onClick={(e) => e.stopPropagation()}
            style={{
              background: "white",
              padding: 20,
              borderRadius: 12,
              position: "relative",
              maxWidth: "90%",
            }}
          >
            <button
              onClick={() => setActiveBadge(null)}
              style={{
                position: "absolute",
                top: 8,
                right: 10,
                background: "none",
                border: "none",
                fontSize: 22,
                cursor: "pointer",
              }}
            >
              ✕
            </button>

            <img src={activeBadge} alt="Certificate preview" style={{ maxWidth: "100%", maxHeight: "80vh" }} />
          </div>
        </div>
      )}
    </header>
  );
}
