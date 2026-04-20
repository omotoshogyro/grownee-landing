"use client";

const items = [
  {
    label: "Built for real-world finance",
    icon: (
      <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
        <path
          d="M8 1l1.8 3.6L14 5.4l-3 2.9.7 4.1L8 10.2 4.3 12.4 5 8.3 2 5.4l4.2-.8L8 1z"
          fill="white"
          opacity="0.9"
        />
      </svg>
    ),
  },
  {
    label: "Bank-grade data security",
    icon: (
      <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
        <rect x="2" y="6" width="12" height="8" rx="2" stroke="white" strokeWidth="1.4" />
        <path d="M5 6V4a3 3 0 016 0v2" stroke="white" strokeWidth="1.4" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    label: "Real-time transaction sync",
    icon: (
      <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
        <path
          d="M8 2a6 6 0 100 12A6 6 0 008 2zM8 5v4l2.5 1.5"
          stroke="white"
          strokeWidth="1.4"
          strokeLinecap="round"
        />
      </svg>
    ),
  },
  {
    label: "Available worldwide",
    icon: (
      <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
        <path
          d="M14 7c0 4.4-6 8-6 8S2 11.4 2 7a6 6 0 1112 0z"
          stroke="white"
          strokeWidth="1.4"
        />
        <circle cx="8" cy="7" r="2" stroke="white" strokeWidth="1.4" />
      </svg>
    ),
  },
];

export default function TrustBar() {
  return (
    <div
      className="flex items-center justify-center flex-wrap gap-5 sm:gap-10 px-[5%] py-5"
      style={{ background: "#15B369" }}
    >
      {items.map((item, i) => (
        <div key={i} className="flex items-center gap-2.5">
          {i > 0 && (
            <div
              className="hidden sm:block w-px h-5 mr-5"
              style={{ background: "rgba(255,255,255,0.2)" }}
            />
          )}
          <span className="opacity-90">{item.icon}</span>
          <span
            className="text-[0.85rem] font-medium"
            style={{ color: "rgba(255,255,255,0.85)" }}
          >
            {item.label}
          </span>
        </div>
      ))}
    </div>
  );
}
