import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Toaster } from "react-hot-toast";
import Navbar from "@/components/Navbar";
import NextTopLoader from "nextjs-toploader";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Quibble",
  description: "can generate lyrics, poems, stories, and more",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${inter.className} bg-black min-h-screen text-white w-full p-4`}
      >
        <NextTopLoader
          color="#9333EA"
          initialPosition={0.08}
          crawlSpeed={200}
          height={6}
          crawl={true}
          showSpinner={false}
          easing="ease"
          speed={200}
          zIndex={1600}
          showAtBottom={false}
        />

        <Toaster position="top-left" />
        <div className=" bg-purple-800 opacity-30 duration-200 right-0 -z-10 rounded-full blur-3xl w-[60%] h-96 top-20 absolute"></div>
        <main>
          <Navbar />
          {children}
        </main>
      </body>
    </html>
  );
}
