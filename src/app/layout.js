import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "JM.Dev Portfolio",
  description: "This is a personal portfolio",
  icons: [
    {
      url: "/logo.png",
      href: "/logo.png"
    }
  ]
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
