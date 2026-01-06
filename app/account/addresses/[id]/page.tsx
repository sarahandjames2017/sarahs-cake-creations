"use client";

import Link from "next/link";

export default function EditAddressPage() {
  return (
    <div className="container" style={{ padding: "80px 0", maxWidth: 800 }}>
      <h1>EDIT ADDRESS</h1>

      <form style={{ display: "grid", gap: 18 }}>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 20 }}>
          <input placeholder="First name" />
          <input placeholder="Last name" />
        </div>

        <input placeholder="Company" />
        <input placeholder="Address" />
        <input placeholder="Apartment, suite, etc." />

        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 20 }}>
          <input placeholder="City" />
          <select>
            <option>United Kingdom</option>
          </select>
        </div>

        <select>
          <option>British Forces</option>
        </select>

        <input placeholder="Postcode" />
        <input placeholder="Phone" />

        <label>
          <input type="checkbox" /> Set as default address
        </label>

        <button
          style={{
            background: "#ffc6e6",
            border: "none",
            padding: "12px",
            fontWeight: 700,
          }}
        >
          UPDATE ADDRESS
        </button>

        <Link href="/account/addresses">Cancel</Link>
      </form>
    </div>
  );
}
