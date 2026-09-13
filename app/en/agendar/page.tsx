"use client";

import React, { useState, useEffect } from "react";
import { Navbar } from "@/components/navigation/Navbar";
import { Footer } from "@/components/navigation/Footer";
import { EnglishCategoryTabs } from "@/components/navigation/EnglishCategoryTabs";
import { 
  ChevronDown, 
  ExternalLink,
  ShieldCheck,
  Clock,
  Video,
  Sparkles
} from "lucide-react";

export default function EnAgendarPage() {
  const [iframeLoaded, setIframeLoaded] = useState(false);
  const [showTips, setShowTips] = useState(false);
  
  // Pure function to calculate query parameters synchronously without double iframe reload
  const getInitialUrl = () => {
    const baseUrl = "https://appt.link/1-on-1-language-assessment-call/1-on-1-language-assessment-call";
    if (typeof window === "undefined") return baseUrl;
    try {
      const timeZone = Intl.DateTimeFormat().resolvedOptions().timeZone || "";
      let defaultPrefix = "+1";
      let defaultCountry = "United States";

      if (timeZone.includes("London") || timeZone.includes("Europe/London") || timeZone.includes("Belfast")) {
        defaultPrefix = "+44";
        defaultCountry = "United Kingdom";
      } else if (timeZone.includes("Toronto") || timeZone.includes("Vancouver") || timeZone.includes("Montreal")) {
        defaultPrefix = "+1";
        defaultCountry = "Canada";
      } else if (timeZone.includes("Sydney") || timeZone.includes("Melbourne") || timeZone.includes("Brisbane")) {
        defaultPrefix = "+61";
        defaultCountry = "Australia";
      } else if (timeZone.includes("Auckland")) {
        defaultPrefix = "+64";
        defaultCountry = "New Zealand";
      } else if (timeZone.includes("Berlin") || timeZone.includes("Paris") || timeZone.includes("Rome") || timeZone.includes("Amsterdam")) {
        defaultPrefix = "+49";
        defaultCountry = "Germany";
      } else if (timeZone.includes("Bogota")) {
        defaultPrefix = "+57";
        defaultCountry = "Colombia";
      } else if (timeZone.includes("Buenos_Aires")) {
        defaultPrefix = "+54";
        defaultCountry = "Argentina";
      } else if (timeZone.includes("Mexico")) {
        defaultPrefix = "+52";
        defaultCountry = "Mexico";
      }

      const encodedPrefix = encodeURIComponent(defaultPrefix + " ");
      const encodedCountry = encodeURIComponent(defaultCountry);
      return `${baseUrl}?field__whats_app=${encodedPrefix}&field__qbz16QsC2o=${encodedPrefix}&field__en_que_pais_vives=${encodedCountry}`;
    } catch {
      return baseUrl;
    }
  };

  const [appointletFinalUrl, setAppointletFinalUrl] = useState(getInitialUrl);

  useEffect(() => {
    setAppointletFinalUrl(getInitialUrl());
  }, []);

  return (
    <div className="min-h-screen flex flex-col bg-[#FDF8F3] text-[#001837]">
      <Navbar />
      <EnglishCategoryTabs />

      <main className="flex-1 py-6 sm:py-8 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto w-full space-y-5">
        
        {/* Clean Header */}
        <div className="text-center space-y-1.5 max-w-xl mx-auto">
          <div className="inline-flex items-center gap-1.5 text-xs font-heading font-extrabold uppercase tracking-widest text-[#834296]">
            <span className="w-2 h-2 rounded-full bg-[#834296]" />
            <span>100% Free 1-on-1 Discovery Session</span>
          </div>
          <h1 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold font-heading text-[#001837] tracking-tight">
            Schedule your level assessment
          </h1>
          <p className="text-xs sm:text-sm text-slate-600 font-body-regular">
            30 min online via Google Meet with our pedagogical team · Speaking evaluation & tailored roadmap.
          </p>
        </div>

        {/* Quick Tips Accordion */}
        <div className="bg-white/80 hover:bg-white rounded-2xl border border-slate-200 overflow-hidden transition-all shadow-2xs">
          <button
            type="button"
            onClick={() => setShowTips(!showTips)}
            className="w-full px-4 py-3 flex items-center justify-between text-left font-heading font-bold text-xs text-slate-700 hover:text-[#001837] cursor-pointer"
          >
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[#EC9519]" />
              <span>Before your session (3 quick recommendations)</span>
            </div>
            <span className="flex items-center gap-1 text-[11px] text-[#834296] font-bold">
              {showTips ? "Hide" : "View tips"}
              <ChevronDown className={w-3.5 h-3.5 transition-transform } />
            </span>
          </button>

          {showTips && (
            <div className="p-4 pt-0 sm:p-5 sm:pt-0 animate-in fade-in-50 duration-200 border-t border-slate-100 mt-2">
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 text-xs text-slate-600 font-body-regular pt-3">
                <li className="flex items-start gap-2">
                  <span className="w-4 h-4 rounded-full bg-[#16A34A] text-white flex items-center justify-center text-[10px] shrink-0 font-bold mt-0.5">✓</span>
                  <div>
                    <strong className="text-[#001837]">Check your email:</strong> You will receive a Google Meet invite immediately.
                  </div>
                </li>
                <li className="flex items-start gap-2">
                  <span className="w-4 h-4 rounded-full bg-[#16A34A] text-white flex items-center justify-center text-[10px] shrink-0 font-bold mt-0.5">✓</span>
                  <div>
                    <strong className="text-[#001837]">Quiet space:</strong> Connect with headphones and camera enabled.
                  </div>
                </li>
                <li className="flex items-start gap-2 sm:col-span-2">
                  <span className="w-4 h-4 rounded-full bg-[#16A34A] text-white flex items-center justify-center text-[10px] shrink-0 font-bold mt-0.5">✓</span>
                  <div>
                    <strong className="text-[#001837]">Zero pressure:</strong> This is a relaxed conversation to discover your goals, not a grammar quiz.
                  </div>
                </li>
              </ul>
            </div>
          )}
        </div>

        {/* Calendar Container */}
        <div className="bg-white rounded-3xl border-2 border-[#001837] shadow-[5px_5px_0px_#001837] overflow-hidden p-2 sm:p-4 min-h-[640px] sm:min-h-[720px] flex flex-col relative">
          
          {!iframeLoaded && (
            <div className="absolute inset-0 flex flex-col items-center justify-center bg-white z-10 space-y-3 p-4 text-center">
              <div className="w-8 h-8 border-3 border-[#834296] border-t-transparent rounded-full animate-spin" />
              <p className="text-xs sm:text-sm font-medium text-slate-600 font-heading">
                Loading YYCL availability calendar...
              </p>
            </div>
          )}

          <iframe
            key={appointletFinalUrl}
            src={appointletFinalUrl}
            title="YYCL Official Booking Calendar"
            width="100%"
            height="720px"
            className="w-full border-0 rounded-2xl"
            onLoad={() => setIframeLoaded(true)}
            allow="camera; microphone; autoplay; encrypted-media"
          />

          {/* Fallback full window link */}
          <div className="text-center pt-2.5 border-t border-slate-100 mt-1">
            <p className="text-[11px] text-slate-500">
              Having trouble viewing the calendar?{" "}
              <a
                href={appointletFinalUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 text-[#0284C7] font-semibold hover:underline"
              >
                Open in full window <ExternalLink className="w-3 h-3" />
              </a>
            </p>
          </div>

        </div>

      </main>

      <Footer />
    </div>
  );
}
