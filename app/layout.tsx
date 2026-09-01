import type { Metadata } from "next";
import { Montserrat, Nunito } from "next/font/google";
import "./globals.css";

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  display: "swap",
});

const nunito = Nunito({
  variable: "--font-nunito",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Yes You Can Languages (YYCL) | Clases de Inglés e Idiomas Online",
  description: "Pierde el miedo a hablar inglés. Academia de idiomas online para profesionales y empresas en Latinoamérica. Clases 100% conversacionales en vivo.",
  keywords: ["clases de ingles", "aprender ingles", "ingles conversacional", "YYCL", "Yes You Can Languages", "toefl", "ielts", "idiomas online"],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="es"
      className={`${montserrat.variable} ${nunito.variable} scroll-smooth antialiased`}
    >
      <body className="min-h-screen flex flex-col bg-white text-yycl-navy selection:bg-yycl-yellow selection:text-yycl-navy">
        {children}
      </body>
    </html>
  );
}
