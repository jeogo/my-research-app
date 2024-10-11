// RootLayout.tsx
import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

// إعداد الخطوط المحلية باستخدام Tailwind CSS
const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "خدمة إعداد البحث العلمي",
  description: "نقدم خدمة متخصصة لطلاب الجامعات في إعداد بحوثهم بأسلوب احترافي ومنهجي.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ar" dir="rtl">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
