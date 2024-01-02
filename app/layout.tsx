import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Toaster } from "react-hot-toast";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "AI assistant to generate content",
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
        <Toaster />
        <div className=" bg-purple-800 opacity-30 duration-200 right-0 -z-10 rounded-full blur-3xl w-[60%] h-96 top-20 absolute"></div>
        <main>{children}</main>
      </body>
    </html>
  );
}
