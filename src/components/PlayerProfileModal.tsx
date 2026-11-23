import { X } from 'lucide-react';
import { useEffect } from 'react';
import {
  AggregatedPlayerStat,
  getRatingTierLabel,
  SEASON_MATCHES,
  SeasonMatch,
} from '../data/wydadData';
import PlayerKitAvatar from './PlayerKitAvatar';

interface PlayerProfileModalProps {
  playerStat: AggregatedPlayerStat | null;
  onClose: () => void;
  onSelectMatch: (match: SeasonMatch) => void;
}

export default function PlayerProfileModal({
  playerStat,
  onClose,
  onSelectMatch,
}: PlayerProfileModalProps) {
  useEffect(() => {
    if (!playerStat) return;
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKey);
    return () => window.removeEventListener('keydown', handleKey);
  }, [playerStat, onClose]);

  if (!playerStat) return null;

  const { player, appearances, starts, minutesPlayed, goals, assists, yellowCards, avgRating, matchLogs } =
    playerStat;
  const ratingTier = getRatingTierLabel(avgRating);

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs"
      role="dialog"
      aria-modal="true"
      aria-label={`ملف اللاعب ${player.nameAr}`}
      onClick={onClose}
    >
      <div
        className="bg-white border border-stone-200 rounded-2xl w-full max-w-3xl max-h-[90vh] flex flex-col overflow-hidden shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Top Profile Header */}
        <div className="px-6 py-5 border-b border-stone-200 bg-[#FAF9F7] flex items-start justify-between gap-4">
          <div className="flex items-center gap-4 sm:gap-5">
            <PlayerKitAvatar
              number={player.number}
              nameAr={player.nameAr}
              kitStyle={player.kitStyle}
              isCaptain={player.isCaptain}
              size="md"
            />
            <div className="space-y-1">
              <div className="flex flex-wrap items-center gap-2 text-xs text-stone-500">
                <span className="font-semibold text-[#C8102E]">{player.positionAr}</span>
                <span aria-hidden="true">·</span>
                <span>{player.nationality}</span>
                {player.isCaptain && (
                  <>
                    <span aria-hidden="true">·</span>
                    <span className="font-semibold text-amber-700">عميد الفريق</span>
                  </>
                )}
              </div>
              <h3 className="font-display font-extrabold text-xl sm:text-2xl text-[#141212]">
                {player.nameAr}
              </h3>
              <p className="text-xs font-mono text-stone-500">{player.nameLat}</p>
            </div>
          </div>

          <button
            type="button"
            onClick={onClose}
            aria-label="إغلاق ملف اللاعب"
            className="w-10 h-10 rounded-lg border border-stone-200 bg-white flex items-center justify-center text-stone-600 hover:text-[#141212] hover:bg-stone-100 transition-colors shrink-0 cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Body */}
        <div className="p-6 overflow-y-auto space-y-6">
          <p className="text-sm text-stone-700 leading-relaxed">{player.bioAr}</p>

          {/* Physical & Contract Metadata Grid */}
          <dl className="grid grid-cols-2 sm:grid-cols-5 gap-4 py-4 border-y border-stone-200 text-sm">
            <div>
              <dt className="text-xs text-stone-500">العمر</dt>
              <dd className="font-mono font-semibold text-[#141212] tabular-nums mt-0.5">
                {player.age} سنة
              </dd>
            </div>
            <div>
              <dt className="text-xs text-stone-500">الطول</dt>
              <dd className="font-mono font-semibold text-[#141212] tabular-nums mt-0.5">
                {player.heightCm} سم
              </dd>
            </div>
            <div>
              <dt className="text-xs text-stone-500">القدم المفضلة</dt>
              <dd className="font-semibold text-[#141212] mt-0.5">{player.preferredFoot}</dd>
            </div>
            <div>
              <dt className="text-xs text-stone-500">القيمة السوقية</dt>
              <dd className="font-mono font-semibold text-[#141212] tabular-nums mt-0.5" dir="ltr">
                {player.marketValue}
              </dd>
            </div>
            <div>
              <dt className="text-xs text-stone-500">سنة الانضمام</dt>
              <dd className="font-mono font-semibold text-[#141212] tabular-nums mt-0.5">
                {player.joinedYear}
              </dd>
            </div>
          </dl>

          {/* Season 2026-27 Flashscore Totals */}
          <div>
            <div className="flex items-center justify-between mb-3">
              <h4 className="font-display font-bold text-base text-[#141212]">
                حصيلة موسم 2026–2027 (فلاشسكور)
              </h4>
              <span
                className={`px-2.5 py-1 rounded-md text-xs font-bold font-mono tabular-nums ${ratingTier.bgClass} ${ratingTier.colorClass}`}
              >
                {avgRating > 0 ? `${avgRating.toFixed(2)} · ${ratingTier.labelAr}` : 'لم يشارك بعد'}
              </span>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-5 gap-3">
              <div className="bg-stone-50 border border-stone-200 rounded-xl p-3.5">
                <p className="text-xs text-stone-500">المشاركات (أساسي)</p>
                <p className="font-mono font-bold text-xl text-[#141212] tabular-nums mt-1">
                  {appearances} <span className="text-xs font-normal text-stone-500">({starts})</span>
                </p>
              </div>
              <div className="bg-stone-50 border border-stone-200 rounded-xl p-3.5">
                <p className="text-xs text-stone-500">دقائق اللعب</p>
                <p className="font-mono font-bold text-xl text-[#C8102E] tabular-nums mt-1">
                  {minutesPlayed}&apos;
                </p>
              </div>
              <div className="bg-stone-50 border border-stone-200 rounded-xl p-3.5">
                <p className="text-xs text-stone-500">الأهداف</p>
                <p className="font-mono font-bold text-xl text-[#141212] tabular-nums mt-1">
                  {goals}
                </p>
              </div>
              <div className="bg-stone-50 border border-stone-200 rounded-xl p-3.5">
                <p className="text-xs text-stone-500">التمريرات الحاسمة</p>
                <p className="font-mono font-bold text-xl text-[#141212] tabular-nums mt-1">
                  {assists}
                </p>
              </div>
              <div className="bg-stone-50 border border-stone-200 rounded-xl p-3.5">
                <p className="text-xs text-stone-500">البطاقات الصفراء</p>
                <p className="font-mono font-bold text-xl text-[#141212] tabular-nums mt-1">
                  {yellowCards}
                </p>
              </div>
            </div>
          </div>

          {/* Match-by-Match Flashscore Log */}
          <div>
            <h4 className="font-display font-bold text-sm text-[#141212] mb-3">
              سجل الدقائق والتقييمات حسب كل جولة
            </h4>

            {matchLogs.length > 0 ? (
              <div className="border border-stone-200 rounded-xl divide-y divide-stone-100 overflow-hidden">
                {matchLogs.map((log) => {
                  const tier = getRatingTierLabel(log.rating);
                  const linkedMatch = SEASON_MATCHES.find((m) => m.id === log.matchId);

                  return (
                    <button
                      key={log.matchId}
                      type="button"
                      onClick={() => {
                        if (linkedMatch) {
                          onClose();
                          onSelectMatch(linkedMatch);
                        }
                      }}
                      className="w-full text-right px-4 py-3 flex items-center justify-between gap-4 hover:bg-stone-50 transition-colors cursor-pointer"
                    >
                      <div className="min-w-0">
                        <p className="text-sm font-display font-bold text-[#141212]">
                          {log.roundLabelAr} · أمام {log.opponentAr}
                        </p>
                        <p className="text-xs text-stone-500 mt-0.5">
                          النتيجة: <span className="font-mono tabular-nums">{log.scoreLabel}</span> ·{' '}
                          {log.starter ? 'تشكيلة أساسية' : 'دخول كبديل'}
                          {log.goals > 0 ? ` · ${log.goals} هدف` : ''}
                          {log.assists > 0 ? ` · ${log.assists} أسيست` : ''}
                        </p>
                      </div>

                      <div className="flex items-center gap-3 shrink-0">
                        <span className="font-mono text-xs font-semibold text-stone-700 tabular-nums">
                          {log.minutes}&apos;
                        </span>
                        <span
                          className={`px-2.5 py-1 rounded-md font-mono text-xs font-bold tabular-nums ${tier.bgClass} ${tier.colorClass}`}
                        >
                          {log.rating.toFixed(1)}
                        </span>
                      </div>
                    </button>
                  );
                })}
              </div>
            ) : (
              <div className="p-4 rounded-xl border border-stone-200 bg-stone-50 text-sm text-stone-600">
                اللاعب ضمن قائمة الفريق الأول للموسم الجاري ولم يسجل دقائق رسمية في الجولات السبع الأولى بعد.
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
