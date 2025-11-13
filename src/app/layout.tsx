import type { Metadata } from "next";
import "./globals.css";
import NavBar from "@/components/navBar";

export const metadata: Metadata = {
  title: "Users Auth",
  description: "Authentication users app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body>
        <NavBar/>
        {children}
      </body>
    </html>
  );
}
