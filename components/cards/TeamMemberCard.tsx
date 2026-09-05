import React from 'react';
import Link from 'next/link';
import { Star, Award, Calendar, Languages } from 'lucide-react';
import { Teacher } from '@/lib/types';
import { Button } from '@/components/ui/Button';
import { CountryFlag } from '@/components/icons/FlagIcons';

export const TeamMemberCard: React.FC<{ teacher: Teacher }> = ({ teacher }) => {
  return (
    <div className="bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-yycl-neutral hover:shadow-yycl-hover transition-all duration-200 flex flex-col justify-between group">
      <div>
        <div className="relative h-56 w-full overflow-hidden bg-slate-100">
          <img
            src={teacher.avatar}
            alt={teacher.name}
            className="w-full h-full object-cover object-top transition-transform duration-300 group-hover:scale-105"
          />
          <div className="absolute top-3 right-3 bg-yycl-navy/90 backdrop-blur-xs text-white text-xs font-bold px-2.5 py-1 rounded-full flex items-center gap-1">
            <Star className="w-3.5 h-3.5 fill-yycl-yellow text-yycl-yellow" />
            <span>{teacher.rating}</span>
          </div>
          <div className="absolute bottom-3 left-3 bg-white/95 backdrop-blur-xs text-yycl-navy text-xs font-bold px-2.5 py-1 rounded-lg shadow-sm flex items-center gap-1.5">
            <CountryFlag code={teacher.countryFlag || teacher.country} size={15} />
            <span>{teacher.country}</span>
          </div>
        </div>

        <div className="p-5">
          <span className="text-xs font-bold text-yycl-purple uppercase tracking-wider">
            {teacher.role}
          </span>
          <h3 className="text-lg font-bold font-heading text-yycl-navy mt-0.5">
            {teacher.name}
          </h3>
          <p className="text-xs font-semibold text-slate-700 mt-1 mb-3">
            {teacher.specialty}
          </p>

          <p className="text-xs text-slate-600 line-clamp-2 mb-4">
            {teacher.bio}
          </p>

          <div className="space-y-1.5 pt-3 border-t border-slate-100">
            <div className="flex items-center gap-1.5 text-xs text-slate-600">
              <Award className="w-3.5 h-3.5 text-yycl-yellow shrink-0" />
              <span className="font-medium truncate">{teacher.certifications.join(' · ')}</span>
            </div>
            <div className="flex items-center gap-1.5 text-xs text-slate-600">
              <Languages className="w-3.5 h-3.5 text-yycl-cyan shrink-0" />
              <span className="truncate">{teacher.languages.join(' · ')}</span>
            </div>
          </div>
        </div>
      </div>

      <div className="p-5 pt-0">
        <Link href="/agendar">
          <Button variant="secondary" size="sm" fullWidth className="font-semibold text-xs gap-1.5">
            <Calendar className="w-3.5 h-3.5 text-yycl-yellow" />
            Agendar con {teacher.name.split(' ')[0]}
          </Button>
        </Link>
      </div>
    </div>
  );
};
