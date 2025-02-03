import "./globals.css";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"], weight: ["400", "700"], display: "swap" });

export const metadata = {
  title: "DP Insurance",
  description: "Custom insurance solutions",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-gray-100 text-gray-900`}>
        {children}
      </body>
    </html>
  );
}
