import Head from 'next/head';
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { LanguageProvider } from './context/LanguageContext'

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Once In a Lifetime Quinceañera",
  description: "Creating Once in a Lifetime Quinceañera's through Choreography",
  icons: {
    icon: ["/assets/butterfly.png"], // Ensure this path is correct
  },
  openGraph: {
    title: "Once In a Lifetime Quinceañera",
    description: "Creating Once in a Lifetime Quinceañera's through Choreography",
    url: "https://once-in-a-lifetime-quincenera.vercel.app",
    siteName: "Once In a Lifetime Quinceañera",
    images: [
      {
        url: "/assets/logo.png",
        width: 1200,
        height: 630,
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Once In a Lifetime Quinceañera",
    description: "Creating Once in a Lifetime Quinceañera's through Choreography",
    creator: "Alma Alvarado",
    images: ["/assets/logo_icon.png"],
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
        <link rel="icon" href="/assets/butterfly.png" /> {/* Ensure this path is correct */}
        {/* Open Graph Meta Tags */}
        <meta property="og:title" content="Once In a Lifetime Quinceañera" />
        <meta property="og:description" content="Creating Once in a Lifetime Quinceañera's through Choreography" />
        <meta property="og:image" content="/assets/logo.png" />
        <meta property="og:url" content="https://once-in-a-lifetime-quincenera.vercel.app" />
        <meta property="og:type" content="website" />
        {/* Twitter Meta Tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Once In a Lifetime Quinceañera" />
        <meta name="twitter:description" content="Creating Once in a Lifetime Quinceañera's through Choreography" />
        <meta name="twitter:image" content="/assets/logo_icon.png" />
      </Head>
      <body>
        <LanguageProvider>
          {children}
        </LanguageProvider>
      </body>
    </html>
  );
}