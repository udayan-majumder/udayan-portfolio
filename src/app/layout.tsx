import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/lib/theme";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "UDAYAN MAJUMDER - Full Stack Developer",
  description:
    "Full Stack Developer specializing in PERN stack (PostgreSQL, Express.js, React, Node.js). Building efficient, user-centric web applications with modern technologies.",
  keywords: [
    "Full Stack Developer",
    "PERN Stack",
    "React",
    "Next.js",
    "Node.js",
    "PostgreSQL",
    "Web Development",
    "Portfolio",
  ],
  authors: [{ name: "Udayan Majumder" }],
  creator: "Udayan Majumder",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://udayanmajumder.vercel.app",
    title: "UDAYAN MAJUMDER - Full Stack Developer",
    description:
      "Full Stack Developer specializing in PERN stack and modern web technologies.",
    siteName: "Udayan Majumder Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "UDAYAN MAJUMDER - Full Stack Developer",
    description:
      "Full Stack Developer specializing in PERN stack and modern web technologies.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "your-google-verification-code",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.className} antialiased`}>
        <ThemeProvider>
          <div className="min-h-screen bg-white dark:bg-gray-900 transition-colors duration-300">
            <Header />
            <main className="pt-16">{children}</main>
            <Footer />
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
