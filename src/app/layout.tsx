import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/ui/Navbar";
import Footer from "@/components/ui/Footer";

export const metadata: Metadata = {
  title: "Tied Studio - מיתוג חתונות מקצה לקצה",
  description: "עיצוב אישי ויוקרתי לחתונה המושלמת שלכם. מיתוג חתונות מקצה לקצה עם לווי צמוד ותיאום מקצועי.",
  keywords: "מיתוג חתונות, עיצוב חתונות, הזמנות לחתונה, דפוס חתונות, סייב דה דייט",
  authors: [{ name: "Tied Studio" }],
  creator: "Tied Studio",
  publisher: "Tied Studio",
  icons: {
    icon: '/icon.svg',
  },
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://studio-tied.vercel.app'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: "Tied Studio - מיתוג חתונות מקצה לקצה",
    description: "עיצוב אישי ויוקרתי לחתונה המושלמת שלכם",
    url: 'https://studio-tied.vercel.app',
    siteName: 'Tied Studio',
    locale: 'he_IL',
    type: 'website',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Tied Studio - מיתוג חתונות',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: "Tied Studio - מיתוג חתונות מקצה לקצה",
    description: "עיצוב אישי ויוקרתי לחתונה המושלמת שלכם",
    images: ['/og-image.png'],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="he" dir="rtl">
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Heebo:wght@100;300;400;500;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="antialiased" style={{ fontFamily: 'Heebo, sans-serif', fontWeight: '100' }}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
