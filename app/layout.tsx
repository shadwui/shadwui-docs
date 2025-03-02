import "../styles/global.css";
import { RootProvider } from "fumadocs-ui/provider";
import type { ReactNode } from "react";
import { ThemeProvider } from "next-themes";
import type { Metadata, Viewport } from "next";
import { Outfit as FontHeading, Inter as FontSans } from "next/font/google";
import Script from "next/script";

const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
});

const fontHeading = FontHeading({
  subsets: ["latin"],
  variable: "--font-heading",
});

export const viewport: Viewport = {
  initialScale: 1,
  width: "device-width",
  maximumScale: 1,
  viewportFit: "cover",
};

export const metadata: Metadata = {
  metadataBase: new URL("https://shadwui.com"),
  title:
    "Shadw-UI - Beautiful UI components built with Tailwind CSS and React",
  description:
    "An extensive collection of copy-and-paste components for quickly building app UIs. Free, open-source, and ready to drop into your projects.",
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  name: "ShadwUI - UI Components",
  description:
    "ShadwUI is a modern component library for Next.js, React, and Vite.",
  url: "https://shadwui.com/",
  home: {
    "@type": "Home",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Installation",
        item: "https://shadwui.com/docs/installation/",
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "components",
        item: "https://shadwui.com/docs/components/",
      },
      {
        "@type": "ListItem",
        position: 3,
        name: "Dark Mode",
        item: "https://shadwui.com/docs/dark-mode/",
      },
    ],
  },
};

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${fontSans.variable} ${fontHeading.variable} font-sans antialiased has-not-data-home:before:absolute has-not-data-home:before:inset-x-0 has-not-data-home:before:h-100 has-not-data-home:before:bg-linear-to-b has-not-data-home:before:from-zinc-100 has-data-home:bg-zinc-50 dark:has-not-data-home:before:hidden dark:has-data-home:bg-zinc-950`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <RootProvider>{children}</RootProvider>
        </ThemeProvider>
        <Script
          defer
          data-domain="shadwui.com"
          src="https://plausible.io/js/script.js"
        />

        <Script
          id="json-ld"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </body>
    </html>
  );
}
