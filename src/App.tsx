import { useMemo, useState } from 'react';
import FlashscoreStatsSection from './components/FlashscoreStatsSection';
import Footer from './components/Footer';
import HeroSection from './components/HeroSection';
import HistoryAndTrophiesSection from './components/HistoryAndTrophiesSection';
import MatchCenterSection from './components/MatchCenterSection';
import MatchDetailModal from './components/MatchDetailModal';
import Navbar from './components/Navbar';
import PlayerProfileModal from './components/PlayerProfileModal';
import SquadSection from './components/SquadSection';
import {
  AggregatedPlayerStat,
  getAggregatedPlayerStats,
  Player,
  SeasonMatch,
} from './data/wydadData';

export default function App() {
  const playerStats = useMemo(() => getAggregatedPlayerStats(), []);

  const [matchFilter, setMatchFilter] = useState<'all' | 'played' | 'upcoming' | 'home' | 'away'>('all');
  const [selectedMatch, setSelectedMatch] = useState<SeasonMatch | null>(null);
  const [selectedPlayerStat, setSelectedPlayerStat] = useState<AggregatedPlayerStat | null>(null);

  const handleJumpToUpcoming = () => {
    setMatchFilter('upcoming');
    const el = document.getElementById('matches');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleExploreMatches = () => {
    setMatchFilter('all');
    const el = document.getElementById('matches');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleSelectPlayerFromMatch = (player: Player) => {
    const stat = playerStats.find((s) => s.player.id === player.id) ?? null;
    setSelectedMatch(null);
    setSelectedPlayerStat(stat);
  };

  return (
    <div dir="rtl" className="min-h-screen bg-[#FAF9F7] text-[#141212]">
      <Navbar onJumpToUpcoming={handleJumpToUpcoming} />

      <main>
        <HeroSection onExploreMatches={handleExploreMatches} />

        <MatchCenterSection
          onSelectMatch={setSelectedMatch}
          activeFilter={matchFilter}
          onFilterChange={setMatchFilter}
        />

        <SquadSection
          playerStats={playerStats}
          onSelectPlayer={setSelectedPlayerStat}
        />

        <FlashscoreStatsSection
          playerStats={playerStats}
          onSelectPlayer={setSelectedPlayerStat}
        />

        <HistoryAndTrophiesSection />
      </main>

      <Footer />

      <MatchDetailModal
        match={selectedMatch}
        onClose={() => setSelectedMatch(null)}
        onSelectPlayer={handleSelectPlayerFromMatch}
      />

      <PlayerProfileModal
        playerStat={selectedPlayerStat}
        onClose={() => setSelectedPlayerStat(null)}
        onSelectMatch={(match) => setSelectedMatch(match)}
      />
    </div>
  );
}
