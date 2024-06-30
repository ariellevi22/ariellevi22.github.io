import Footer from "@/components/footer";
import Navbar from "@/components/navbar";
import { appUrl, description, name } from "@/global";
import type { Metadata } from "next";
import { Inter } from "next/font/google";

import "@/theme/index.css";
import "@fortawesome/fontawesome-svg-core/styles.css";
import "./globals.css";

/** Application metadata */
export const metadata: Metadata = {
  title: name,
  applicationName: name,
  description,
  keywords: [name, "personal website", "portfolio"],
  openGraph: {
    title: name,
    siteName: name,
    description,
    url: "https://ariellevi22.github.io",
  },
  twitter: {
    title: name,
    description,
    card: "summary",
  },
  metadataBase: new URL(appUrl),
};

/** The app's font styles */
const font = Inter({ subsets: ["latin"] });

/** Root layout for the app */
const RootLayout = ({ children }: RootLayoutProps) => (
  <html lang="en">
    <body className={font.className}>
      <Navbar />
      <main>{children}</main>
      <Footer />
    </body>
  </html>
);

export default RootLayout;

type RootLayoutProps = Readonly<{ children: React.ReactNode }>;
