import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact",
  description: "Lets Contact!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <>{children}</>;
}
