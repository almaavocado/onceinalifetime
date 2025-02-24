import Head from 'next/head';
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Once In a Lifetime Quiñcenera",
  description: "Once In a Lifetime Quiñcenera",
  icons: {
    icon: "./assets/logo.png",
  },
  openGraph: {
    title: "Once In a Lifetime Quiñcenera",
    description: "Once In a Lifetime Quiñcenera",
    url: "https://once-in-a-lifetime-quincenera.vercel.app",
    siteName: "Once In a Lifetime Quiñcenera",
    images: [
      {
        url: "./assets/logo.png",
        width: 1200,
        height: 630,
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Once In a Lifetime Quiñcenera",
    description: "Once In a Lifetime Quiñcenera",
    creator: "Alma Alvarado",
    images: ["/logo.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "google",
    yandex: "yandex",
    yahoo: "yahoo",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <Head>
        <title>Once in a Lifetime Quinceañera</title>
        <meta name="description" content="Creating Once in a Lifetime Quinceañera's through Choreography" />
        <link rel="icon" href="/assets/logo.png" />
      </Head>
      <body>{children}</body>
    </html>
  );
}
