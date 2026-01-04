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
  console.log("🔥 FACEBOOK AUTH ROUTE HIT");

  // -------------------------
  // 1️⃣ Parse request body
  // -------------------------
  let accessToken: string | undefined;

  try {
    const body = await req.json();
    console.log("📦 RAW BODY:", body);
    accessToken = body.accessToken;
  } catch (err) {
    console.error("❌ Failed to parse JSON body", err);
    return NextResponse.json(
      { error: "Invalid JSON body" },
      { status: 400 }
    );
  }

  if (!accessToken) {
    console.error("❌ Missing access token");
    return NextResponse.json(
      { error: "Missing access token" },
      { status: 400 }
    );
  }

  console.log("✅ Access token received");

  // -------------------------
  // 2️⃣ Call Facebook API
  // -------------------------
  let rawText: string;

  try {
    const fbRes = await fetch(
      `https://graph.facebook.com/me?fields=id,name,email&access_token=${accessToken}`
    );

    rawText = await fbRes.text();
    console.log("📘 FACEBOOK RAW RESPONSE:", rawText);
  } catch (err) {
    console.error("❌ Facebook fetch failed", err);
    return NextResponse.json(
      { error: "Facebook request failed" },
      { status: 500 }
    );
  }

  let fbData: FacebookSuccess | FacebookError;

  try {
    fbData = JSON.parse(rawText);
  } catch (err) {
    console.error("❌ Failed to parse Facebook JSON", err);
    return NextResponse.json(
      { error: "Invalid Facebook response format" },
      { status: 401 }
    );
  }

  // 🚨 Facebook can return 200 OK with an error object
  if ("error" in fbData) {
    console.error("❌ Facebook API error:", fbData.error);
    return NextResponse.json(
      { error: fbData.error.message },
      { status: 401 }
    );
  }

  if (!fbData.id) {
    console.error("❌ Facebook response missing ID");
    return NextResponse.json(
      { error: "Invalid Facebook response" },
      { status: 401 }
    );
  }

  console.log("✅ Facebook user ID:", fbData.id);

  // -------------------------
  // 3️⃣ Prisma database logic
  // -------------------------
  console.log("🟡 BEFORE PRISMA");

  let user;

  try {
    user = await prisma.user.findUnique({
      where: { facebookId: fbData.id },
    });

    if (!user) {
      console.log("🟠 User not found, creating new user");

      user = await prisma.user.create({
        data: {
          facebookId: fbData.id,
          name: fbData.name ?? "",
          email: fbData.email ?? null,
          isAdmin: fbData.email === "info@sarahscakecreations.co.uk",
        },
      });

      console.log("🟢 USER CREATED:", user.id);
    } else {
      console.log("🟢 EXISTING USER FOUND:", user.id);
    }
  } catch (err) {
    console.error("❌ Prisma error", err);
    return NextResponse.json(
      { error: "Database error" },
      { status: 500 }
    );
  }

  // -------------------------
  // 4️⃣ Set session cookie
  // -------------------------
  try {
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

    console.log("🍪 Session cookie set");
  } catch (err) {
    console.error("❌ Failed to set cookie", err);
    return NextResponse.json(
      { error: "Failed to set session" },
      { status: 500 }
    );
  }

  // -------------------------
  // 5️⃣ Success
  // -------------------------
  console.log("✅ LOGIN COMPLETE:", user.id);

  return NextResponse.json({ success: true });
}
