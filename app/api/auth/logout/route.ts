import { NextResponse } from "next/server";

export async function POST() {
  const response = NextResponse.json({ success: true });

  response.cookies.set({
    name: "session",
    value: "",
    maxAge: 0, // 🔑 deletes cookie
    path: "/",
    domain: ".sarahscakecreations.co.uk",
    httpOnly: true,
    secure: true,
    sameSite: "none",
  });

  console.log("🚪 User logged out");

  return response;
}
