import { ArrowUpDown, ExternalLink } from 'lucide-react';
import { useMemo, useState } from 'react';
import {
  AggregatedPlayerStat,
  getRatingTierLabel,
  OFFICIAL_DISPATCHES,
} from '../data/wydadData';

interface FlashscoreStatsSectionProps {
  playerStats: AggregatedPlayerStat[];
  onSelectPlayer: (stat: AggregatedPlayerStat) => void;
}

type SortKey = 'avgRating' | 'minutesPlayed' | 'goals' | 'appearances';

export default function FlashscoreStatsSection({
  playerStats,
  onSelectPlayer,
}: FlashscoreStatsSectionProps) {
  const [sortBy, setSortBy] = useState<SortKey>('avgRating');

  const sortedStats = useMemo(() => {
    return [...playerStats]
      .filter((s) => s.appearances > 0)
      .sort((a, b) => {
        if (sortBy === 'avgRating') return b.avgRating - a.avgRating || b.minutesPlayed - a.minutesPlayed;
        if (sortBy === 'minutesPlayed') return b.minutesPlayed - a.minutesPlayed || b.avgRating - a.avgRating;
        if (sortBy === 'goals') return b.goals - a.goals || b.assists - a.assists || b.avgRating - a.avgRating;
        return b.appearances - a.appearances || b.minutesPlayed - a.minutesPlayed;
      });
  }, [playerStats, sortBy]);

  return (
    <section id="analytics" className="py-12 sm:py-16 border-t border-stone-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-8">
          <div>
            <p className="text-xs font-medium text-[#C8102E]">
              مؤشر فلاشسكور والأخبار الرسمية · 7 جولات ملعوبة
            </p>
            <h2 className="font-display font-extrabold text-2xl sm:text-3xl text-[#141212] mt-1">
              دقائق اللعب، التقييمات وأخبار النادي الرسمية
            </h2>
          </div>
          <p className="text-sm text-stone-600 max-w-md">
            جدول تفصيلي لمشاركات جميع لاعبي الوداد الرياضي حتى الجولة السابعة، مقترن بآخر بلاغات الموقع الرسمي وصفحة فايسبوك.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Player Minutes & Flashscore Ratings Table (8 cols) */}
          <div className="lg:col-span-8 bg-white border border-stone-200 rounded-2xl overflow-hidden">
            <div className="px-5 py-4 border-b border-stone-200 flex flex-wrap items-center justify-between gap-3">
              <h3 className="font-display font-bold text-base text-[#141212]">
                سجل دقائق اللعب وتقييمات فلاشسكور (2026–2027)
              </h3>
              <div className="flex flex-wrap items-center gap-1.5">
                {(
                  [
                    { key: 'avgRating', label: 'التقييم' },
                    { key: 'minutesPlayed', label: 'الدقائق' },
                    { key: 'goals', label: 'الأهداف' },
                    { key: 'appearances', label: 'المباريات' },
                  ] as { key: SortKey; label: string }[]
                ).map((opt) => (
                  <button
                    key={opt.key}
                    type="button"
                    onClick={() => setSortBy(opt.key)}
                    className={`inline-flex items-center gap-1 px-2.5 py-1.5 text-xs font-medium rounded-lg transition-colors cursor-pointer ${
                      sortBy === opt.key
                        ? 'bg-[#C8102E] text-white font-semibold'
                        : 'bg-stone-100 text-stone-600 hover:text-[#141212]'
                    }`}
                  >
                    <ArrowUpDown className="w-3 h-3" />
                    <span>{opt.label}</span>
                  </button>
                ))}
              </div>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full text-right border-collapse">
                <thead>
                  <tr className="border-b border-stone-200 text-[11px] font-semibold text-stone-500 bg-stone-50/70">
                    <th className="py-2.5 px-4">اللاعب</th>
                    <th className="py-2.5 px-3 text-center">مباريات</th>
                    <th className="py-2.5 px-3 text-center">دقائق اللعب</th>
                    <th className="py-2.5 px-3 text-center">أهداف</th>
                    <th className="py-2.5 px-3 text-center">أسيست</th>
                    <th className="py-2.5 px-3 text-center">صفراء</th>
                    <th className="py-2.5 px-4 text-center">تقييم فلاشسكور</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-stone-100 text-xs sm:text-sm">
                  {sortedStats.map((item) => {
                    const tier = getRatingTierLabel(item.avgRating);
                    const pctOfMax = Math.min(100, Math.round((item.minutesPlayed / 630) * 100));

                    return (
                      <tr
                        key={item.player.id}
                        onClick={() => onSelectPlayer(item)}
                        className="hover:bg-stone-50/90 transition-colors cursor-pointer"
                      >
                        <td className="py-3 px-4">
                          <div className="flex items-center gap-2.5">
                            <span className="font-mono text-xs text-stone-400 w-6 tabular-nums">
                              #{item.player.number}
                            </span>
                            <div>
                              <p className="font-display font-bold text-[#141212]">
                                {item.player.nameAr}
                              </p>
                              <p className="text-[11px] text-stone-500">{item.player.positionAr}</p>
                            </div>
                          </div>
                        </td>
                        <td className="py-3 px-3 text-center font-mono tabular-nums text-stone-700">
                          {item.appearances}
                        </td>
                        <td className="py-3 px-3">
                          <div className="flex flex-col items-center gap-1">
                            <span className="font-mono font-semibold text-[#141212] tabular-nums">
                              {item.minutesPlayed}&apos;
                            </span>
                            <div className="w-16 h-1.5 bg-stone-100 rounded-full overflow-hidden">
                              <div
                                className="h-full bg-[#C8102E]"
                                style={{ width: `${pctOfMax}%` }}
                              />
                            </div>
                          </div>
                        </td>
                        <td className="py-3 px-3 text-center font-mono font-semibold tabular-nums text-[#141212]">
                          {item.goals}
                        </td>
                        <td className="py-3 px-3 text-center font-mono tabular-nums text-stone-600">
                          {item.assists}
                        </td>
                        <td className="py-3 px-3 text-center font-mono tabular-nums text-stone-600">
                          {item.yellowCards}
                        </td>
                        <td className="py-3 px-4 text-center">
                          <span
                            className={`inline-block px-2.5 py-0.5 rounded font-mono text-xs font-bold tabular-nums ${tier.bgClass} ${tier.colorClass}`}
                          >
                            {item.avgRating.toFixed(2)} · {tier.labelAr}
                          </span>
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          </div>

          {/* Official Website & Facebook Dispatches (4 cols) */}
          <div className="lg:col-span-4 space-y-4">
            <div className="bg-white border border-stone-200 rounded-2xl p-5 sm:p-6 space-y-5">
              <div>
                <h3 className="font-display font-bold text-base text-[#141212]">
                  أخبار وبلاغات المصادر الرسمية
                </h3>
                <p className="text-xs text-stone-500 mt-0.5">
                  مستقاة من موقع النادي وصفحته الرسمية على فايسبوك
                </p>
              </div>

              <div className="divide-y divide-stone-100 space-y-4">
                {OFFICIAL_DISPATCHES.map((dispatch, idx) => (
                  <article key={dispatch.id} className={idx > 0 ? 'pt-4' : ''}>
                    <div className="flex items-center justify-between gap-2 text-[11px] text-stone-500">
                      <span className="font-semibold text-[#C8102E]">{dispatch.sourceAr}</span>
                      <span>{dispatch.dateAr}</span>
                    </div>
                    <h4 className="font-display font-bold text-sm text-[#141212] mt-1 leading-snug">
                      {dispatch.titleAr}
                    </h4>
                    <p className="text-xs text-stone-600 mt-1.5 leading-relaxed">
                      {dispatch.excerptAr}
                    </p>
                    <a
                      href={dispatch.sourceUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-1 text-[11px] font-semibold text-stone-700 hover:text-[#C8102E] mt-2"
                    >
                      <span>زيارة المصدر الرسمي</span>
                      <ExternalLink className="w-3 h-3" />
                    </a>
                  </article>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
