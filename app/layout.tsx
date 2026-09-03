import type { Metadata } from "next";
import { Montserrat, Nunito, Caveat } from "next/font/google";
import "./globals.css";

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
  display: "swap",
});

const nunito = Nunito({
  variable: "--font-nunito",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

const caveat = Caveat({
  variable: "--font-handwritten",
  subsets: ["latin"],
  weight: ["500", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://yycl-prototype.vercel.app"),
  title: {
    default: "Yes You Can Languages (YYCL) | Clases de Inglés e Idiomas Online",
    template: "%s | Yes You Can Languages (YYCL)",
  },
  description: "Pierde el miedo a hablar inglés. Academia de idiomas online para profesionales y empresas en Latinoamérica. Clases 100% conversacionales en vivo.",
  keywords: ["clases de ingles", "aprender ingles", "ingles conversacional", "YYCL", "Yes You Can Languages", "toefl", "ielts", "idiomas online"],
  authors: [{ name: "Yes You Can Languages" }],
  creator: "Yes You Can Languages",
  openGraph: {
    type: "website",
    locale: "es_LA",
    url: "https://yycl-prototype.vercel.app",
    title: "Yes You Can Languages (YYCL) | Clases de Inglés e Idiomas Online",
    description: "Pierde el miedo a hablar inglés. Academia de idiomas online para profesionales y empresas. Clases 100% conversacionales en vivo. Sí puedes. Yes You Can.",
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
    title: "Yes You Can Languages (YYCL) | Clases de Inglés e Idiomas Online",
    description: "Pierde el miedo a hablar inglés. Clases 100% conversacionales en vivo con profesores reales.",
    images: ["/assets/logo.png"],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="es"
      className={`${montserrat.variable} ${nunito.variable} ${caveat.variable} scroll-smooth antialiased`}
    >
      <body className="min-h-screen flex flex-col bg-white text-yycl-navy selection:bg-yycl-yellow selection:text-yycl-navy">
        {children}
      </body>
    </html>
  );
}
