import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Quiz app",
  description: "Best quiz game ever",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${inter.className} bg-gradient-to-b from-navy-900 to-navy-600`}
      >
        <main className="flex justify-center align-middle py-28">
          <div className="bg-gradient-to-br from-navy-700 to-pastel-green-500 w-[50rem] max-h-fit flex justify-center align-middle flex-col py-16 rounded-xl border-2 border-pinky-500">
            {children}
          </div>
        </main>
      </body>
    </html>
  );
}
