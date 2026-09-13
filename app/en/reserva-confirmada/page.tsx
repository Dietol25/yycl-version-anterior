"use client";

import React, { Suspense } from "react";
import { useSearchParams } from "next/navigation";
import Link from "next/link";
import { Navbar } from "@/components/navigation/Navbar";
import { Footer } from "@/components/navigation/Footer";
import { 
  CheckCircle2, 
  Calendar, 
  Clock, 
  Video, 
  Mail, 
  Headphones, 
  ArrowRight,
  Sparkles,
  MessageCircle
} from "lucide-react";

function EnReservaConfirmadaContent() {
  const searchParams = useSearchParams();

  // Frame Busting: Break out of Appointlet iframe if redirected inside
  React.useEffect(() => {
    if (typeof window !== "undefined" && window.self !== window.top) {
      try {
        window.top!.location.href = window.location.href;
      } catch {
        // Fallback for strict cross-origin browser policies
      }
    }
  }, []);

  const firstName = searchParams.get("first_name") || searchParams.get("name") || "";
  const email = searchParams.get("email") || "";
  const startTimeRaw = searchParams.get("start_time") || searchParams.get("start") || "";

  let formattedDate = "";
  let formattedTime = "";

  if (startTimeRaw) {
    try {
      const dateObj = new Date(startTimeRaw);
      if (!isNaN(dateObj.getTime())) {
        formattedDate = dateObj.toLocaleDateString("en-US", {
          weekday: "long",
          year: "numeric",
          month: "long",
          day: "numeric",
        });

        formattedTime = dateObj.toLocaleTimeString("en-US", {
          hour: "2-digit",
          minute: "2-digit",
        });
      }
    } catch {
      // Friendly fallback
    }
  }

  return (
    <div className="min-h-screen flex flex-col bg-[#FDF8F3] text-[#001837]">
      <Navbar />

      <main className="flex-1 py-4 sm:py-8 px-4 sm:px-6 lg:px-8 max-w-2xl mx-auto w-full flex items-center justify-center">
        {/* Compact Confirmation Card */}
        <div className="bg-white rounded-2xl sm:rounded-3xl border border-[#001837]/10 p-5 sm:p-7 shadow-lg space-y-4 text-center relative overflow-hidden w-full">
          
          {/* Top Decorative Accent */}
          <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-[#834296] via-[#FDC300] to-[#834296]" />

          {/* Badge + Icon */}
          <div className="flex flex-col items-center gap-2 pt-1">
            <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-emerald-50 border-2 border-emerald-100 text-emerald-500 shadow-sm">
              <CheckCircle2 className="w-6 h-6" />
            </div>
            <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-[#834296]/10 text-[#834296] text-[11px] font-bold tracking-wide uppercase font-heading">
              <Sparkles className="w-3 h-3" />
              <span>Session Confirmed</span>
            </div>
          </div>

          {/* Header */}
          <div className="space-y-1">
            <h1 className="text-xl sm:text-2xl font-extrabold font-heading text-[#001837]">
              {firstName ? `All set, ${firstName}!` : "Your session is confirmed!"}
            </h1>
            <p className="text-xs sm:text-sm text-[#001837]/70 max-w-md mx-auto leading-normal">
              We have sent the Google Meet access link and calendar invite to your email
              {email ? <strong className="text-[#001837]"> ({email})</strong> : ""}.
            </p>
          </div>

          {/* Meeting Details Card (Clean flat design without nested white boxes) */}
          <div className="bg-[#FDF8F3] border border-[#001837]/10 rounded-2xl p-4 sm:p-5 text-left grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-4">
            <div className="flex items-start gap-3">
              <div className="w-9 h-9 rounded-xl bg-white flex items-center justify-center text-[#834296] border border-[#001837]/10 shrink-0 shadow-sm">
                <Clock className="w-4 h-4" />
              </div>
              <div>
                <p className="text-[10px] sm:text-xs text-[#001837]/60 font-semibold uppercase">Duration</p>
                <p className="text-xs sm:text-sm font-bold text-[#001837]">30 minutes</p>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <div className="w-9 h-9 rounded-xl bg-white flex items-center justify-center text-[#834296] border border-[#001837]/10 shrink-0 shadow-sm">
                <Video className="w-4 h-4" />
              </div>
              <div>
                <p className="text-[10px] sm:text-xs text-[#001837]/60 font-semibold uppercase">Format</p>
                <p className="text-xs sm:text-sm font-bold text-[#001837]">Google Meet (Online)</p>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <div className="w-9 h-9 rounded-xl bg-white flex items-center justify-center text-[#834296] border border-[#001837]/10 shrink-0 shadow-sm">
                <Calendar className="w-4 h-4" />
              </div>
              <div>
                <p className="text-[10px] sm:text-xs text-[#001837]/60 font-semibold uppercase">Date & Time</p>
                <p className="text-xs sm:text-sm font-bold text-[#001837]">
                  {formattedDate ? `${formattedDate}, ${formattedTime}` : "Check your email"}
                </p>
              </div>
            </div>
          </div>

          {/* Preparation Tips */}
          <div className="text-left bg-[#001837]/[0.02] border border-[#001837]/5 rounded-xl p-3 space-y-1.5 text-xs text-[#001837]/75">
            <div className="flex items-center gap-2">
              <Mail className="w-3.5 h-3.5 text-[#834296] shrink-0" />
              <span><strong>Email:</strong> If you don't see our message within 2 minutes, check your <em>Spam</em> or <em>Promotions</em> folder.</span>
            </div>
            <div className="flex items-center gap-2">
              <Headphones className="w-3.5 h-3.5 text-[#834296] shrink-0" />
              <span><strong>Connection:</strong> Please join on time with headphones and camera enabled from a quiet space.</span>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-2 pt-2">
            <Link
              href="/en"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-1.5 px-5 py-2.5 rounded-xl bg-[#FDC300] text-[#001837] font-bold text-xs sm:text-sm hover:brightness-105 transition-all shadow-sm active:scale-95"
            >
              <span>Back to home</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>

            <a
              href="https://wa.me/5491165784177?text=Hi%20YYCL,%20I%20just%20booked%20my%201-on-1%20assessment%20session"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-1.5 px-4 py-2.5 rounded-xl bg-white border border-[#001837]/15 text-[#001837] font-semibold text-xs sm:text-sm hover:bg-[#FDF8F3] transition-all"
            >
              <MessageCircle className="w-3.5 h-3.5 text-emerald-600" />
              <span>Questions? WhatsApp YYCL</span>
            </a>
          </div>

        </div>
      </main>

      <Footer />
    </div>
  );
}

export default function EnReservaConfirmadaPage() {
  return (
    <Suspense fallback={
      <div className="min-h-screen flex items-center justify-center bg-[#FDF8F3]">
        <div className="w-8 h-8 border-3 border-[#834296] border-t-transparent rounded-full animate-spin" />
      </div>
    }>
      <EnReservaConfirmadaContent />
    </Suspense>
  );
}
