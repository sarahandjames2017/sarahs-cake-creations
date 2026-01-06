"use client";

import { useCart } from "@/app/context/CartContext";
import Link from "next/link";

export default function MiniCart() {
  const { items, isOpen, closeCart } = useCart();

  if (!isOpen || items.length === 0) return null;

  const item = items[items.length - 1];

  return (
    <div
      style={{
        position: "fixed",
        right: 20,
        top: 90,
        width: 320,
        background: "white",
        border: "1px solid #eee",
        borderRadius: 12,
        padding: 16,
        boxShadow: "0 12px 30px rgba(0,0,0,0.15)",
        zIndex: 9999,
      }}
    >
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <strong>Just added to your cart</strong>
        <button onClick={closeCart}>✕</button>
      </div>

      <div style={{ display: "flex", gap: 12, marginTop: 14 }}>
        <img
          src={`/images/${item.image}`}
          alt={item.name}
          width={60}
          height={60}
          style={{ objectFit: "cover", borderRadius: 8 }}
        />

        <div>
          <div style={{ fontWeight: 700 }}>{item.name}</div>
          <div style={{ fontSize: 13 }}>Qty: {item.quantity}</div>
        </div>
      </div>

      {/* ✅ FIXED: CLIENT NAVIGATION */}
      <Link
        href="/cart"
        onClick={closeCart}
        style={{
          display: "block",
          marginTop: 16,
          background: "#ff9abe",
          color: "white",
          textAlign: "center",
          padding: "10px 0",
          borderRadius: 999,
          fontWeight: 800,
          textDecoration: "none",
        }}
      >
        View Cart ({items.length})
      </Link>

      <button
        onClick={closeCart}
        style={{
          marginTop: 10,
          background: "none",
          border: "none",
          color: "#ff4d94",
          fontWeight: 700,
          cursor: "pointer",
        }}
      >
        Continue shopping
      </button>
    </div>
  );
}
