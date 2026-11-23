import { ChevronDown, ChevronUp } from 'lucide-react';
import { useState } from 'react';
import { CLUB_INFO, HISTORY_ERAS, TROPHY_CABINET } from '../data/wydadData';

type TrophyFilter = 'all' | 'national' | 'continental' | 'historical';

export default function HistoryAndTrophiesSection() {
  const [trophyFilter, setTrophyFilter] = useState<TrophyFilter>('all');
  const [expandedTrophy, setExpandedTrophy] = useState<string | null>('botola');
  const [heritageError, setHeritageError] = useState(false);

  const filteredTrophies = TROPHY_CABINET.filter(
    (t) => trophyFilter === 'all' || t.category === trophyFilter
  );

  return (
    <section id="history" className="py-12 sm:py-16 border-t border-stone-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        {/* Founding Heritage Split */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          <div className="lg:col-span-6 bg-white border border-stone-200 rounded-2xl p-6 sm:p-8 lg:p-10 flex flex-col justify-between gap-6">
            <div className="space-y-4">
              <p className="text-xs font-medium text-[#C8102E]">
                متحف الذاكرة الودادية · تأسيس {CLUB_INFO.foundedAr}
              </p>
              <h2 className="font-display font-extrabold text-2xl sm:text-3xl text-[#141212] text-balance">
                نادي الأمة والعميد: مسيرة 89 عاماً من الألقاب والمقاومة
              </h2>
              <p className="text-sm sm:text-base text-stone-600 leading-relaxed">
                وُلد نادي الوداد الرياضي من رحم الحركة الوطنية المغربية في 8 ماي 1937 بمبادرة من
                الحاج {CLUB_INFO.founderAr}، قبل أن يؤسس الأسطورة {CLUB_INFO.footballFatherAr} فرع
                كرة القدم في يونيو 1939. يحمل النادي {CLUB_INFO.registrationNumber} ويُعد الأكثر
                تتويجاً في تاريخ الكرة المغربية.
              </p>
            </div>

            <dl className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-5 border-t border-stone-200 text-xs sm:text-sm">
              <div>
                <dt className="text-stone-500">المؤسس</dt>
                <dd className="font-semibold text-[#141212] mt-0.5">{CLUB_INFO.founderAr}</dd>
              </div>
              <div>
                <dt className="text-stone-500">الأب الروحي لكرة القدم</dt>
                <dd className="font-semibold text-[#141212] mt-0.5">الأب جيكو (محمد ماسون)</dd>
              </div>
              <div>
                <dt className="text-stone-500">الملعب التاريخي</dt>
                <dd className="font-semibold text-[#141212] mt-0.5">{CLUB_INFO.stadiumAr}</dd>
              </div>
              <div>
                <dt className="text-stone-500">المقر والتداريب</dt>
                <dd className="font-semibold text-[#141212] mt-0.5">{CLUB_INFO.trainingCenterAr}</dd>
              </div>
            </dl>
          </div>

          <div className="lg:col-span-6 flex flex-col">
            <div className="flex-1 rounded-2xl overflow-hidden border border-stone-200 bg-stone-900 min-h-[280px]">
              {!heritageError ? (
                <img
                  src="/src/assets/images/wac_trophy_heritage_1795409784794.jpg"
                  alt="القميص التاريخي لنادي الوداد الرياضي وكؤوس التتويج القارية والوطنية"
                  referrerPolicy="no-referrer"
                  onError={() => setHeritageError(true)}
                  className="w-full h-full object-cover"
                />
              ) : (
                <div className="w-full h-full bg-gradient-to-br from-[#2B070E] to-stone-900" />
              )}
            </div>
            <p className="text-xs text-stone-500 mt-2.5">
              لوحة أرشيفية — القميص التاريخي الأحمر والأبيض بجانب الكؤوس القارية والوطنية للوداد الرياضي.
            </p>
          </div>
        </div>

        {/* Chronological History Eras */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {HISTORY_ERAS.map((era, index) => (
            <div
              key={era.period}
              className="bg-white border border-stone-200 rounded-2xl p-5 flex flex-col justify-between gap-4"
            >
              <div className="space-y-2">
                <div className="flex items-center justify-between text-xs text-stone-500">
                  <span className="font-mono font-bold text-[#C8102E] tabular-nums">
                    0{index + 1}.
                  </span>
                  <span className="font-mono tabular-nums">{era.period}</span>
                </div>
                <h3 className="font-display font-bold text-base text-[#141212] leading-snug">
                  {era.titleAr}
                </h3>
                <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">{era.summaryAr}</p>
              </div>
              <p className="text-[11px] text-stone-500 pt-3 border-t border-stone-100">
                أبرز الأسماء: {era.keyFiguresAr}
              </p>
            </div>
          ))}
        </div>

        {/* Trophy Cabinet */}
        <div className="space-y-6">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div>
              <h3 className="font-display font-extrabold text-xl sm:text-2xl text-[#141212]">
                خزانة الألقاب الرسمية (أكثر من 50 لقباً رسمياً)
              </h3>
              <p className="text-xs sm:text-sm text-stone-500 mt-0.5">
                اضغط على أي بطولة لعرض جميع سنوات التتويج
              </p>
            </div>

            <div className="flex flex-wrap items-center gap-1.5 p-1 bg-stone-100 rounded-xl border border-stone-200/70">
              {(
                [
                  { id: 'all', label: 'جميع الألقاب' },
                  { id: 'national', label: 'الألقاب الوطنية' },
                  { id: 'continental', label: 'القارية والعربية' },
                  { id: 'historical', label: 'ألقاب التأسيس' },
                ] as { id: TrophyFilter; label: string }[]
              ).map((tab) => (
                <button
                  key={tab.id}
                  type="button"
                  onClick={() => setTrophyFilter(tab.id)}
                  className={`px-3 py-1.5 text-xs font-medium rounded-lg transition-colors cursor-pointer ${
                    trophyFilter === tab.id
                      ? 'bg-white text-[#141212] shadow-sm font-semibold'
                      : 'text-stone-600 hover:text-[#141212]'
                  }`}
                >
                  {tab.label}
                </button>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {filteredTrophies.map((trophy) => {
              const isOpen = expandedTrophy === trophy.id;

              return (
                <div
                  key={trophy.id}
                  className="bg-white border border-stone-200 rounded-2xl p-5 flex flex-col justify-between gap-3"
                >
                  <button
                    type="button"
                    onClick={() => setExpandedTrophy(isOpen ? null : trophy.id)}
                    className="w-full text-right flex items-start justify-between gap-3 cursor-pointer"
                  >
                    <div className="space-y-1">
                      <span className="text-[11px] font-medium text-stone-500">
                        {trophy.categoryLabelAr}
                      </span>
                      <h4 className="font-display font-bold text-base text-[#141212]">
                        {trophy.titleAr}
                      </h4>
                    </div>
                    <div className="flex items-center gap-2 shrink-0">
                      <span className="font-mono font-extrabold text-2xl text-[#C8102E] tabular-nums">
                        {trophy.count}
                      </span>
                      {isOpen ? (
                        <ChevronUp className="w-4 h-4 text-stone-400" />
                      ) : (
                        <ChevronDown className="w-4 h-4 text-stone-400" />
                      )}
                    </div>
                  </button>

                  <p className="text-xs text-stone-600 leading-relaxed">{trophy.descriptionAr}</p>

                  {isOpen && (
                    <div className="pt-3 border-t border-stone-100">
                      <p className="text-[11px] font-semibold text-stone-500 mb-1.5">
                        سنوات التتويج:
                      </p>
                      <p className="font-mono text-xs text-[#141212] leading-relaxed tabular-nums">
                        {trophy.years.join(' · ')}
                      </p>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
