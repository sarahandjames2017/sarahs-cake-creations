import "server-only";

import { cookies } from "next/headers";
import prisma from "./prisma";

type SessionData = {
  userId: string;
};

export async function getSessionUser() {
  const cookieStore = await cookies();
  const session = cookieStore.get("session");

  if (!session) {
    return null;
  }

  let userId: string;

  try {
    const parsed = JSON.parse(session.value) as SessionData;

    if (!parsed.userId) {
      return null;
    }

    userId = parsed.userId;
  } catch {
    return null;
  }

  return prisma.user.findUnique({
    where: { id: userId },
  });
}
