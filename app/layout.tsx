import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Grownee - Track Your Spending, Monitor Your Income",
  description: "Track your spending, monitor your income, investments, net worth and optimize your financial future.",
  keywords: ["finance", "budgeting", "investment", "expense tracking", "money management"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
