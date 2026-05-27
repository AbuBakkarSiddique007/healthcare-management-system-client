import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import QueryProviders from "@/providers/QueryProvider";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Healthcare Management System",
  description: "This is a healthcare management system built with Next.js, Tailwind CSS, and shadcn/ui. It is designed to help healthcare providers manage their patients, appointments, and medical records more efficiently.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">

        <h2 className='font-semibold text-2xl text-primary text-center border-2 border-red-500 m-3'>
          ROOT LAYOUT
        </h2>

        <QueryProviders>
          {children}
        </QueryProviders>

      </body>
    </html>
  );
}
