import { products } from "@/data/products";

export default function Home() {
  // show in-stock first
  const sorted = [...products].sort((a, b) => {
    const aInStock = !a.soldOut && a.quantityAvailable > 0;
    const bInStock = !b.soldOut && b.quantityAvailable > 0;
    return Number(bInStock) - Number(aInStock);
  });

  // just show a nice amount on the homepage
  const featured = sorted.slice(0, 8);

  return (
    <div>
      {/* HERO BANNER */}
      <div
        style={{
          position: "relative",
          height: 420,
          overflow: "hidden",
          background: "#fff",
        }}
      >
        <img
          src="/images/home-banner.png"
          alt="Sarah's Cake Creations"
          style={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
            display: "block",
          }}
        />

        {/* overlay */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            background:
              "linear-gradient(to bottom, rgba(0,0,0,0.35), rgba(0,0,0,0.15))",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            padding: 24,
          }}
        >
          <div style={{ textAlign: "center", maxWidth: 900 }}>
            <h1
              style={{
                margin: 0,
                color: "white",
                fontWeight: 900,
                fontSize: 44,
                letterSpacing: 1,
                textTransform: "uppercase",
                textShadow: "0 2px 10px rgba(0,0,0,0.35)",
              }}
            >
              Add any 3–8 slices to your basket to checkout
            </h1>

            <div style={{ marginTop: 14 }}>
              <a
                href="/products"
                style={{
                  display: "inline-block",
                  background: "#ff7fbf",
                  color: "white",
                  fontWeight: 800,
                  textDecoration: "none",
                  padding: "12px 22px",
                  borderRadius: 10,
                }}
              >
                Shop Products →
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* INFO SECTION */}
      <div
        className="container"
        style={{ padding: "44px 0", textAlign: "center" }}
      >
        <h2
          style={{
            margin: 0,
            fontSize: 28,
            fontWeight: 900,
            color: "#6b245d",
            letterSpacing: 1,
            textTransform: "uppercase",
          }}
        >
          Nationwide Delivery
        </h2>

        <p
          style={{
            margin: "14px auto 0",
            maxWidth: 820,
            fontFamily: "Georgia, 'Times New Roman', serif",
            fontSize: 18,
            fontWeight: 600,
            lineHeight: 1.8,
            color: "#6b245d",
          }}
        >
          Website restocked every Tuesday at 18:00 and Saturday at 12:00. The
          menu changes every restock so follow us on Instagram / Facebook to see
          what will be available.
        </p>

        <p
          style={{
            margin: "22px auto 0",
            maxWidth: 820,
            fontFamily: "Georgia, 'Times New Roman', serif",
            fontSize: 18,
            fontWeight: 600,
            lineHeight: 1.8,
            color: "#6b245d",
          }}
        >
          Add any <strong>3–8 slices</strong> to your basket to checkout. If you
          need to make an address change or add a personalised note to your
          order, please contact us at{" "}
          <strong>info@sarahscakecreations.co.uk</strong>.
        </p>
      </div>

      {/* PRODUCTS PREVIEW */}
      <div className="container" style={{ padding: "0 0 60px 0" }}>
        <h2
          style={{
            textAlign: "center",
            fontSize: 26,
            fontWeight: 900,
            color: "#6b245d",
            letterSpacing: 1,
            textTransform: "uppercase",
            marginBottom: 22,
          }}
        >
          Products
        </h2>

        <div className="productsGrid">
          {featured.map((product) => {
            const isSoldOut =
              product.soldOut || product.quantityAvailable === 0;

            return (
              <a
                key={product.id}
                href={`/products/${product.id}`}
                style={{ textDecoration: "none", color: "inherit" }}
              >
                <div
                  className="productCard"
                  style={{
                    background: "#fff",
                    border: "1px solid #eee",
                    borderRadius: 12,
                    overflow: "hidden",
                  }}
                >
                  <div style={{ position: "relative" }}>
                    <img
                      src={`/images/${product.image}`}
                      alt={product.name}
                      style={{
                        width: "100%",
                        height: 170,
                        objectFit: "cover",
                        display: "block",
                      }}
                    />

                    {isSoldOut && (
                      <span
                        style={{
                          position: "absolute",
                          top: 10,
                          left: 10,
                          background: "#ff4d94",
                          color: "white",
                          fontSize: 12,
                          fontWeight: 900,
                          padding: "4px 10px",
                          borderRadius: 999,
                        }}
                      >
                        SOLD OUT
                      </span>
                    )}
                  </div>

                  <div style={{ padding: 12 }}>
                    <div
                      style={{
                        fontWeight: 900,
                        color: "#6b245d",
                        lineHeight: 1.2,
                        marginBottom: 6,
                      }}
                    >
                      {product.name}
                    </div>

                    {!product.customOnly && (
                      <div style={{ color: "#6b245d", fontWeight: 800 }}>
                        £{product.price.toFixed(2)}
                      </div>
                    )}
                  </div>
                </div>
              </a>
            );
          })}
        </div>

        <div style={{ textAlign: "center", marginTop: 24 }}>
          <a
            href="/products"
            style={{
              display: "inline-block",
              background: "#6b245d",
              color: "white",
              fontWeight: 800,
              textDecoration: "none",
              padding: "12px 18px",
              borderRadius: 10,
            }}
          >
            View all products →
          </a>
        </div>
      </div>
    </div>
  );
}
