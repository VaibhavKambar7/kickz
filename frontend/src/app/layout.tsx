"use client";

import React, { ReactNode, Suspense } from "react";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import "./globals.css";
import { Inter } from "next/font/google";
import ProductProviders from "./provider";
import { usePathname } from "next/navigation";
import AuthProvider from "./(auth)/providers";
import Loading from "./loading";
import CartProvider from "./context/cartProvider";

const inter = Inter({ subsets: ["latin"] });

const metadata = {
  title: "Kickz",
  description: "Discover Your Perfect Pair",
};

interface RootLayoutProps {
  children: ReactNode;
}

const RootLayout: React.FC<RootLayoutProps> = ({ children }) => {
  const pathname = usePathname();

  return (
    <html lang="en">
      <head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>{metadata.title}</title>
        <meta name="description" content={metadata.description} />
      </head>
      <body className={inter.className}>
        <AuthProvider>
          <ProductProviders>
            <CartProvider>
              <div className="navbar">
                {pathname !== "/register" &&
                  pathname !== "/login" &&
                  pathname !== "/success" &&
                  pathname !== "/failed" && <Navbar />}
              </div>
              <Suspense fallback={<Loading />}>
                <div>{children}</div>
              </Suspense>
              {pathname !== "/register" &&
                pathname !== "/login" &&
                pathname !== "/success" &&
                pathname !== "/failed" && <Footer />}
            </CartProvider>
          </ProductProviders>
        </AuthProvider>
      </body>
    </html>
  );
};

export default RootLayout;
