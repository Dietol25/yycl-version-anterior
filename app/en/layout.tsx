import type { Metadata } from 'next';
import { EnLangHandler } from '@/components/navigation/EnLangHandler';

export const metadata: Metadata = {
  title: {
    default: "Learn Spanish & English Online | Yes You Can Languages (YYCL)",
    template: "%s | Yes You Can Languages (YYCL)",
  },
  description: "Live 1-on-1 and small group conversational language classes with native and certified teachers. Lose the fear of speaking from day one.",
  keywords: [
    "learn spanish",
    "spanish classes online",
    "conversational spanish",
    "english classes",
    "YYCL",
    "Yes You Can Languages",
    "speak spanish fluently"
  ],
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://yycl-prototype.vercel.app/en",
    title: "Learn Spanish & English Online | Yes You Can Languages (YYCL)",
    description: "Live conversational classes with native and certified teachers. Lose the fear of speaking from day one.",
    siteName: "Yes You Can Languages",
    images: [
      {
        url: "/assets/logo.png",
        width: 800,
        height: 800,
        alt: "Yes You Can Languages Logo",
      },
    ],
  },
  twitter: {
    card: "summary",
    title: "Learn Spanish & English Online | Yes You Can Languages",
    description: "Live conversational classes with native and certified teachers.",
    images: ["/assets/logo.png"],
  },
};

export default function EnglishLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <EnLangHandler />
      {children}
    </>
  );
}
