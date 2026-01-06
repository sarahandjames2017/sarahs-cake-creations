"use client";

import { useEffect, useState } from "react";
import { supabase } from "@/app/lib/supabase";
import AddressForm from "../../AddressForm";

export default function EditAddressPage({ params }: any) {
  const [address, setAddress] = useState<any>(null);
  const [userId, setUserId] = useState<string | null>(null);

  useEffect(() => {
    async function load() {
      const { data: auth } = await supabase.auth.getUser();
      setUserId(auth.user?.id || null);

      const { data } = await supabase
        .from("addresses")
        .select("*")
        .eq("id", params.id)
        .single();

      setAddress(data);
    }

    load();
  }, [params.id]);

  if (!address || !userId) return null;

  return (
    <div className="container" style={{ padding: "80px 0" }}>
      <AddressForm userId={userId} address={address} />
    </div>
  );
}
