import { BarChart3, Calendar, ChevronLeft, MapPin } from 'lucide-react';
import { useState } from 'react';
import { BOTOLA_STANDINGS, SEASON_MATCHES, SeasonMatch } from '../data/wydadData';

interface MatchCenterSectionProps {
  onSelectMatch: (match: SeasonMatch) => void;
  activeFilter: 'all' | 'played' | 'upcoming' | 'home' | 'away';
  onFilterChange: (filter: 'all' | 'played' | 'upcoming' | 'home' | 'away') => void;
}

const FILTER_TABS: { id: 'all' | 'played' | 'upcoming' | 'home' | 'away'; label: string }[] = [
  { id: 'all', label: 'الكل (15)' },
  { id: 'played', label: 'النتائج السابقة (7)' },
  { id: 'upcoming', label: 'المواعيد القادمة (8)' },
  { id: 'home', label: 'داخل الميدان' },
  { id: 'away', label: 'خارج الميدان' },
];

function getOutcomeText(outcome?: 'W' | 'D' | 'L') {
  if (outcome === 'W') return { label: 'فوز', cls: 'text-emerald-800 bg-emerald-50 border-emerald-200' };
  if (outcome === 'D') return { label: 'تعادل', cls: 'text-amber-800 bg-amber-50 border-amber-200' };
  if (outcome === 'L') return { label: 'خسارة', cls: 'text-rose-800 bg-rose-50 border-rose-200' };
  return { label: 'مجدولة', cls: 'text-stone-700 bg-stone-100 border-stone-200' };
}

