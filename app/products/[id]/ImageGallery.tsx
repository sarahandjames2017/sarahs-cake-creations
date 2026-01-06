"use client";

import { useState } from "react";

type Props = {
  images: string[];
  alt: string;
};

export default function ImageGallery({ images, alt }: Props) {
  const [active, setActive] = useState(images[0]);

  return (
    <div>
      {/* MAIN IMAGE */}
      <div
        style={{
          width: "100%",
          maxWidth: 520,
          marginBottom: 20,
        }}
      >
        <img
          src={`/images/${active}`}
          alt={alt}
          style={{
            width: "100%",
            borderRadius: 12,
            objectFit: "cover",
          }}
        />
      </div>

      {/* THUMBNAILS — GRID (6 PER ROW) */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fill, minmax(70px, 1fr))",
          gap: 10,
          maxWidth: 520,
        }}
      >
        {images.map((img) => (
          <button
            key={img}
            onClick={() => setActive(img)}
            style={{
              padding: 0,
              border:
                img === active
                  ? "2px solid #ff7fbf"
                  : "1px solid #ddd",
              borderRadius: 8,
              cursor: "pointer",
              background: "none",
            }}
          >
            <img
              src={`/images/${img}`}
              alt={alt}
              style={{
                width: "100%",
                height: 80,
                objectFit: "cover",
                borderRadius: 6,
                display: "block",
              }}
            />
          </button>
        ))}
      </div>
    </div>
  );
}
