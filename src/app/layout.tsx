import type { Metadata } from "next";
import { Inter, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const plusJakarta = Plus_Jakarta_Sans({
  variable: "--font-jakarta",
  subsets: ["latin"],
});

const BASE_URL = "https://gtmsnipe.com";

export const metadata: Metadata = {
  metadataBase: new URL(BASE_URL),
  title: {
    default: "GTM SNIPE | AI-Powered Go-To-Market Strategy Generator",
    template: "%s | GTM SNIPE",
  },
  description:
    "Paste any competitor URL and GTM SNIPE generates a complete go-to-market playbook in seconds — ICP mapping, competitive audit, AEO ranking, channel strategy, and campaign output.",
  keywords: [
    "GTM strategy",
    "go-to-market strategy",
    "AI marketing tool",
    "competitor analysis",
    "ICP mapping",
    "SaaS growth",
    "marketing automation",
    "AI sales strategy",
    "campaign generator",
    "growth hacking",
    "AEO optimization",
    "channel strategy",
    "startup marketing",
    "GTM SNIPE",
  ],
  authors: [{ name: "Daksh Tyagi" }],
  creator: "Daksh Tyagi",
  publisher: "GTM SNIPE",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: BASE_URL,
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: BASE_URL,
    title: "GTM SNIPE | AI-Powered Go-To-Market Strategy Generator",
    description:
      "Paste a competitor URL and get a full GTM playbook in seconds. ICP mapping, competitive audit, AEO ranking, and plug-and-play campaign output — powered by AI.",
    siteName: "GTM SNIPE",
    images: [
      {
        url: "/assets/img1.png",
        width: 1200,
        height: 630,
        alt: "GTM SNIPE – AI-Powered Strategy Dashboard",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@GTMSnipe",
    creator: "@DeveloperDaksh",
    title: "GTM SNIPE | AI-Powered Go-To-Market Strategy Generator",
    description:
      "Paste a competitor URL and get a full GTM playbook in seconds. Powered by the Kinetic Oracle Engine.",
    images: ["/assets/img1.png"],
  },
  category: "technology",
  icons: {
    icon: "/favicon.ico",
  },
  other: {
    "theme-color": "#0e0e12",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebSite",
      "@id": `${BASE_URL}/#website`,
      url: BASE_URL,
      name: "GTM SNIPE",
      description:
        "AI-Powered Go-To-Market Strategy Generator. Paste any competitor URL to get a complete GTM playbook instantly.",
      potentialAction: {
        "@type": "SearchAction",
        target: {
          "@type": "EntryPoint",
          urlTemplate: `${BASE_URL}/?q={search_term_string}`,
        },
        "query-input": "required name=search_term_string",
      },
    },
    {
      "@type": "SoftwareApplication",
      "@id": `${BASE_URL}/#app`,
      name: "GTM SNIPE",
      url: BASE_URL,
      applicationCategory: "BusinessApplication",
      operatingSystem: "Web",
      description:
        "GTM SNIPE is an AI-powered go-to-market strategy generator. Paste a competitor URL and receive a complete playbook covering ICP mapping, competitive audit, AEO ranking, Google Trends analysis, Reddit demand validation, and plug-and-play campaign output.",
      offers: {
        "@type": "Offer",
        price: "999",
        priceCurrency: "INR",
        description: "Pay-per-strategy. No subscription required.",
      },
      creator: {
        "@type": "Person",
        name: "Daksh Tyagi",
      },
      aggregateRating: {
        "@type": "AggregateRating",
        ratingValue: "4.8",
        reviewCount: "500",
      },
    },
    {
      "@type": "Organization",
      "@id": `${BASE_URL}/#org`,
      name: "GTM SNIPE",
      url: BASE_URL,
      logo: {
        "@type": "ImageObject",
        url: `${BASE_URL}/favicon.ico`,
      },
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${plusJakarta.variable} antialiased`}
    >
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap"
          rel="stylesheet"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="antialiased min-h-screen relative flex flex-col">
        <Navigation />
        <div className="grow">{children}</div>
        <Footer />
      </body>
    </html>
  );
}
