import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { ThemeProvider } from "next-themes";
import{ Toaster } from 'react-hot-toast';
import Footer from "@/components/Footer";
import NavBar from "@/components/Navbar";

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
  title: "Botbyte AI - Training and Internship Program",
  description: "Unlock your potential with Botbyte AI’s Training and Internship Program—a gateway to hands-on experience in AI, software development, and cutting-edge technologies. Our program is designed for students and professionals looking to enhance their skills through real-world projects, expert mentorship, and industry-relevant training."
}


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <ThemeProvider attribute="class" defaultTheme="dark" enableSystem={false}></ThemeProvider>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <NavBar />
        {children}
        <Toaster />
        <Footer />
      </body>
    <ThemeProvider/>
    </html>
  );
}
