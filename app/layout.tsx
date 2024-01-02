import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

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
        <div className=" bg-purple-800 opacity-30 duration-200 right-0 -z-10 rounded-full blur-3xl w-[70%] h-72 top-0 absolute"></div>
        <main>{children}</main>
      </body>
    </html>
  );
}
