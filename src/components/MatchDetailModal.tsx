import { Clock, MapPin, Shield, X } from 'lucide-react';
import { useEffect, useState } from 'react';
import {
  getRatingTierLabel,
  Player,
  SeasonMatch,
  SQUAD_PLAYERS,
} from '../data/wydadData';

interface MatchDetailModalProps {
  match: SeasonMatch | null;
  onClose: () => void;
  onSelectPlayer: (player: Player) => void;
}

export default function MatchDetailModal({
  match,
  onClose,
  onSelectPlayer,
}: MatchDetailModalProps) {
  const [activeTab, setActiveTab] = useState<'stats' | 'lineup'>('stats');

  useEffect(() => {
    if (!match) return;
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKey);
    return () => window.removeEventListener('keydown', handleKey);
  }, [match, onClose]);

  if (!match) return null;

  const homeScore = match.isWydadHome ? match.wydadScore : match.opponentScore;
  const awayScore = match.isWydadHome ? match.opponentScore : match.wydadScore;
  const starters = match.lineup?.filter((p) => p.starter) ?? [];
  const subs = match.lineup?.filter((p) => !p.starter) ?? [];

  const getPlayer = (id: string) => SQUAD_PLAYERS.find((p) => p.id === id);

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs"
      role="dialog"
      aria-modal="true"
      aria-label={`تفاصيل مباراة ${match.homeTeamAr} ضد ${match.awayTeamAr}`}
      onClick={onClose}
    >
      <div
        className="bg-white border border-stone-200 rounded-2xl w-full max-w-4xl max-h-[90vh] flex flex-col overflow-hidden shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Header */}
        <div className="px-6 py-5 border-b border-stone-200 flex items-start justify-between gap-4 bg-[#FAF9F7]">
          <div className="space-y-1">
            <div className="flex flex-wrap items-center gap-2 text-xs text-stone-500">
              <span className="font-semibold text-[#C8102E]">{match.roundLabelAr}</span>
              <span aria-hidden="true">·</span>
              <span>{match.competitionAr}</span>
              <span aria-hidden="true">·</span>
              <span>{match.dateAr}</span>
            </div>
            <div className="flex items-center gap-4 pt-1">
              <span className="font-display font-extrabold text-lg sm:text-2xl text-[#141212]">
                {match.homeTeamAr}
              </span>
              <span className="px-3.5 py-1 bg-[#141212] text-white font-mono font-bold text-lg sm:text-xl rounded-lg tabular-nums">
                {homeScore} - {awayScore}
              </span>
              <span className="font-display font-extrabold text-lg sm:text-2xl text-[#141212]">
                {match.awayTeamAr}
              </span>
            </div>
            <div className="flex items-center gap-1.5 text-xs text-stone-500 pt-1">
              <MapPin className="w-3.5 h-3.5" />
              <span>{match.stadiumAr}</span>
            </div>
          </div>

          <button
            type="button"
            onClick={onClose}
            aria-label="إغلاق نافذة المباراة"
            className="w-10 h-10 rounded-lg border border-stone-200 bg-white flex items-center justify-center text-stone-600 hover:text-[#141212] hover:bg-stone-100 transition-colors shrink-0 cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Sub-navigation Tabs */}
        <div className="px-6 py-3 border-b border-stone-200 flex items-center gap-2 bg-white">
          <button
            type="button"
            onClick={() => setActiveTab('stats')}
            className={`px-4 py-2 text-xs font-semibold rounded-lg transition-colors cursor-pointer ${
              activeTab === 'stats'
                ? 'bg-[#C8102E] text-white'
                : 'bg-stone-100 text-stone-700 hover:bg-stone-200/70'
            }`}
          >
            إحصائيات المباراة الشاملة
          </button>
          <button
            type="button"
            onClick={() => setActiveTab('lineup')}
            className={`px-4 py-2 text-xs font-semibold rounded-lg transition-colors cursor-pointer ${
              activeTab === 'lineup'
                ? 'bg-[#C8102E] text-white'
                : 'bg-stone-100 text-stone-700 hover:bg-stone-200/70'
            }`}
          >
            تقييمات فلاشسكور ودقائق اللعب ({match.lineup?.length ?? 0})
          </button>
        </div>

        {/* Scrollable Content */}
        <div className="p-6 overflow-y-auto space-y-6">
          {match.summaryNoteAr && (
            <p className="text-sm text-stone-700 bg-stone-50 border border-stone-200 rounded-xl p-4 leading-relaxed">
              {match.summaryNoteAr}
            </p>
          )}

          {/* Match Events */}
          {match.events && match.events.length > 0 && (
            <div>
              <h4 className="font-display font-bold text-sm text-[#141212] mb-3">
                أبرز أحداث اللقاء
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                {match.events.map((ev, i) => (
                  <div
                    key={`${ev.minute}-${i}`}
                    className="flex items-center justify-between px-3.5 py-2.5 rounded-lg border border-stone-200 bg-white text-xs"
                  >
                    <div className="flex items-center gap-2.5">
                      <span className="font-mono font-bold text-[#C8102E] tabular-nums">
                        {ev.minute}
                      </span>
                      <span className="font-semibold text-[#141212]">{ev.playerAr}</span>
                    </div>
                    <span className="text-stone-500">
                      {ev.detailAr ??
                        (ev.type === 'yellow' ? 'بطاقة صفراء' : ev.type === 'penalty' ? 'ركلة جزاء' : 'هدف')}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Tab 1: Full Match Statistics */}
          {activeTab === 'stats' && match.stats && (
            <div className="space-y-4">
              <div className="flex items-center justify-between text-xs font-semibold text-stone-500 border-b border-stone-100 pb-2">
                <span className="text-[#C8102E]">الوداد الرياضي</span>
                <span>إحصائيات فلاشسكور</span>
                <span className="text-stone-700">
                  {match.isWydadHome ? match.awayTeamAr : match.homeTeamAr}
                </span>
              </div>

              <div className="space-y-4">
                {match.stats.map((stat) => {
                  const wNum = Number(stat.wydad);
                  const oNum = Number(stat.opponent);
                  const total = wNum + oNum || 1;
                  const wPct = Math.round((wNum / total) * 100);
                  const oPct = 100 - wPct;

                  return (
                    <div key={stat.labelAr} className="space-y-1.5">
                      <div className="flex items-center justify-between text-xs sm:text-sm">
                        <span className="font-mono font-bold text-[#C8102E] tabular-nums">
                          {stat.wydad}
                          {stat.isPercent ? '%' : ''}
                        </span>
                        <span className="font-medium text-stone-700">{stat.labelAr}</span>
                        <span className="font-mono font-semibold text-stone-700 tabular-nums">
                          {stat.opponent}
                          {stat.isPercent ? '%' : ''}
                        </span>
                      </div>
                      <div className="h-2 w-full bg-stone-100 rounded-full overflow-hidden flex">
                        <div
                          className="bg-[#C8102E] h-full"
                          style={{ width: `${wPct}%` }}
                        />
                        <div
                          className="bg-stone-400 h-full"
                          style={{ width: `${oPct}%` }}
                        />
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          )}

          {/* Tab 2: Flashscore Player Lineup, Minutes Played & Ratings */}
          {activeTab === 'lineup' && (
            <div className="space-y-6">
              <div>
                <h4 className="font-display font-bold text-sm text-[#141212] mb-3">
                  التشكيلة الأساسية ({starters.length})
                </h4>
                <div className="border border-stone-200 rounded-xl divide-y divide-stone-100 overflow-hidden">
                  {starters.map((perf) => {
                    const player = getPlayer(perf.playerId);
                    if (!player) return null;
                    const tier = getRatingTierLabel(perf.rating);

                    return (
                      <button
                        key={perf.playerId}
                        type="button"
                        onClick={() => onSelectPlayer(player)}
                        className="w-full text-right px-4 py-3 flex items-center justify-between gap-4 hover:bg-stone-50 transition-colors cursor-pointer"
                      >
                        <div className="flex items-center gap-3 min-w-0">
                          <span className="w-7 h-7 rounded-md bg-stone-100 font-mono text-xs font-bold text-stone-700 flex items-center justify-center tabular-nums shrink-0">
                            {player.number}
                          </span>
                          <div className="min-w-0">
                            <p className="font-display font-bold text-sm text-[#141212] truncate">
                              {player.nameAr}
                            </p>
                            <p className="text-xs text-stone-500">
                              {player.positionAr}
                              {perf.goals ? ` · ${perf.goals} هدف` : ''}
                              {perf.assists ? ` · ${perf.assists} تمريرة حاسمة` : ''}
                              {perf.yellowCard ? ' · بطاقة صفراء' : ''}
                              {perf.saves ? ` · ${perf.saves} تصديات` : ''}
                            </p>
                          </div>
                        </div>

                        <div className="flex items-center gap-3 shrink-0">
                          <span className="inline-flex items-center gap-1 text-xs font-mono text-stone-600 tabular-nums">
                            <Clock className="w-3.5 h-3.5 text-stone-400" />
                            {perf.minutes}&apos;
                          </span>
                          <span
                            className={`px-2.5 py-1 rounded-md font-mono text-xs font-bold tabular-nums ${tier.bgClass} ${tier.colorClass}`}
                          >
                            {perf.rating.toFixed(1)} · {tier.labelAr}
                          </span>
                        </div>
                      </button>
                    );
                  })}
                </div>
              </div>

              {subs.length > 0 && (
                <div>
                  <h4 className="font-display font-bold text-sm text-[#141212] mb-3">
                    البدلاء المشاركون ({subs.length})
                  </h4>
                  <div className="border border-stone-200 rounded-xl divide-y divide-stone-100 overflow-hidden">
                    {subs.map((perf) => {
                      const player = getPlayer(perf.playerId);
                      if (!player) return null;
                      const tier = getRatingTierLabel(perf.rating);

                      return (
                        <button
                          key={perf.playerId}
                          type="button"
                          onClick={() => onSelectPlayer(player)}
                          className="w-full text-right px-4 py-3 flex items-center justify-between gap-4 hover:bg-stone-50 transition-colors cursor-pointer"
                        >
                          <div className="flex items-center gap-3 min-w-0">
                            <span className="w-7 h-7 rounded-md bg-stone-100 font-mono text-xs font-bold text-stone-700 flex items-center justify-center tabular-nums shrink-0">
                              {player.number}
                            </span>
                            <div className="min-w-0">
                              <p className="font-display font-bold text-sm text-[#141212] truncate">
                                {player.nameAr}
                              </p>
                              <p className="text-xs text-stone-500">
                                بديل · {player.positionAr}
                              </p>
                            </div>
                          </div>

                          <div className="flex items-center gap-3 shrink-0">
                            <span className="inline-flex items-center gap-1 text-xs font-mono text-stone-600 tabular-nums">
                              <Clock className="w-3.5 h-3.5 text-stone-400" />
                              {perf.minutes}&apos;
                            </span>
                            <span
                              className={`px-2.5 py-1 rounded-md font-mono text-xs font-bold tabular-nums ${tier.bgClass} ${tier.colorClass}`}
                            >
                              {perf.rating.toFixed(1)} · {tier.labelAr}
                            </span>
                          </div>
                        </button>
                      );
                    })}
                  </div>
                </div>
              )}

              <p className="text-xs text-stone-500 flex items-center gap-1.5">
                <Shield className="w-3.5 h-3.5 text-[#C8102E]" />
                <span>اضغط على أي لاعب لفتح ملفه الشخصي الكامل وسجل مبارياته هذا الموسم.</span>
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
