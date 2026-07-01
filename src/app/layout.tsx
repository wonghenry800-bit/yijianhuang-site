import type { Metadata } from "next";
import "./globals.css";
import { LanguageProvider } from "../components/LanguageContext";

export const metadata: Metadata = {
  title: "Yijian Huang | 黄一健",
  description: "Economics, policy, research, and AI portfolio of Yijian Huang.",
  metadataBase: new URL("https://www.yijianhuang.site"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Yijian Huang | 黄一健",
    description: "Economics, policy, research, and AI portfolio of Yijian Huang.",
    url: "https://www.yijianhuang.site",
    siteName: "Yijian Huang",
    images: [{ url: "/avatar.jpg", width: 800, height: 800, alt: "Yijian Huang" }],
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased bg-black">
        <LanguageProvider>
          {children}
        </LanguageProvider>
      </body>
    </html>
  );
}
