import { ArrowDownLeft } from 'lucide-react';
import { useState } from 'react';
import { CLUB_INFO } from '../data/wydadData';

interface HeroSectionProps {
  onExploreMatches: () => void;
}

const KPI_STRIP = [
  {
    value: '22',
    label: 'لقب بطولة وطنية',
    detail: 'الرقم القياسي المغربي المطلق',
  },
  {
    value: '3',
    label: 'دوري أبطال إفريقيا',
    detail: '1992 · 2017 · 2022',
  },
  {
    value: '11',
    label: 'نقطة بعد 7 جولات',
    detail: 'موسم 2026–2027 · المركز الخامس',
  },
  {
    value: '1937',
    label: 'تأسيس النادي العريق',
    detail: '8 ماي · السجل رقم 1 بالجامعة',
  },
];

export default function HeroSection({ onExploreMatches }: HeroSectionProps) {
  const [imgError, setImgError] = useState(false);

  return (
    <section id="hero" className="pt-6 pb-12 sm:pt-8 sm:pb-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Dominant Cinematic Stadium Hero Frame */}
        <div className="relative rounded-2xl overflow-hidden bg-stone-900 border border-stone-200 min-h-[460px] lg:min-h-[540px] flex items-end">
          {!imgError ? (
            <img
              src="/src/assets/images/wac_hero_stadium_1795409784793.jpg"
              alt="المركب الرياضي محمد الخامس بالدار البيضاء في سهرة كروية لنادي الوداد الرياضي"
              referrerPolicy="no-referrer"
              onError={() => setImgError(true)}
              className="absolute inset-0 w-full h-full object-cover"
            />
          ) : (
            <div className="absolute inset-0 bg-gradient-to-br from-[#2B070E] via-[#171414] to-stone-900" />
          )}

          {/* Measured Dark Scrim for WCAG AA+ Contrast */}
          <div
            className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/55 to-black/25"
            aria-hidden="true"
          />

          <div className="relative z-10 w-full p-6 sm:p-10 lg:p-12 flex flex-col lg:flex-row lg:items-end justify-between gap-8">
            <div className="max-w-2xl space-y-4">
              <p className="text-xs sm:text-sm font-medium text-stone-300 tracking-wide">
                الدار البيضاء · {CLUB_INFO.stadiumAr} · {CLUB_INFO.seasonLabel}
              </p>

              <h1
                className="font-display font-extrabold text-white leading-[1.2] text-balance"
                style={{ fontSize: 'clamp(2rem, 3.8vw, 3.25rem)' }}
              >
                نادي الوداد الرياضي البيضاوي — ذاكرة المجد من 1937 إلى موسم 2027
              </h1>

              <p className="text-sm sm:text-base text-stone-200 leading-relaxed max-w-xl">
                البوابة المرجعية الشاملة لمتابعة أخبار القلعة الحمراء، سجل التتويجات التاريخية، لائحة
                التركيبة البشرية، برنامج البطولة الاحترافية، وإحصائيات كل مباراة بدقائق اللعب وتقييمات
                فلاشسكور.
              </p>

              <div className="pt-2 flex flex-wrap items-center gap-4">
                <button
                  type="button"
                  onClick={onExploreMatches}
                  className="inline-flex items-center gap-2 px-5 py-3 text-sm font-semibold text-white bg-[#C8102E] hover:bg-[#A30D25] rounded-lg transition-colors cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white"
                >
                  <span>نتائج وبرنامج البطولة 2026–2027</span>
                  <ArrowDownLeft className="w-4 h-4" />
                </button>

                <a
                  href="#squad"
                  className="inline-flex items-center px-4 py-3 text-sm font-medium text-stone-100 hover:text-white underline underline-offset-4 decoration-stone-400 hover:decoration-white transition-colors"
                >
                  تصفح التركيبة البشرية (26 لاعباً)
                </a>
              </div>
            </div>

            {/* Official Sources Attribution Block */}
            <div className="lg:text-left shrink-0 border-t lg:border-t-0 lg:border-r border-white/15 pt-4 lg:pt-0 lg:pr-6 space-y-1.5">
              <p className="text-xs font-medium text-stone-300">المصادر المعتمدة والمرجعية</p>
              <div className="flex flex-wrap lg:justify-end items-center gap-x-3 gap-y-1 text-xs text-stone-200">
                <a
                  href={CLUB_INFO.officialWebsite}
                  target="_blank"
                  rel="noreferrer"
                  className="hover:text-white underline underline-offset-4 decoration-white/40"
                >
                  الموقع الرسمي للوداد
                </a>
                <span aria-hidden="true">·</span>
                <a
                  href={CLUB_INFO.officialFacebook}
                  target="_blank"
                  rel="noreferrer"
                  className="hover:text-white underline underline-offset-4 decoration-white/40"
                >
                  الصفحة الرسمية فايسبوك
                </a>
                <span aria-hidden="true">·</span>
                <a
                  href={CLUB_INFO.flashscoreUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="hover:text-white underline underline-offset-4 decoration-white/40"
                >
                  بيانات فلاشسكور
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Full-Width 4-Column Proof / Club Metric Strip Below Hero */}
        <div className="mt-6 grid grid-cols-2 lg:grid-cols-4 gap-4">
          {KPI_STRIP.map((item) => (
            <div
              key={item.label}
              className="bg-white border border-stone-200 rounded-xl p-5 flex flex-col justify-between"
            >
              <span className="font-mono font-bold text-3xl sm:text-4xl text-[#C8102E] tabular-nums">
                {item.value}
              </span>
              <div className="mt-2">
                <p className="font-display font-bold text-sm sm:text-base text-[#141212]">
                  {item.label}
                </p>
                <p className="text-xs text-stone-500 mt-0.5">{item.detail}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
