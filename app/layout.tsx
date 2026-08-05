import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "My Kuber | Watch Web Series & Earn Real Money",
  description: "Join My Kuber, the world's most rewarding entertainment platform. Watch exclusive short films, binge-watch web series, and earn real cash rewards for your time. High payouts, instant withdrawals.",
  keywords: ["earn money watching videos", "web series rewards", "passive income app", "india entertainment earning", "payouts for streaming"],
  authors: [{ name: "My Kuber Entertainment" }],
  openGraph: {
    title: "My Kuber - Watch & Earn Money",
    description: "The ultimate ad-reward platform. Watch 4K originals and get paid daily.",
    url: "https://mykuber.in",
    siteName: "My Kuber",
    locale: "en_IN",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full antialiased">
      <body className={`${inter.variable} min-h-full flex flex-col font-sans`}>
        <Header />
        <main className="flex-grow">{children}</main>
      </body>
    </html>
  );
}
