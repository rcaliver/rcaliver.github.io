import { GoogleAnalytics } from '@next/third-parties/google';
import type { Metadata } from "next";
import { Dancing_Script, JetBrains_Mono, Poppins } from "next/font/google";
import "./globals.css";
import { Providers } from "./providers";
import { NavbarComponent } from "@/components/Navbar";

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

const dancingScript = Dancing_Script({
  variable: "--font-dancing-script",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Caliver's Portfolio",
  description: "Caliver's Portfolio made with Next.js",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const GA_MEASUREMENT_ID = process.env.GA_MEASUREMENT_ID || '';

  return (
    <html lang="en" className="dark">
      <body
        className={`${poppins.variable} ${jetbrainsMono.variable} ${dancingScript.variable} antialiased`}
      >
        <Providers>
          <div className="min-h-screen">
            <NavbarComponent />

            {children}
          </div>
        </Providers>

        <GoogleAnalytics gaId={GA_MEASUREMENT_ID} />
      </body>
    </html>
  );
}
