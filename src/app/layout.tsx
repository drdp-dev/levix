import type { Metadata } from "next";
import { Expletus_Sans } from "next/font/google";
import "./globals.css";

const expletus = Expletus_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-expletus",
});

export const metadata: Metadata = {
  title: "Levix - Health Evaluation Presenter",
  description: "Interactive presentation on health program evaluation",
  appleWebApp: {
    title: "LEVIX",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${expletus.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
