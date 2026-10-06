import { NextRequest, NextResponse } from "next/server";
import { APP_STORE_URL, PLAY_STORE_URL, detectPlatform } from "@/lib/appStores";

export const dynamic = "force-dynamic";

// Shareable link (e.g. for social bios): sends phones to their app store,
// everyone else to the download badges on the home page.
export function GET(request: NextRequest) {
  const platform = detectPlatform(request.headers.get("user-agent") ?? "");

  if (platform === "ios") return NextResponse.redirect(APP_STORE_URL);
  if (platform === "android") return NextResponse.redirect(PLAY_STORE_URL);
  return NextResponse.redirect(new URL("/#download", request.url));
}
