import type { Metadata } from "next";
import "./globals.css";

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
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
