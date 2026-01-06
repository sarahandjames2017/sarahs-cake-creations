import { products } from "@/data/products";

export default function ProductsPage() {
  const sorted = [...products].sort((a, b) => {
    const aInStock = !a.soldOut && a.quantityAvailable > 0;
    const bInStock = !b.soldOut && b.quantityAvailable > 0;
    return Number(bInStock) - Number(aInStock);
  });

  return (
    <div
      style={{
        maxWidth: 1400,
        margin: "0 auto",
        padding: "48px 24px",
      }}
    >
      {/* PAGE TITLE */}
      <h1
        style={{
          fontSize: 36,
          fontWeight: 800,
          textAlign: "center",
          marginBottom: 40,
        }}
      >
        Products
      </h1>

      {/* PRODUCT GRID — SHOPIFY STYLE */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fill, minmax(220px, 1fr))",
          gap: 32,
        }}
      >
        {sorted.map((product) => {
          const isSoldOut =
            product.soldOut || product.quantityAvailable === 0;

          return (
            <div
              key={product.id}
              style={{
                display: "flex",
                flexDirection: "column",
              }}
            >
              {/* CLICKABLE IMAGE */}
              <a
                href={`/products/${product.id}`}
                style={{ textDecoration: "none", color: "inherit" }}
              >
                <div
                  style={{
                    position: "relative",
                    width: "100%",
                    aspectRatio: "1 / 1",
                    overflow: "hidden",
                    borderRadius: 6,
                    background: "#f5f5f5",
                  }}
                >
                  <img
                    src={`/images/${product.image}`}
                    alt={product.name}
                    style={{
                      width: "100%",
                      height: "100%",
                      objectFit: "cover",
                    }}
                  />

                  {isSoldOut && (
                    <span
                      style={{
                        position: "absolute",
                        top: 10,
                        left: 10,
                        background: "#ff4d94",
                        color: "#fff",
                        fontSize: 11,
                        fontWeight: 700,
                        padding: "4px 8px",
                        borderRadius: 12,
                      }}
                    >
                      SOLD OUT
                    </span>
                  )}
                </div>
              </a>

              {/* PRODUCT INFO */}
              <div style={{ marginTop: 12 }}>
                <a
                  href={`/products/${product.id}`}
                  style={{
                    fontWeight: 700,
                    fontSize: 15,
                    display: "block",
                    textDecoration: "none",
                    color: "#333",
                    marginBottom: 4,
                  }}
                >
                  {product.name}
                </a>

                {!product.customOnly && (
                  <>
                    <div
                      style={{
                        fontSize: 14,
                        fontWeight: 600,
                        color: "#777",
                      }}
                    >
                      £{product.price.toFixed(2)}
                    </div>
                  </>
                )}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
