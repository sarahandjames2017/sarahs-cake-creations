"use client";

import { Suspense } from "react";
import AuthConfirmClient from "./AuthConfirmClient";

export const dynamic = "force-dynamic";

export default function AuthConfirmPage() {
  return (
    <Suspense
      fallback={
        <div
          className="container"
          style={{ padding: "80px 0", textAlign: "center" }}
        >
          <h1 style={{ fontSize: 32 }}>Please wait</h1>
          <p style={{ marginTop: 12 }}>Loading confirmation…</p>
        </div>
      }
    >
      <AuthConfirmClient />
    </Suspense>
  );
}
