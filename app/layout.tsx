import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";
import ReactLenis from "lenis/react";

const poppins = localFont({
  src: [
    {
      path: "../public/Poppins/Poppins-Thin.ttf",
      weight: "100",
      style: "normal",
    },
    {
      path: "../public/Poppins/Poppins-ThinItalic.ttf",
      weight: "100",
      style: "italic",
    },
    {
      path: "../public/Poppins/Poppins-ExtraLight.ttf",
      weight: "200",
      style: "normal",
    },
    {
      path: "../public/Poppins/Poppins-ExtraLightItalic.ttf",
      weight: "200",
      style: "italic",
    },
    {
      path: "../public/Poppins/Poppins-Light.ttf",
      weight: "300",
      style: "normal",
    },
    {
      path: "../public/Poppins/Poppins-LightItalic.ttf",
      weight: "300",
      style: "italic",
    },
    {
      path: "../public/Poppins/Poppins-Regular.ttf",
      weight: "400",
      style: "normal",
    },
    {
      path: "../public/Poppins/Poppins-Italic.ttf",
      weight: "400",
      style: "italic",
    },
    {
      path: "../public/Poppins/Poppins-Medium.ttf",
      weight: "500",
      style: "normal",
    },
    {
      path: "../public/Poppins/Poppins-MediumItalic.ttf",
      weight: "500",
      style: "italic",
    },
    {
      path: "../public/Poppins/Poppins-SemiBold.ttf",
      weight: "600",
      style: "normal",
    },
    {
      path: "../public/Poppins/Poppins-SemiBoldItalic.ttf",
      weight: "600",
      style: "italic",
    },
    {
      path: "../public/Poppins/Poppins-Bold.ttf",
      weight: "700",
      style: "normal",
    },
    {
      path: "../public/Poppins/Poppins-BoldItalic.ttf",
      weight: "700",
      style: "italic",
    },
    {
      path: "../public/Poppins/Poppins-ExtraBold.ttf",
      weight: "800",
      style: "normal",
    },
    {
      path: "../public/Poppins/Poppins-ExtraBoldItalic.ttf",
      weight: "800",
      style: "italic",
    },
    {
      path: "../public/Poppins/Poppins-Black.ttf",
      weight: "900",
      style: "normal",
    },
    {
      path: "../public/Poppins/Poppins-BlackItalic.ttf",
      weight: "900",
      style: "italic",
    },
  ],
  variable: "--font-poppins",
});

const robotoSlab = localFont({
  src: [
    {
      path: "../public/Roboto_Slab/RobotoSlab-Thin.ttf",
      weight: "100",
      style: "normal",
    },
    {
      path: "../public/Roboto_Slab/RobotoSlab-ExtraLight.ttf",
      weight: "200",
      style: "normal",
    },
    {
      path: "../public/Roboto_Slab/RobotoSlab-Light.ttf",
      weight: "300",
      style: "normal",
    },
    {
      path: "../public/Roboto_Slab/RobotoSlab-Regular.ttf",
      weight: "400",
      style: "normal",
    },
    {
      path: "../public/Roboto_Slab/RobotoSlab-Medium.ttf",
      weight: "500",
      style: "normal",
    },
    {
      path: "../public/Roboto_Slab/RobotoSlab-SemiBold.ttf",
      weight: "600",
      style: "normal",
    },
    {
      path: "../public/Roboto_Slab/RobotoSlab-Bold.ttf",
      weight: "700",
      style: "normal",
    },
    {
      path: "../public/Roboto_Slab/RobotoSlab-ExtraBold.ttf",
      weight: "800",
      style: "normal",
    },
    {
      path: "../public/Roboto_Slab/RobotoSlab-Black.ttf",
      weight: "900",
      style: "normal",
    },
  ],
  variable: "--font-roboto-slab",
});

export const metadata: Metadata = {
  title: "Nabe Starter Kit",
  description: "A high-performance Next.js starter kit!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${poppins.variable} ${robotoSlab.variable} antialiased`}
    >
      <body className="flex flex-col">
        <ReactLenis root>
          <Navbar />

          {children}

          <Footer />
        </ReactLenis>
      </body>
    </html>
  );
}
