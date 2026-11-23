import { Search } from 'lucide-react';
import { useMemo, useState } from 'react';
import {
  AggregatedPlayerStat,
  getRatingTierLabel,
  PositionGroup,
  TECHNICAL_STAFF,
} from '../data/wydadData';
import PlayerKitAvatar from './PlayerKitAvatar';

interface SquadSectionProps {
  playerStats: AggregatedPlayerStat[];
  onSelectPlayer: (stat: AggregatedPlayerStat) => void;
}

type SquadTab = 'ALL' | PositionGroup | 'STAFF';

const SQUAD_TABS: { id: SquadTab; label: string }[] = [
  { id: 'ALL', label: 'الكل (26)' },
  { id: 'GK', label: 'حراسة المرمى (3)' },
  { id: 'DEF', label: 'خط الدفاع (9)' },
  { id: 'MID', label: 'خط الوسط (7)' },
  { id: 'FWD', label: 'خط الهجوم (7)' },
  { id: 'STAFF', label: 'الطاقم التقني' },
];

export default function SquadSection({ playerStats, onSelectPlayer }: SquadSectionProps) {
  const [activeTab, setActiveTab] = useState<SquadTab>('ALL');
  const [query, setQuery] = useState('');
  const [spotlightError, setSpotlightError] = useState(false);

  const filteredPlayers = useMemo(() => {
    const q = query.trim().toLowerCase();
    return playerStats.filter((item) => {
      const matchesTab = activeTab === 'ALL' || item.player.positionGroup === activeTab;
      if (!matchesTab) return false;
      if (!q) return true;
      return (
        item.player.nameAr.includes(q) ||
        item.player.nameLat.toLowerCase().includes(q) ||
        String(item.player.number) === q ||
        item.player.positionAr.includes(q)
      );
    });
  }, [playerStats, activeTab, query]);

  return (
    <section id="squad" className="py-12 sm:py-16 border-t border-stone-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Editorial Squad Overview Split Header */}
        <div className="bg-white border border-stone-200 rounded-2xl overflow-hidden grid grid-cols-1 lg:grid-cols-12 items-stretch mb-8">
          <div className="lg:col-span-8 p-6 sm:p-8 lg:p-10 flex flex-col justify-between gap-6">
            <div className="space-y-2">
              <p className="text-xs font-medium text-[#C8102E]">
                التركيبة البشرية الرسمية · موسم 2026–2027
              </p>
              <h2 className="font-display font-extrabold text-2xl sm:text-3xl text-[#141212] text-balance">
                كتيبة الوداد الرياضي: القميص، السيرة وأرقام فلاشسكور
              </h2>
              <p className="text-sm sm:text-base text-stone-600 leading-relaxed max-w-2xl">
                تجمع لائحة الفريق الأول لموسم 2026–2027 بين القادة المخضرمين، النجوم الدوليين مثل
                حكيم زياش ويحيى عطية الله، والمواهب الشابة الصاعدة. اضغط على بطاقة أي لاعب لاستعراض
                ملفه الشخصي الكامل ودقائق لعبه وتقييماته في كل جولة.
              </p>
            </div>

            <div className="grid grid-cols-3 gap-4 pt-4 border-t border-stone-200">
              <div>
                <p className="font-mono font-bold text-xl sm:text-2xl text-[#141212] tabular-nums">
                  26
                </p>
                <p className="text-xs text-stone-500 mt-0.5">لاعباً مسجلاً بالفريق الأول</p>
              </div>
              <div>
                <p className="font-mono font-bold text-xl sm:text-2xl text-[#141212] tabular-nums">
                  26.8
                </p>
                <p className="text-xs text-stone-500 mt-0.5">متوسط أعمار التركيبة (سنة)</p>
              </div>
              <div>
                <p className="font-mono font-bold text-xl sm:text-2xl text-[#C8102E] tabular-nums" dir="ltr">
                  ~17.5M €
                </p>
                <p className="text-xs text-stone-500 mt-0.5">القيمة السوقية الإجمالية</p>
              </div>
            </div>
          </div>

          <div className="lg:col-span-4 relative min-h-[240px] lg:min-h-full bg-stone-900">
            {!spotlightError ? (
              <img
                src="/src/assets/images/wac_player_attack_1795409785850.jpg"
                alt="قميص نادي الوداد الرياضي الرسمي لموسم 2026-2027"
                referrerPolicy="no-referrer"
                onError={() => setSpotlightError(true)}
                className="w-full h-full object-cover object-top"
              />
            ) : (
              <div className="w-full h-full bg-gradient-to-br from-[#8B0B20] to-stone-900" />
            )}
            <div
              className="absolute inset-0 bg-gradient-to-t from-black/75 via-transparent to-transparent"
              aria-hidden="true"
            />
            <p className="absolute bottom-4 right-4 left-4 text-xs text-stone-200">
              أطقم القلعة الحمراء لموسم 2026–2027 · مركب بنجلون
            </p>
          </div>
        </div>

        {/* Filter & Search Toolbar */}
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4 mb-6">
          <div className="flex flex-wrap items-center gap-1.5 p-1 bg-stone-100 rounded-xl border border-stone-200/70">
            {SQUAD_TABS.map((tab) => (
              <button
                key={tab.id}
                type="button"
                onClick={() => setActiveTab(tab.id)}
                className={`px-3 py-2 text-xs font-medium rounded-lg transition-colors whitespace-nowrap shrink-0 cursor-pointer ${
                  activeTab === tab.id
                    ? 'bg-white text-[#141212] shadow-sm font-semibold'
                    : 'text-stone-600 hover:text-[#141212]'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>

          {activeTab !== 'STAFF' && (
            <div className="relative w-full lg:w-72 shrink-0">
              <Search className="w-4 h-4 text-stone-400 absolute right-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
              <input
                type="search"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="ابحث بالاسم أو رقم القميص..."
                aria-label="ابحث عن لاعب"
                className="w-full pr-10 pl-3.5 py-2.5 text-sm bg-white border border-stone-200 rounded-xl text-[#141212] placeholder:text-stone-400 focus:outline-none focus:ring-2 focus:ring-[#C8102E]"
              />
            </div>
          )}
        </div>

        {/* Technical Staff Grid */}
        {activeTab === 'STAFF' ? (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {TECHNICAL_STAFF.map((member) => (
              <div
                key={member.id}
                className="bg-white border border-stone-200 rounded-2xl p-6 space-y-2"
              >
                <div className="flex items-center justify-between gap-2 text-xs text-stone-500">
                  <span className="font-semibold text-[#C8102E]">{member.roleAr}</span>
                  <span>
                    {member.nationality} · {member.since}
                  </span>
                </div>
                <h3 className="font-display font-extrabold text-lg text-[#141212]">
                  {member.nameAr}
                </h3>
                <p className="text-xs font-mono text-stone-500">{member.nameLat}</p>
                <p className="text-sm text-stone-600 leading-relaxed pt-1">{member.noteAr}</p>
              </div>
            ))}
          </div>
        ) : filteredPlayers.length === 0 ? (
          <div className="bg-white border border-stone-200 rounded-2xl p-10 text-center space-y-2">
            <p className="font-display font-bold text-base text-[#141212]">
              لم يتم العثور على لاعب مطابق لبحثك
            </p>
            <button
              type="button"
              onClick={() => {
                setQuery('');
                setActiveTab('ALL');
              }}
              className="text-xs font-semibold text-[#C8102E] hover:underline cursor-pointer"
            >
              إعادة عرض جميع اللاعبين
            </button>
          </div>
        ) : (
          /* Players Grid */
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
            {filteredPlayers.map((item) => {
              const { player, appearances, minutesPlayed, goals, avgRating } = item;
              const tier = getRatingTierLabel(avgRating);

              return (
                <button
                  key={player.id}
                  type="button"
                  onClick={() => onSelectPlayer(item)}
                  className="text-right bg-white border border-stone-200 hover:border-[#C8102E]/60 rounded-2xl p-4 transition-colors flex flex-col justify-between gap-4 group cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#C8102E]"
                >
                  <div className="flex items-start gap-3.5">
                    <PlayerKitAvatar
                      number={player.number}
                      nameAr={player.nameAr}
                      kitStyle={player.kitStyle}
                      isCaptain={player.isCaptain}
                      size="md"
                    />
                    <div className="min-w-0 flex-1 space-y-1 pt-0.5">
                      <p className="text-[11px] text-stone-500 truncate">
                        {player.positionAr} · {player.nationality}
                      </p>
                      <h3 className="font-display font-extrabold text-base text-[#141212] group-hover:text-[#C8102E] transition-colors truncate">
                        {player.nameAr}
                      </h3>
                      <p className="text-[11px] font-mono text-stone-400 truncate">
                        #{player.number} · {player.age} سنة
                      </p>
                      <p className="text-xs font-mono font-semibold text-stone-700 tabular-nums pt-1" dir="ltr">
                        {player.marketValue}
                      </p>
                    </div>
                  </div>

                  {/* Season Metrics Footer */}
                  <div className="pt-3 border-t border-stone-100 flex items-center justify-between text-xs">
                    <div className="flex items-center gap-3 text-stone-600 font-mono tabular-nums">
                      <span>{appearances} م</span>
                      <span>{minutesPlayed}&apos;</span>
                      {goals > 0 && <span className="text-[#C8102E] font-bold">{goals} هـ</span>}
                    </div>
                    <span
                      className={`px-2 py-0.5 rounded font-mono font-bold tabular-nums ${tier.bgClass} ${tier.colorClass}`}
                    >
                      {avgRating > 0 ? avgRating.toFixed(1) : '—'}
                    </span>
                  </div>
                </button>
              );
            })}
          </div>
        )}
      </div>
    </section>
  );
}
