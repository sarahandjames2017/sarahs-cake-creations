export default function FAQsPage() {
  return (
    <div className="container" style={{ padding: "80px 0", maxWidth: 900 }}>
      {/* PAGE TITLE */}
      <h1
        style={{
          textAlign: "center",
          fontSize: 42,
          fontWeight: 900,
          color: "#6b245d",
          marginBottom: 60,
          letterSpacing: 1,
          textTransform: "uppercase",
        }}
      >
        FAQs
      </h1>

      {/* FAQ ITEM */}
      <div style={{ marginBottom: 40 }}>
        <h3 style={questionStyle}>
          Why is everything out of stock?
        </h3>
        <p style={answerStyle}>
          Our website gets restocked twice a week — Tuesday at 18:00 and Saturday
          at 12:00. Stock can last anywhere from an hour to 8 hours depending on
          how busy it is. We always recommend being on the website at the restock
          time to guarantee getting some baked goods.
        </p>
      </div>

      <div style={{ marginBottom: 40 }}>
        <h3 style={questionStyle}>
          How many slices can I order at a time?
        </h3>
        <p style={answerStyle}>
          The minimum order quantity is 3 slices and the maximum is 8 per
          checkout. You can place multiple checkouts per restock, however you
          will need to pay shipping for each order.
        </p>
      </div>

      <div style={{ marginBottom: 40 }}>
        <h3 style={questionStyle}>
          How much is everything?
        </h3>
        <p style={answerStyle}>
          Each slice ranges from £3.25–£4.50. Shipping for 24h tracked delivery
          is £4.99.
        </p>
      </div>

      <div style={{ marginBottom: 40 }}>
        <h3 style={questionStyle}>
          When will my order be shipped?
        </h3>
        <p style={answerStyle}>
          All orders are baked after you place your order and are shipped within
          3–4 working days.
        </p>
      </div>

      <div style={{ marginBottom: 40 }}>
        <h3 style={questionStyle}>
          How long do items last?
        </h3>
        <p style={answerStyle}>
          Our slices have a 7 day shelf life from the dispatch date. All items
          can also be frozen.
        </p>
      </div>

      <div style={{ marginBottom: 40 }}>
        <h3 style={questionStyle}>
          Why haven’t I had a confirmation for my order?
        </h3>
        <p style={answerStyle}>
          Please check your email inbox and junk folder. If it’s not there, you
          may not have entered an email address at checkout. If the money has
          left your bank account, then we have your order.
          <br /><br />
          Confirmation emails are sent automatically once an order is placed. If
          you haven’t received one, please contact us and we can send it
          manually. Once received, please check all information is correct
          (house number / postcode). If we are not informed of incorrect details
          before dispatch, we cannot be held responsible for failed deliveries.
        </p>
      </div>
    </div>
  );
}

/* 🔒 Shared styles — matches Shipping & Refund pages */
const questionStyle = {
  fontFamily: "Georgia, 'Times New Roman', serif",
  fontSize: 22,
  fontWeight: 700,
  color: "#6b245d",
  marginBottom: 10,
};

const answerStyle = {
  fontFamily: "Georgia, 'Times New Roman', serif",
  fontSize: 17,
  fontWeight: 500,
  lineHeight: 1.8,
  color: "#666",
};
