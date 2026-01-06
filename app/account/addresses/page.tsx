"use client";

import Link from "next/link";
import RequireAuth from "@/app/components/RequireAuth";

export default function AddressesPage() {
  return (
    <RequireAuth>
      <div className="container" style={{ padding: "80px 0" }}>
        <h1 style={{ textAlign: "center", fontSize: 42 }}>
          Your Addresses
        </h1>

        <div style={{ textAlign: "center", marginTop: 10 }}>
          <Link href="/account">Return to Account Details</Link>
        </div>

        <div style={{ textAlign: "center", marginTop: 30 }}>
          <button
            style={{
              background: "#ffc6e6",
              border: "none",
              padding: "12px 22px",
              fontWeight: 700,
              cursor: "pointer",
            }}
          >
            ADD A NEW ADDRESS
          </button>
        </div>

        <div style={{ marginTop: 60, textAlign: "center" }}>
          <h3>DEFAULT</h3>
          <p>James Parr</p>
          <p>United Kingdom</p>

          <div style={{ marginTop: 12 }}>
            <Link href="/account/addresses/1">
              <button style={{ marginRight: 10 }}>EDIT</button>
            </Link>

            <button>DELETE</button>
          </div>
        </div>
      </div>
    </RequireAuth>
  );
}
