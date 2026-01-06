export default function RefundPolicy() {
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
        Refund policy
      </h1>

      {/* REFUNDS */}
      <p
        style={{
          fontSize: 18,
          fontWeight: 700,
          marginBottom: 18,
        }}
      >
        Refund Policy
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
        As our products are food and cannot be resold once they have been shipped,
        we do not offer refunds. We may offer replacements in certain situations,
        such as if your bakes arrive damaged or there has been a major delivery
        delay. Slight damage is not considered acceptable for replacement.
        <br />
        <br />
        Disliking a flavour or product does not constitute a refund, as taste is
        subjective. Issues caused by incorrect delivery addresses do not qualify
        for a refund or replacement.
        <br />
        <br />
        For any replacements or refunds to be issued, the original parcel must be
        returned to us.
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
        As we cannot make claims with Royal Mail for lost or damaged parcels, we
        may offer gift cards or discount codes for delayed deliveries. This applies
        only to parcels that have not arrived within <strong>7 days from dispatch</strong>.
      </p>

      <p
        style={{
          fontSize: 17,
          lineHeight: 1.8,
          marginBottom: 40,
          color: "#555",
          fontWeight: 500,
        }}
      >
        Please note: we cannot see any additional information beyond the tracking
        details provided to you. Please wait at least <strong>7 days from dispatch</strong>{" "}
        before contacting us regarding delayed deliveries.
      </p>

      {/* CANCELLATION */}
      <p
        style={{
          fontSize: 18,
          fontWeight: 800,
          marginBottom: 18,
        }}
      >
        Cancellation Policy
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
        If you have placed a postal order and wish to cancel or change the delivery
        address, this must be done within <strong>24 hours</strong> of placing your
        order. Orders cannot be cancelled after this time, as items are baked to
        order and are perishable.
        <br />
        <br />
        To cancel or amend your order, please email{" "}
        <strong>info@sarahscakecreations.co.uk</strong> with the subject line{" "}
        <strong>“Cancel order”</strong> or <strong>“Amend order”</strong> so we can
        action it as quickly as possible.
        <br />
        <br />
        Refunds may take <strong>1–10 working days</strong> to process.
      </p>

      <p
        style={{
          fontSize: 16,
          color: "#666",
          fontWeight: 600,
        }}
      >
        By entering your information on our website, you agree to our policies.
      </p>
    </div>
  );
}
