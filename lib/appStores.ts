export const APP_STORE_URL =
  "https://apps.apple.com/us/app/grownee-budget-tracker/id6757441822";
export const PLAY_STORE_URL =
  "https://play.google.com/store/apps/details?id=com.grownee.app";

export type Platform = "ios" | "android" | "other";

// iPadOS reports a desktop Mac user agent, so touch support is used to tell them apart.
export function detectPlatform(userAgent: string, maxTouchPoints = 0): Platform {
  if (/android/i.test(userAgent)) return "android";
  if (/iphone|ipad|ipod/i.test(userAgent)) return "ios";
  if (/macintosh/i.test(userAgent) && maxTouchPoints > 1) return "ios";
  return "other";
}
