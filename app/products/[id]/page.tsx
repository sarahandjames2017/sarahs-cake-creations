"use client";

import { products } from "@/data/products";
import { notFound, useParams } from "next/navigation";
import { useState } from "react";
import { useCart } from "@/app/context/CartContext";
import ImageGallery from "./ImageGallery";

export default function ProductPage() {
  const params = useParams();
  const id = params.id as string;

  const product = products.find((p) => p.id === id);
  if (!product) notFound();

  const { addItem } = useCart();
  const [quantity, setQuantity] = useState(1);

  // ✅ SAFE IMAGE NORMALIZATION
  const images: string[] =
    "images" in product && Array.isArray(product.images)
      ? product.images
      : product.image
      ? [product.image]
      : [];

  return (
    <div className="container" style={{ padding: "40px 0" }}>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: 40,
          alignItems: "start",
        }}
      >
        {/* IMAGE GALLERY */}
        <ImageGallery images={images} alt={product.name} />

        {/* DETAILS */}
        <div
          style={{
            fontFamily:
              "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif",
          }}
        >
          <h1 style={{ fontSize: 34 }}>{product.name}</h1>

          {/* REGULAR PRODUCTS ONLY */}
          {!product.customOnly && (
            <>
              <p style={{ fontSize: 22, fontWeight: 700 }}>
                £{product.price.toFixed(2)}
              </p>

              {/* TAX + SHIPPING */}
              <p style={{ fontSize: 14, color: "#777", marginTop: 6 }}>
                Tax included.{" "}
                <a
                  href="/shipping-policy"
                  style={{ textDecoration: "underline", color: "#777" }}
                >
                  Shipping
                </a>{" "}
                calculated at checkout.
              </p>

              {/* QUANTITY */}
              <div style={{ marginTop: 20 }}>
                <label
                  style={{
                    display: "block",
                    fontSize: 14,
                    fontWeight: 600,
                    marginBottom: 6,
                  }}
                >
                  Quantity
                </label>
                <input
                  type="number"
                  min={1}
                  value={quantity}
                  onChange={(e) =>
                    setQuantity(Math.max(1, Number(e.target.value)))
                  }
                  style={{
                    width: 80,
                    padding: "8px",
                    fontSize: 16,
                    borderRadius: 4,
                    border: "1px solid #ccc",
                  }}
                />
              </div>
            </>
          )}

          {/* CUSTOM CAKES = ENQUIRY ONLY */}
          {product.customOnly ? (
            <a
              href="/contact"
              style={{
                display: "inline-block",
                marginTop: 24,
                background: "#ff7fbf",
                color: "#fff",
                padding: "12px 26px",
                borderRadius: 8,
                fontWeight: 700,
                textDecoration: "none",
              }}
            >
              Enquire about this cake
            </a>
          ) : (
            <button
              onClick={() =>
                addItem({
                  id: product.id,
                  name: product.name,
                  image: images[0] ?? "", // ✅ SAFE – NO TS ERROR
                  price: product.price,
                  quantity,
                })
              }
              style={{
                marginTop: 24,
                background: "#ff7fbf",
                color: "#fff",
                padding: "12px 26px",
                borderRadius: 8,
                fontWeight: 700,
                border: "none",
                cursor: "pointer",
              }}
            >
              Add to basket
            </button>
          )}

          {/* DESCRIPTION */}
          {product.description && (
            <p
              style={{
                marginTop: 32,
                fontSize: 17,
                lineHeight: 1.75,
                color: "#444",
                maxWidth: 520,
                fontWeight: 500,
              }}
            >
              {product.description}
            </p>
          )}

          {/* ALLERGENS */}
          <div
            style={{
              marginTop: 48,
              paddingTop: 28,
              borderTop: "1px solid #e5e5e5",
              maxWidth: 520,
            }}
          >
            <p style={{ fontSize: 20, fontWeight: 800 }}>Allergens</p>

            <p style={{ fontSize: 16, fontWeight: 700 }}>
              WHEAT, GLUTEN, SOYA, DAIRY, EGG, HAZELNUTS, BARLEY.
            </p>

            <p style={{ marginTop: 14, fontSize: 16, fontWeight: 600 }}>
              Suitable for Vegetarians &amp; Halal
            </p>

            <p style={{ marginTop: 14, fontSize: 15, color: "#666" }}>
              All our products are made in an environment that handles{" "}
              <strong>
                NUTS (Hazelnuts, Peanuts, Almonds & Pistachio), EGG, DAIRY, WHEAT,
                SOYA, BARLEY
              </strong>
              . We cannot guarantee absence of traces.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
