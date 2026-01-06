"use client";

import { useEffect, useState } from "react";
import { supabase } from "@/app/lib/supabase";

export default function useUser() {
  const [user, setUser] = useState<any>(null);

  useEffect(() => {
    const loadUser = async () => {
      const { data, error } = await supabase.auth.getUser();

      if (error) {
        setUser(null);
        return;
      }

      setUser(data.user);
    };

    loadUser();
  }, []);

  return user;
}
