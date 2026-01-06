"use client";

import { useEffect, useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { supabase } from "@/app/lib/supabase";

export default function AuthConfirmClient() {
  const router = useRouter();
  const params = useSearchParams();
  const [message, setMessage] = useState("Confirming your account...");

  useEffect(() => {
    const run = async () => {
      const token_hash = params.get("token_hash");
      const type = params.get("type") as
        | "signup"
        | "invite"
        | "recovery"
        | "magiclink"
        | "email_change"
        | null;

      const next = params.get("next") || "/account";

      if (!token_hash || !type) {
        setMessage("Invalid or expired confirmation link.");
        return;
      }

      const { error } = await supabase.auth.verifyOtp({
        token_hash,
        type,
      });

      if (error) {
        setMessage(error.message || "Confirmation failed.");
        return;
      }

      router.replace(next);
    };

    run();
  }, [params, router]);

  return (
    <div className="container" style={{ padding: "80px 0", textAlign: "center" }}>
      <h1 style={{ fontSize: 32 }}>Please wait</h1>
      <p style={{ marginTop: 12 }}>{message}</p>
    </div>
  );
}
