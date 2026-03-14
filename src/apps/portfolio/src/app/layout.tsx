import type { Metadata } from "next";
import { Space_Mono } from "next/font/google";
import "./globals.css";
import { APP } from "@/lib/config";
import { cx } from "@/lib/utils";

const spaceMono = Space_Mono({
  subsets: ["latin"],
  weight: ["400", "700"],
});

export const metadata: Metadata = {
  title: APP.name,
  description: APP.description,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body
        className={cx(
          spaceMono.className,
          "bg-neutral-950 text-neutral-50 antialiased not-motion-reduce:scroll-smooth selection:bg-violet-500/20",
        )}
      >
        {children}
      </body>
    </html>
  );
}
