import { ExternalLink } from 'lucide-react';
import { CLUB_INFO } from '../data/wydadData';

export default function Footer() {
  return (
    <footer className="border-t border-stone-200 bg-white py-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
        <div className="space-y-1">
          <p className="font-display font-extrabold text-lg text-[#141212]">
            {CLUB_INFO.nameAr}
          </p>
          <p className="text-xs text-stone-500">
            الدار البيضاء · تأسس في {CLUB_INFO.foundedAr} · {CLUB_INFO.seasonLabel}
          </p>
        </div>

        <div className="flex flex-wrap items-center gap-x-6 gap-y-2 text-xs text-stone-600">
          <a
            href={CLUB_INFO.officialWebsite}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-1 hover:text-[#C8102E] transition-colors"
          >
            <span>الموقع الرسمي (wydadac.ma)</span>
            <ExternalLink className="w-3 h-3" />
          </a>
          <a
            href={CLUB_INFO.officialFacebook}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-1 hover:text-[#C8102E] transition-colors"
          >
            <span>الصفحة الرسمية فايسبوك</span>
            <ExternalLink className="w-3 h-3" />
          </a>
          <a
            href={CLUB_INFO.flashscoreUrl}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-1 hover:text-[#C8102E] transition-colors"
          >
            <span>إحصائيات فلاشسكور</span>
            <ExternalLink className="w-3 h-3" />
          </a>
        </div>
      </div>
    </footer>
  );
}