export default function MatchCenterSection({
  onSelectMatch,
  activeFilter,
  onFilterChange,
}: MatchCenterSectionProps) {
  const [standingsExpanded, setStandingsExpanded] = useState(false);

  const filteredMatches = SEASON_MATCHES.filter((m) => {
    if (activeFilter === 'played') return m.status === 'played';
    if (activeFilter === 'upcoming') return m.status === 'upcoming';
    if (activeFilter === 'home') return m.isWydadHome;
    if (activeFilter === 'away') return !m.isWydadHome;
    return true;
  });

  const nextMatch = SEASON_MATCHES.find((m) => m.status === 'upcoming');
  const visibleStandings = standingsExpanded ? BOTOLA_STANDINGS : BOTOLA_STANDINGS.slice(0, 8);

  return (
    <section id="matches" className="py-12 sm:py-16 border-t border-stone-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-8">
          <div>
            <p className="text-xs font-medium text-[#C8102E]">
              البطولة الاحترافية إنوي · موسم 2026–2027
            </p>
            <h2 className="font-display font-extrabold text-2xl sm:text-3xl text-[#141212] mt-1">
              برنامج البطولة، النتائج والترتيب العام
            </h2>
          </div>
          <p className="text-sm text-stone-600 max-w-md">
            اضغط على أي مباراة ملعوبة لاستعراض جميع إحصائياتها الدقيقة ودقائق لعب وتقييمات كل لاعب حسب فلاشسكور.
          </p>
        </div>

        {/* Next Match Spotlight Banner */}
        {nextMatch && (
          <div className="bg-white border border-stone-200 rounded-2xl p-6 sm:p-8 mb-8 flex flex-col lg:flex-row lg:items-center justify-between gap-6">
            <div className="space-y-2">
              <div className="flex flex-wrap items-center gap-2 text-xs text-stone-500">
                <span className="font-semibold text-[#C8102E]">الموعد القادم</span>
                <span aria-hidden="true">·</span>
                <span>{nextMatch.roundLabelAr}</span>
                <span aria-hidden="true">·</span>
                <span>{nextMatch.competitionAr}</span>
              </div>
              <h3 className="font-display font-extrabold text-xl sm:text-2xl text-[#141212]">
                {nextMatch.homeTeamAr} × {nextMatch.awayTeamAr}
              </h3>
              <p className="text-sm text-stone-600 max-w-2xl leading-relaxed">
                {nextMatch.summaryNoteAr}
              </p>
            </div>

            <div className="shrink-0 flex flex-col sm:flex-row lg:flex-col items-start sm:items-center lg:items-end gap-3 border-t lg:border-t-0 pt-4 lg:pt-0 border-stone-200">
              <div className="flex items-center gap-2 text-xs font-medium text-stone-700">
                <Calendar className="w-4 h-4 text-[#C8102E]" />
                <span>{nextMatch.dateAr}</span>
              </div>
              <div className="flex items-center gap-2 text-xs text-stone-500">
                <MapPin className="w-4 h-4 text-stone-400" />
                <span>{nextMatch.stadiumAr}</span>
              </div>
            </div>
          </div>
        )}

        {/* Main 12-Col Grid: Fixtures/Results (7 cols) + Standings Table (5 cols) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left/Right Main Column: Matches List */}
          <div className="lg:col-span-7 space-y-5">
            {/* Segmented Interactive Filter Bar */}
            <div className="flex flex-wrap items-center gap-1.5 p-1 bg-stone-100 rounded-xl border border-stone-200/70">
              {FILTER_TABS.map((tab) => {
                const isActive = activeFilter === tab.id;
                return (
                  <button
                    key={tab.id}
                    type="button"
                    onClick={() => onFilterChange(tab.id)}
                    className={`px-3 py-2 text-xs font-medium rounded-lg transition-colors whitespace-nowrap shrink-0 cursor-pointer ${
                      isActive
                        ? 'bg-white text-[#141212] shadow-sm font-semibold'
                        : 'text-stone-600 hover:text-[#141212]'
                    }`}
                  >
                    {tab.label}
                  </button>
                );
              })}
            </div>

            {/* Matches List */}
            <div className="bg-white border border-stone-200 rounded-2xl divide-y divide-stone-100 overflow-hidden">
              {filteredMatches.map((match) => {
                const isPlayed = match.status === 'played';
                const outcomeMeta = getOutcomeText(match.outcome);
                const homeScore = match.isWydadHome ? match.wydadScore : match.opponentScore;
                const awayScore = match.isWydadHome ? match.opponentScore : match.wydadScore;

                return (
                  <div
                    key={match.id}
                    className={`p-4 sm:p-5 transition-colors ${
                      isPlayed ? 'hover:bg-stone-50/80' : 'bg-white'
                    }`}
                  >
                    <div className="flex flex-wrap items-center justify-between gap-2 text-xs text-stone-500 mb-3">
                      <div className="flex items-center gap-2">
                        <span className="font-semibold text-stone-700">{match.roundLabelAr}</span>
                        <span aria-hidden="true">·</span>
                        <span>{match.dateAr}</span>
                        <span aria-hidden="true">·</span>
                        <span>{match.isWydadHome ? 'داخل الميدان' : 'خارج الميدان'}</span>
                      </div>
                      <span
                        className={`px-2 py-0.5 text-[11px] font-semibold rounded border ${outcomeMeta.cls}`}
                      >
                        {outcomeMeta.label}
                      </span>
                    </div>

                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                      {/* Teams & Scoreboard */}
                      <div className="flex items-center justify-between sm:justify-start gap-4 flex-1">
                        <span
                          className={`text-sm sm:text-base font-display ${
                            match.isWydadHome ? 'font-extrabold text-[#141212]' : 'font-semibold text-stone-700'
                          }`}
                        >
                          {match.homeTeamAr}
                        </span>

                        {isPlayed ? (
                          <div className="px-3 py-1 bg-stone-100 rounded-lg font-mono font-bold text-base text-[#141212] tabular-nums shrink-0">
                            {homeScore} - {awayScore}
                          </div>
                        ) : (
                          <span className="px-2.5 py-1 bg-stone-50 border border-stone-200 rounded-lg font-mono text-xs text-stone-600 tabular-nums shrink-0">
                            {match.kickoff}
                          </span>
                        )}

                        <span
                          className={`text-sm sm:text-base font-display ${
                            !match.isWydadHome ? 'font-extrabold text-[#141212]' : 'font-semibold text-stone-700'
                          }`}
                        >
                          {match.awayTeamAr}
                        </span>
                      </div>

                      {/* Action Trigger */}
                      {isPlayed ? (
                        <button
                          type="button"
                          onClick={() => onSelectMatch(match)}
                          className="inline-flex items-center justify-center gap-1.5 px-3.5 py-2 text-xs font-semibold text-[#C8102E] bg-rose-50/70 hover:bg-[#C8102E] hover:text-white border border-rose-200/80 hover:border-[#C8102E] rounded-lg transition-colors whitespace-nowrap shrink-0 cursor-pointer"
                        >
                          <BarChart3 className="w-3.5 h-3.5" />
                          <span>الإحصائيات والتقييمات</span>
                          <ChevronLeft className="w-3.5 h-3.5" />
                        </button>
                      ) : (
                        <span className="text-xs text-stone-500 whitespace-nowrap shrink-0">
                          {match.stadiumAr.split('،')[0]}
                        </span>
                      )}
                    </div>

                    {/* Goalscorers Preview for Played Matches */}
                    {isPlayed && match.events && match.events.length > 0 && (
                      <div className="mt-3 pt-2.5 border-t border-stone-100 flex flex-wrap items-center gap-x-4 gap-y-1 text-xs text-stone-500">
                        {match.events
                          .filter((e) => e.type === 'goal' || e.type === 'penalty')
                          .map((ev, idx) => (
                            <span key={`${match.id}-ev-${idx}`} className="tabular-nums">
                              {ev.minute} {ev.playerAr}
                              {ev.team === 'opponent' ? ' (الخصم)' : ''}
                            </span>
                          ))}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>

          {/* Secondary Column: Botola Pro Standings Table */}
          <div className="lg:col-span-5">
            <div className="bg-white border border-stone-200 rounded-2xl overflow-hidden">
              <div className="px-5 py-4 border-b border-stone-200 flex items-center justify-between">
                <div>
                  <h3 className="font-display font-bold text-base text-[#141212]">
                    ترتيب البطولة الاحترافية
                  </h3>
                  <p className="text-xs text-stone-500 mt-0.5">بعد مرور 7 جولات · موسم 2026–2027</p>
                </div>
                <span className="text-xs font-mono text-stone-500 tabular-nums">J7</span>
              </div>

              <div className="overflow-x-auto">
                <table className="w-full text-right border-collapse">
                  <thead>
                    <tr className="border-b border-stone-200 text-[11px] font-semibold text-stone-500 bg-stone-50/70">
                      <th className="py-2.5 px-3 w-10">#</th>
                      <th className="py-2.5 px-2">الفريق</th>
                      <th className="py-2.5 px-2 text-center">ل</th>
                      <th className="py-2.5 px-2 text-center">ف</th>
                      <th className="py-2.5 px-2 text-center">ت</th>
                      <th className="py-2.5 px-2 text-center">خ</th>
                      <th className="py-2.5 px-2 text-center">ف.أ</th>
                      <th className="py-2.5 px-3 text-center">نقاط</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-stone-100 text-xs sm:text-sm">
                    {visibleStandings.map((row) => (
                      <tr
                        key={row.rank}
                        className={
                          row.isWydad
                            ? 'bg-rose-50/60 font-semibold text-[#141212]'
                            : 'text-stone-700 hover:bg-stone-50/70'
                        }
                      >
                        <td className="py-3 px-3 font-mono tabular-nums text-stone-500">
                          {row.rank}
                        </td>
                        <td className="py-3 px-2 font-display">
                          <span className={row.isWydad ? 'text-[#C8102E] font-bold' : ''}>
                            {row.teamAr}
                          </span>
                        </td>
                        <td className="py-3 px-2 text-center font-mono tabular-nums">{row.played}</td>
                        <td className="py-3 px-2 text-center font-mono tabular-nums">{row.won}</td>
                        <td className="py-3 px-2 text-center font-mono tabular-nums">{row.drawn}</td>
                        <td className="py-3 px-2 text-center font-mono tabular-nums">{row.lost}</td>
                        <td className="py-3 px-2 text-center font-mono tabular-nums" dir="ltr">
                          {row.goalDiff > 0 ? `+${row.goalDiff}` : row.goalDiff}
                        </td>
                        <td className="py-3 px-3 text-center font-mono font-bold tabular-nums text-[#141212]">
                          {row.points}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              <div className="px-5 py-3 border-t border-stone-100 flex items-center justify-between bg-stone-50/50">
                <span className="text-[11px] text-stone-500">
                  ل: لعب · ف: فوز · ت: تعادل · خ: خسارة · ف.أ: فارق الأهداف
                </span>
                <button
                  type="button"
                  onClick={() => setStandingsExpanded((prev) => !prev)}
                  className="text-xs font-semibold text-[#C8102E] hover:underline cursor-pointer"
                >
                  {standingsExpanded ? 'عرض أقل' : 'عرض المراكز العشرة'}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
