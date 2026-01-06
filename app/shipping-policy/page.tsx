export default function ShippingPolicy() {
  return (
    <div
      className="container"
      style={{
        padding: "70px 0",
        maxWidth: 720,
        fontFamily:
          "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif",
      }}
    >
      <h1
        style={{
          fontSize: 44,
          fontWeight: 900,
          marginBottom: 40,
        }}
      >
        Shipping policy
      </h1>

      <p
        style={{
          fontSize: 18,
          fontWeight: 600,
          lineHeight: 1.8,
          marginBottom: 28,
          color: "#444",
        }}
      >
        Please allow up to <strong>3–4 working days</strong> for dispatch from the
        day you place your order.
      </p>

      <p
        style={{
          fontSize: 17,
          lineHeight: 1.8,
          marginBottom: 28,
          color: "#555",
          fontWeight: 500,
        }}
      >
        Please ensure all information is correct{" "}
        <strong>(Address / Email / Mobile Number)</strong> when ordering. Please
        check your email confirmation (this may arrive in spam or junk).
        <br />
        <br />
        If any information is incorrect, we cannot be held responsible for delays
        or failed deliveries caused by incorrect details. If you use Royal Mail
        tracking to re-route, divert, or select{" "}
        <em>“deliver to a safe place or neighbour”</em>, we cannot be held
        responsible if this causes a delay with delivery.
      </p>

      <p
        style={{
          fontSize: 17,
          lineHeight: 1.8,
          marginBottom: 28,
          color: "#555",
          fontWeight: 500,
        }}
      >
        If any information is incorrect or you need to change an address, this can
        be amended <strong>only if it is more than 24 hours before dispatch</strong>.
        <br />
        <br />
        Please email us at{" "}
        <strong>info@sarahscakecreations.co.uk</strong> with the subject{" "}
        <strong>“Address Change”</strong>.
        <br />
        Include your order number or the full name used when ordering, the current
        delivery address, followed by the <strong>NEW full address</strong>.
      </p>

      <p
        style={{
          fontSize: 17,
          lineHeight: 1.8,
          color: "#555",
          fontWeight: 600,
        }}
      >
        <strong>December delivery delays:</strong>
        <br />
        Any orders placed during December (typically from Black Friday in
        November) may experience longer delivery times.
      </p>
    </div>
  );
}
