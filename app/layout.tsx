import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "RW6 Finance",
  description: "Gestão financeira para Pessoa Física e Jurídica",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body>{children}</body>
    </html>
  );
}
