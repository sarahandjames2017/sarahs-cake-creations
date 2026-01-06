"use client";

import { useEffect, useState } from "react";
import { supabase } from "@/app/lib/supabase";
import AddressForm from "../AddressForm";

export default function NewAddressPage() {
  const [userId, setUserId] = useState<string | null>(null);

  useEffect(() => {
  supabase.auth
    .getUser()
    .then((res: { data: { user: { id: string } | null } }) => {
      setUserId(res.data.user?.id ?? null);
    });
}, []);


  if (!userId) return null;

  return (
    <div className="container" style={{ padding: "80px 0" }}>
      <AddressForm userId={userId} />
    </div>
  );
}
