import { NextResponse } from "next/server";
import { cookies } from "next/headers";
import prisma from "@/lib/prisma";

type FacebookSuccess = {
  id: string;
  name?: string;
  email?: string;
};

type FacebookError = {
  error: {
    message: string;
    type: string;
    code?: number;
  };
};

export async function POST(req: Request) {
  console.log("🔥 /api/auth/facebook HIT");

  let accessToken: string | undefined;

  try {
    const body = await req.json();
    accessToken = body.accessToken;
    console.log("📦 accessToken received:", !!accessToken);
  } catch {
    return NextResponse.json(
      { error: "Invalid JSON body" },
      { status: 400 }
    );
  }

  if (!accessToken) {
    return NextResponse.json(
      { error: "Missing access token" },
      { status: 400 }
    );
  }

  const fbRes = await fetch(
    `https://graph.facebook.com/me?fields=id,name,email&access_token=${accessToken}`
  );

  const fbData = (await fbRes.json()) as FacebookSuccess | FacebookError;

  // 🚨 Facebook can return 200 with an error object
  if ("error" in fbData) {
    console.error("❌ Facebook API error:", fbData.error);
    return NextResponse.json(
      { error: fbData.error.message },
      { status: 401 }
    );
  }

  if (!fbData.id) {
    return NextResponse.json(
      { error: "Invalid Facebook response" },
      { status: 401 }
    );
  }

  let user = await prisma.user.findUnique({
    where: { facebookId: fbData.id },
  });

  if (!user) {
    user = await prisma.user.create({
      data: {
        facebookId: fbData.id,
        name: fbData.name ?? "",
        email: fbData.email,
        isAdmin: fbData.email === "info@sarahscakecreations.co.uk",
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

  console.log("✅ User logged in:", user.id);

  return NextResponse.json({ success: true });
}
