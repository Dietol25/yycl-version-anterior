"use client";

import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export const EnglishCategoryTabs = () => {
  const pathname = usePathname();

  const tabs = [
    { label: 'Spanish Classes', href: '/en' },
    { label: 'English Classes', href: '/en/english-classes' },
    { label: 'Kids & Teens', href: '/en/spanish-classes-kids' },
    { label: 'About Us', href: '/en/about-us' },
  ];

  return (
    <div className="block xl:hidden w-full bg-white py-2.5 border-b border-black/5 overflow-x-auto no-scrollbar">
      <div className="max-w-[1280px] mx-auto px-5 flex items-center justify-start sm:justify-center gap-2">
        {tabs.map((tab) => {
          const isActive =
            tab.href === '/en'
              ? pathname === '/en' || pathname === '/en/spanish-classes'
              : pathname?.startsWith(tab.href);

          return (
            <Link
              key={tab.label}
              href={tab.href}
              className={`inline-flex items-center px-4 py-1.5 rounded-full text-xs font-heading font-bold transition-all duration-150 whitespace-nowrap cursor-pointer ${
                isActive
                  ? 'bg-[#001837] text-white shadow-[2px_2px_0px_#001837]'
                  : 'bg-slate-100 text-[#001837] hover:bg-slate-200/80 border border-black/5'
              }`}
            >
              {tab.label}
            </Link>
          );
        })}
      </div>
    </div>
  );
};
