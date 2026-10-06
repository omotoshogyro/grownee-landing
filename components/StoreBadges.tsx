"use client";

import { useEffect, useState } from "react";
import {
  APP_STORE_URL,
  PLAY_STORE_URL,
  Platform,
  detectPlatform,
} from "@/lib/appStores";

const badgeClass =
  "inline-flex items-center gap-2.5 h-[52px] pl-3.5 pr-5 rounded-xl bg-black text-white border transition-all hover:-translate-y-0.5";

function AppleLogo() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M12.152 6.896c-.948 0-2.415-1.078-3.96-1.04-2.04.027-3.91 1.183-4.961 3.014-2.117 3.675-.546 9.103 1.519 12.09 1.013 1.454 2.208 3.09 3.792 3.039 1.52-.065 2.09-.987 3.935-.987 1.831 0 2.35.987 3.96.948 1.637-.026 2.676-1.48 3.676-2.948 1.156-1.688 1.636-3.325 1.662-3.415-.039-.013-3.182-1.221-3.22-4.857-.026-3.04 2.48-4.494 2.597-4.559-1.429-2.09-3.623-2.324-4.39-2.376-2-.156-3.675 1.09-4.61 1.09zM15.53 3.83c.843-1.012 1.4-2.427 1.245-3.83-1.207.052-2.662.805-3.532 1.818-.78.896-1.454 2.338-1.273 3.714 1.338.104 2.715-.688 3.559-1.701" />
    </svg>
  );
}

function PlayLogo() {
  return (
    <svg width="22" height="24" viewBox="2 1 20 22" aria-hidden="true">
      <path d="M3 1.6 13 12 3 22.4Z" fill="#00C3FF" />
      <path d="M3 1.6 16.6 9.46 13 12Z" fill="#00E676" />
      <path d="M16.6 9.46 21 12 16.6 14.54 13 12Z" fill="#FFC400" />
      <path d="M13 12 16.6 14.54 3 22.4Z" fill="#FF3D57" />
    </svg>
  );
}

export default function StoreBadges({ dark = false }: { dark?: boolean }) {
  const [platform, setPlatform] = useState<Platform>("other");

  useEffect(() => {
    setPlatform(detectPlatform(navigator.userAgent, navigator.maxTouchPoints));
  }, []);

  const borderColor = dark ? "rgba(255,255,255,0.3)" : "#A6A6A6";

  return (
    <>
      {platform !== "android" && (
        <a
          href={APP_STORE_URL}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Download Grownee on the App Store"
          className={badgeClass}
          style={{ borderColor }}
        >
          <AppleLogo />
          <span className="flex flex-col items-start leading-none text-left">
            <span className="text-[0.62rem] font-medium">Download on the</span>
            <span className="text-[1.15rem] font-semibold tracking-tight">App Store</span>
          </span>
        </a>
      )}
      {platform !== "ios" && (
        <a
          href={PLAY_STORE_URL}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Get Grownee on Google Play"
          className={badgeClass}
          style={{ borderColor }}
        >
          <PlayLogo />
          <span className="flex flex-col items-start leading-none text-left">
            <span className="text-[0.62rem] font-medium uppercase">Get it on</span>
            <span className="text-[1.15rem] font-semibold tracking-tight">Google Play</span>
          </span>
        </a>
      )}
    </>
  );
}
