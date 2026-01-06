"use client";

import { useState } from "react";
import { supabase } from "@/app/lib/supabase";
import { useRouter } from "next/navigation";

type Props = {
  userId: string;
  address?: any;
};

export default function AddressForm({ userId, address }: Props) {
  const router = useRouter();
  const [loading, setLoading] = useState(false);

  const [form, setForm] = useState({
    first_name: address?.first_name || "",
    last_name: address?.last_name || "",
    company: address?.company || "",
    address1: address?.address1 || "",
    address2: address?.address2 || "",
    city: address?.city || "",
    postcode: address?.postcode || "",
    country: address?.country || "United Kingdom",
    phone: address?.phone || "",
    is_default: address?.is_default || false,
  });

  function update(key: string, value: any) {
    setForm((prev) => ({ ...prev, [key]: value }));
  }

  async function saveAddress() {
    setLoading(true);

    // If setting default → unset others first
    if (form.is_default) {
      await supabase
        .from("addresses")
        .update({ is_default: false })
        .eq("user_id", userId);
    }

    if (address) {
      await supabase
        .from("addresses")
        .update(form)
        .eq("id", address.id);
    } else {
      await supabase.from("addresses").insert({
        ...form,
        user_id: userId,
      });
    }

    router.push("/account/addresses");
  }

  return (
    <div style={{ maxWidth: 700, margin: "0 auto" }}>
      <h2>{address ? "Edit Address" : "Add New Address"}</h2>

      {[
        ["First name", "first_name"],
        ["Last name", "last_name"],
        ["Company", "company"],
        ["Address", "address1"],
        ["Apartment, suite, etc.", "address2"],
        ["City", "city"],
        ["Postcode", "postcode"],
        ["Phone", "phone"],
      ].map(([label, key]) => (
        <div key={key} style={{ marginBottom: 14 }}>
          <label>{label}</label>
          <input
            value={(form as any)[key]}
            onChange={(e) => update(key, e.target.value)}
            style={{ width: "100%", padding: 10 }}
          />
        </div>
      ))}

      <label>
        <input
          type="checkbox"
          checked={form.is_default}
          onChange={(e) => update("is_default", e.target.checked)}
        />{" "}
        Set as default address
      </label>

      <button
        onClick={saveAddress}
        disabled={loading}
        style={{
          marginTop: 24,
          background: "#ffc6e6",
          border: "none",
          padding: "14px 26px",
          fontWeight: 800,
          cursor: "pointer",
        }}
      >
        {loading ? "Saving..." : "Save Address"}
      </button>
    </div>
  );
}
