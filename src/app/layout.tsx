import { Analytics } from "@vercel/analytics/react";
import classNames from "classnames";
import type { Metadata } from "next";
import "./globals.css";
import { ClerkProvider } from "@clerk/nextjs";

export const metadata: Metadata = {
  title: "CherishX | Your AI Love Partner",
  description:
    "Meet CherishX  your thoughtful, caring AI companion. Designed to understand, support, and brighten your day with a touch of digital warmth.",
  keywords: [
    "AI companion",
    "virtual partner",
    "emotional AI",
    "CherishX",
    "AI love",
    "chatbot",
    "AI friend",
  ],
  authors: [{ name: "YourName", url: "https://yourwebsite.com" }],
  openGraph: {
    title: "CherishX | Your AI Love Partner",
    description:
      "A gentle, empathetic AI designed to be your digital confidant and companion.",
    url: "https://cherishx.app",
    siteName: "CherishX",
    images: [
      {
        url: "https://cherishx.app/og-image.png", // Add a romantic/AI-themed OG image
        width: 1200,
        height: 630,
        alt: "CherishX AI Companion",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "CherishX | Your AI Love Partner",
    description: "Your empathetic digital companion. ❤️",
    images: ["https://cherishx.app/twitter-card.png"], // Custom Twitter card image
  },
  themeColor: "#a855f7", // Matches your manifest's purple theme
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider>
      <html lang="en">
        <head>
          <link rel="manifest" href="/manifest.json" />
          <link rel="apple-touch-icon" href="/icon.png" />
          <meta name="theme-color" content="#e0c8fd" />

          <meta property="og:title" content="Nextjs App" />
          <meta name="twitter:title" content="Nextjs App" />

          <meta name="description" content="Nextjs 14 starter template" />
          <meta
            property="og:description"
            content="Nextjs 14 starter template"
          />
          <meta
            name="twitter:description"
            content="Nextjs 14 starter template"
          />

          <meta property="og:image" content="https://i.imgur.com/Z3bMJXy.jpg" />
          <meta
            name="twitter:image"
            content="https://i.imgur.com/Z3bMJXy.jpg"
          />
        </head>
        {/* //! If you don't want 'screen size' visible at the left bottom of the browser window, You can remove `debug-screens` class */}
        <body
          className={classNames("antialiased", {
            "debug-screens": process.env.NODE_ENV === "development",
          })}
        >
          {children}
          <Analytics />
        </body>
      </html>
    </ClerkProvider>
  );
}
