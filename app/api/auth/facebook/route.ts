import { NextResponse } from "next/server";
import { cookies } from "next/headers";
import prisma from "@/lib/prisma";

export async function POST(req: Request) {
  const { accessToken } = await req.json();

  const fbRes = await fetch(
    `https://graph.facebook.com/me?fields=id,name,email&access_token=${accessToken}`
  );

  if (!fbRes.ok) {
    return NextResponse.json(
      { error: "Facebook request failed" },
      { status: 401 }
    );
  }

  const fbUser: {
    id?: string;
    name?: string;
    email?: string;
  } = await fbRes.json();

  if (!fbUser.id) {
    return NextResponse.json(
      { error: "Invalid token" },
      { status: 401 }
    );
  }

  let user = await prisma.user.findUnique({
    where: { facebookId: fbUser.id },
  });

  // ✅ FIXED: create user ONLY if not found
  if (!user) {
    user = await prisma.user.create({
      data: {
        facebookId: fbUser.id,
        name: fbUser.name ?? "",
        email: fbUser.email,
        isAdmin: fbUser.email === "info@sarahscakecreations.co.uk",
      },
    });
  }

  const cookieStore = await cookies();

  cookieStore.set(
    "session",
    JSON.stringify({ userId: user.id }),
    {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: "lax",
      path: "/",
    }
  );

  return NextResponse.json({ success: true });
}
