import { Geist, Geist_Mono } from "next/font/google";
import { DefaultFooter } from "./components/ui/Footer";
import { DefaultHeader } from "./components/ui/Header";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

// app/layout.tsx
export const metadata = {
  title: "let's make it random",
  viewport: "width=device-width, initial-scale=1, viewport-fit=cover",
  icons: {
    icon: '/favicon.ico',
    shortcut: '/favicon.ico',
    apple: '/apple-icon.png', 
  },
  manifest: '/manifest.json',
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <div className="min-h-screen flex flex-col bg-gray-100">
          <DefaultHeader />

          <main className="flex-1 container mx-auto p-4 mt-[56px]">
            {children}
          </main>

          <DefaultFooter label="© 2025 Netdy" />
        </div>
      </body>
    </html>
  );
}
