"use client";

import { useEffect, useState } from "react";
import { supabase } from "@/app/lib/supabase";
import Link from "next/link";
import RequireAuth from "@/app/components/RequireAuth";

export default function AccountPage() {
  return (
    <RequireAuth>
      <AccountContent />
    </RequireAuth>
  );
}

/* 🔐 PROTECTED CONTENT */
function AccountContent() {
  const [user, setUser] = useState<any>(null);
  const [orders, setOrders] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadAccount() {
      const { data } = await supabase.auth.getUser();

      if (!data.user) {
        setLoading(false);
        return;
      }

      setUser(data.user);

      const { data: ordersData } = await supabase
        .from("orders")
        .select("*")
        .order("created_at", { ascending: false });

      setOrders(ordersData || []);
      setLoading(false);
    }

    loadAccount();
  }, []);

  if (loading) return null;
  if (!user) return null;

  return (
    <div className="container" style={{ padding: "80px 0" }}>
      <h1 style={{ textAlign: "center", fontSize: 42 }}>My Account</h1>

      <div style={{ textAlign: "center", marginTop: 10 }}>
        <button
          onClick={() => supabase.auth.signOut()}
          style={{
            background: "none",
            border: "none",
            textDecoration: "underline",
            cursor: "pointer",
          }}
        >
          Log out
        </button>
      </div>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: 80,
          marginTop: 80,
        }}
      >
        {/* ORDER HISTORY */}
        <div>
          <h2>ORDER HISTORY</h2>

          {orders.length === 0 ? (
            <p>You haven’t placed any orders yet.</p>
          ) : (
            <div style={{ marginTop: 20 }}>
              {orders.map((order) => (
                <div
                  key={order.id}
                  style={{
                    marginBottom: 16,
                    paddingBottom: 16,
                    borderBottom: "1px solid #eee",
                  }}
                >
                  <strong>Order #{order.id.slice(0, 8)}</strong>
                  <p>£{order.total?.toFixed(2)} GBP</p>
                  <p>Status: {order.status}</p>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* ACCOUNT DETAILS */}
        <div>
          <h2>ACCOUNT DETAILS</h2>

          <p>{user.email}</p>
          <p>United Kingdom</p>

          <Link href="/account/addresses">
            <button
              style={{
                marginTop: 20,
                background: "#ffc6e6",
                border: "none",
                padding: "12px 22px",
                fontWeight: 700,
                cursor: "pointer",
              }}
            >
              VIEW ADDRESSES (1)
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}
