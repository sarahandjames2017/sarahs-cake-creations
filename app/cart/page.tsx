"use client";

import { useCart } from "@/app/context/CartContext";
import Link from "next/link";

export default function CartPage() {
  const { items, updateQuantity, removeItem } = useCart();

  if (items.length === 0) {
    return (
      <div
        style={{
          minHeight: "60vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "#fff6e8",
        }}
      >
        <div style={{ textAlign: "center" }}>
          <h1 style={{ fontSize: 36, marginBottom: 12 }}>Your cart</h1>
          <p style={{ marginBottom: 16 }}>Your cart is empty.</p>

          <Link
            href="/products"
            style={{
              color: "#ff7fbf",
              fontWeight: 700,
              textDecoration: "underline",
            }}
          >
            Continue shopping
          </Link>
        </div>
      </div>
    );
  }

  const subtotal = items.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  return (
    <div className="container" style={{ padding: "60px 0" }}>
      <h1 style={{ textAlign: "center", marginBottom: 40 }}>Your cart</h1>

      {/* TABLE HEADER */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "2fr 1fr 1fr 1fr",
          fontWeight: 800,
          paddingBottom: 16,
          borderBottom: "1px solid #eee",
          color: "#555",
        }}
      >
        <div>Product</div>
        <div style={{ textAlign: "center" }}>Price</div>
        <div style={{ textAlign: "center" }}>Quantity</div>
        <div style={{ textAlign: "right" }}>Total</div>
      </div>

      {/* CART ITEMS */}
      {items.map((item) => (
        <div
          key={item.id}
          style={{
            display: "grid",
            gridTemplateColumns: "2fr 1fr 1fr 1fr",
            alignItems: "center",
            padding: "24px 0",
            borderBottom: "1px solid #eee",
          }}
        >
          {/* PRODUCT */}
          <div style={{ display: "flex", gap: 16 }}>
            <img
              src={`/images/${item.image}`}
              alt={item.name}
              width={90}
              height={90}
              style={{ objectFit: "cover", borderRadius: 8 }}
            />

            <div>
              <div style={{ fontWeight: 700 }}>{item.name}</div>

              <button
                onClick={() => removeItem(item.id)}
                style={{
                  marginTop: 6,
                  background: "none",
                  border: "none",
                  color: "#ff4d94",
                  fontSize: 13,
                  fontWeight: 700,
                  cursor: "pointer",
                  padding: 0,
                }}
              >
                Remove
              </button>
            </div>
          </div>

          {/* PRICE */}
          <div style={{ textAlign: "center", fontWeight: 600 }}>
            £{item.price.toFixed(2)}
          </div>

          {/* QUANTITY */}
          <div style={{ textAlign: "center" }}>
            <input
              type="number"
              min={1}
              value={item.quantity}
              onChange={(e) =>
                updateQuantity(item.id, Number(e.target.value))
              }
              style={{
                width: 60,
                padding: "6px",
                textAlign: "center",
                borderRadius: 4,
                border: "1px solid #999",
              }}
            />
          </div>

          {/* TOTAL */}
          <div style={{ textAlign: "right", fontWeight: 700 }}>
            £{(item.price * item.quantity).toFixed(2)}
          </div>
        </div>
      ))}

      {/* SUMMARY */}
      <div
        style={{
          marginTop: 40,
          display: "flex",
          justifyContent: "flex-end",
        }}
      >
        <div style={{ maxWidth: 360, width: "100%", textAlign: "right" }}>
          <div style={{ fontWeight: 800, marginBottom: 6 }}>
            Subtotal <span style={{ marginLeft: 16 }}>£{subtotal.toFixed(2)} GBP</span>
          </div>

          <p style={{ fontSize: 13, color: "#777", marginBottom: 20 }}>
            Tax included. <u>Shipping</u> calculated at checkout.
          </p>

          <button
            style={{
              background: "#ffc4e1",
              color: "white",
              border: "none",
              padding: "14px 28px",
              fontWeight: 800,
              cursor: "pointer",
            }}
          >
            CHECK OUT
          </button>
        </div>
      </div>
    </div>
  );
}
