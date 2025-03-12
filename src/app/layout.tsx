import { Metadata } from "next";
import "../css/globals.css";

export const metadata: Metadata = {
  title: "MM dev",
  description: "Inovação em Tecnologia",
  openGraph: {
    title: "MM dev",
    description: "Inovação em Tecnologia",
  },
  robots: {
    index: true,
    follow: true,
    nocache: true,
    googleBot: {
      index: true,
      follow: true,
    }
  }
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
